<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Address;
use App\Mail\registerMail;
use Illuminate\Support\Facades\Mail;
use Session;
 

class userController extends Controller
{
    public function home(){
        return view('home');
    }
    public function registration(){
        return view('registration');
    }
    public function login(){
        return view('login');
    }
    public function forgetPass(){
        return view('forgetPass');
    }
    public function editProfile(){
        $user=User::where ('U_Name', Session::get('user'))->first();
       
        return view('editProfile')->with ('user', $user);

    }
    public function changePass(){
        return view('changePass');
    }
    public function userDash(){
        return view('userDash');
    }
    public function viewProfile(){
        $user=User::where ('U_Name', Session::get('user'))->first();
        return view('viewProfile')->with ('user', $user);
    }
    public function wantSeller(){
        return view('wantSeller');
    }
public function userCreateSubmitted(Request $request){
    $validate = $request->validate([
        "U_Name"=>"required|min:5|max:30",
        "Localaddress"=>"required|max:100",
        "PoliceStation"=>"required|max:20",
        "City"=>"required|max:20",
        "Country"=>"required|max:20",
        "ZipCode"=>"required|max:20",
        "U_Email"=>"required",
        "U_Pass"=>"required|alpha_num",
        "U_Phn"=>"required|regex:/^([0-9\s\-\+\(\)]*)$/",
        "U_Dob"=>"required",
        "U_Gender"=>"required",
        "U_Photo"=>"required",       
        "cpassword"=>"same:U_Pass"
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
$user = new  User();
$user->U_Name = $request->U_Name;
$user->U_AddressId = $address->id;
$user->U_Email = $request->U_Email;
$user->U_Pass = $request->U_Pass;
$user->U_Phn = $request->U_Phn;
$user->U_Dob = $request->U_Dob;
$user->U_Gender = $request->U_Gender;
$request->U_Photo->store('U_Photo', 'public');
$user->U_Photo=$request->U_Photo->hashName();
$user->save();
$data=array(
    'U_Name'=>$request->U_Name,

    );
   
    Mail::to($request->U_Email)->send(new registerMail($data));


return redirect()->route('login');
   
}
public function loginSubmit(Request $request){
    $user = User::where('U_Email',$request->U_Email)
                        ->where('U_Pass',$request->U_Pass)
                        ->first();

 
    if($user){
        $request->session()->put('user',$user->U_Name);
        return redirect()->route('userDash');
    }
    return back();
}
public function logout(){
    session()->forget('user');
    return redirect()->route('login');
}


public function userEditSubmitted(Request $request){
    $user = User::where('U_Email', $request->U_Email)->first();
    $user->U_Name = $request->U_Name;
    $user->U_Email = $request->U_Email;
    $user->Localaddress = $request->Localaddress;
    $user->PoliceStation = $request->PoliceStation;
    $user->City = $request->City;
    $user->Country = $request->Country;
    $user->ZipCode = $request->ZipCode;
    $user->Phone = $request->Phone;
    $user->U_Dob = $request->U_Dob;
    $user->U_Gender = $request->U_Gender;
    $user->U_Photo = $request->U_Photo;

    $user->save();
    return redirect()->route('viewProfile');

}
public function APIList(){
    return User::all();
}
public function APIPost(Request $req){
    $user= new User();
    $user->U_Name= $req->U_Name;
    $user->U_Email = $req->U_Email;
    $user->save();
    return $req;
}
}

