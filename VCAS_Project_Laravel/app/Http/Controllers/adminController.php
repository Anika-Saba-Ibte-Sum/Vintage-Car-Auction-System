<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Address;
use App\Models\Auction;
use App\Models\Product;
use App\Models\Car_reg_Detail;
use App\Models\Complaint;
class adminController extends Controller
{
    public function adminDash(){
        return view('admin.adminDash');
    }
   
    public function auctionDetails(){
        $auction=Auction::all();  
        return view('admin.auctionDetails')->with("auctions", $auction);
    }
    public function productDetails(){
        $product=Product::all();        
        return view('admin.productDetails')->with("products", $product);
    }
    public function paymentDetails(){
        return view('admin.paymentDetails');
    }
    public function userComplains(){
        $complaint=Complaint::all();        
        return view('admin.userComplains')->with("complaints", $complaint);
    }
    public function addAdmin(){
        return view('admin.addAdmin');
    }
    public function pendingDetails(){
        return view('admin.pendingDetails');
    }
    // public function __construct(){
    //     $this->middleware('ValidAdmin');
    // }
    public function adminAdded(Request $request){
        $validate = $request->validate([
            "A_Name"=>"required|min:5|max:30",
            "Localaddress"=>"required|max:100",
            "PoliceStation"=>"required|max:20",
            "City"=>"required|max:20",
            "Country"=>"required|max:20",
            "ZipCode"=>"required|max:20",
            "A_Email"=>"required",
            "A_Pass"=>"required|alpha_num",
            "A_Phone"=>"required|regex:/^([0-9\s\-\+\(\)]*)$/",
            "A_Photo"=>"required"     
  
        ]
    );
    $address = new  Address();
    $address->Localaddress= $request->Localaddress;
    $address->PoliceStation= $request->PoliceStation;
    $address->City= $request->City;
    $address->Country= $request->Country;
    $address->ZipCode= $request->ZipCode;
        
    $address->save();
    
    $address=Address::orderBy('id', 'desc')->first();
    $admin = new  Admin();
    $admin->A_Name = $request->A_Name;
    $admin->A_AddressId = $address->id;
    $admin->A_Email = $request->A_Email;
    $admin->A_Pass = $request->A_Pass;
    $admin->A_Phone = $request->A_Phone;
    $request->A_Photo->store('A_Photo', 'public');
    $admin->A_Photo=$request->A_Photo->hashName();
    $admin->save();
    
    return redirect()->route('adminList');
       
    }

    public function adminloginSubmit(Request $request){
        $user = User::where('A_Email',$request->A_Email)
                            ->where('A_Pass',$request->A_Pass)
                            ->first();
    
     
        if($user){
            $request->session()->put('admin',$user->A_Name);
            return redirect()->route('adminDash');
        }
        return back();
    }
    public function adminList(){
       // $admins = Admin::paginate(3);
        $admins=Admin::all();
        return view('admin.adminList')->with("admins", $admins);
    }

    public function auctionAdded(Request $request){
        $validate = $request->validate([
            "S_Id"=>"required|min:5|max:30",
            "U_Id"=>"required|max:10",
            "P_Id"=>"required|max:20",
            "Start_Amount"=>"required|max:20",
            "Final_Amount"=>"required|max:20",
            "Win_Status"=>"required|max:20",
                
  
        ]
        
    );
    
    
    $seller=Seller::orderBy('id', 'desc')->first();
    $payment=Payment::orderBy('id', 'desc')->first();
    $user=User::orderBy('id', 'desc')->first();
    $auction = new  Auction();
    $auction->S_Id = $seller->id;
    $auction->U_Id = $user->id;
    $auction->P_Id = $payment->id;
    $auction->Start_Amount= $request->Start_Amount;
    $auction->Final_Amount = $request->Final_Amount;
    $auction->Win_Status = $request->Win_Status;
 
    $auction->save();
    
    return redirect()->route('auctionDetails');
       
    }

    public function APIAdminList(){
        return Admin::all();
    }
    public function APIAdminPost(Request $req){
        $address = new  Address();
        $address->Localaddress= $req->Localaddress;
        $address->PoliceStation= $req->PoliceStation;
        $address->City= $req->City;
        $address->Country= $req->Country;
        $address->ZipCode= $req->ZipCode;
            
        $address->save();

        $address=Address::orderBy('id', 'desc')->first();
        $admin = new  Admin();
        $admin->A_Name = $req->A_Name;
        $admin->A_AddressId = $address->id;
        $admin->A_Email = $req->A_Email;
        $admin->A_Pass = $req->A_Pass;
        $admin->A_Phone = $req->A_Phone;
        $admin->A_Photo=$req->A_Photo;
        $admin->save();
        return $req;
    }

    public function APIUComplain(){
        return Complaint::all();
    }

    public function APIAdminDash(){
        return Admin::all();
    }
}
