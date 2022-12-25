<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use App\Http\Requests\StoreAdminAPIRequest;
use App\Http\Requests\UpdateAdminAPIRequest;
use Illuminate\Http\Request;
use App\Models\Address;
use App\Models\Token;
use App\Models\Complaint;

class AdminAPIController extends Controller
{

    public function list(){
        $admins = Admin::all();
        return $admins;
    }

    public function userlist(){
        $admins = User::all();
        return $admins;
    }

    public function aviewprofile(Request $req){
        $admin = Admin::where('id',$req->id)->first();
        return $admin;
    }
 
    public function APIAddAdmin(Request $req){
 
        $address = new  Address();
        $address->Localaddress= $req->LocalAddress;
        $address->PoliceStation= $req->PoliceStation;
        $address->City= $req->City;
        $address->Country= $req->Country;
        $address->ZipCode= $req->ZipCode;
            
        $address->save();

        $admin = new  Admin();
        $admin->A_Name = $req->A_Name;
        $admin->A_AddressId = $address->id;
        $admin->A_Email = $req->A_Email;
        $admin->A_Phone = $req->A_Phone;
        $admin->A_Pass = $req->A_Pass;
        $admin->A_Photo=$req->A_Photo;
        if($admin->save()) return "Successful";
    }

    public function APIAddUser(Request $req){
 
        $address = new  Address();
        $address->Localaddress= $req->LocalAddress;
        $address->PoliceStation= $req->PoliceStation;
        $address->City= $req->City;
        $address->Country= $req->Country;
        $address->ZipCode= $req->ZipCode;
            
        $address->save();

        $user = new  User();
        $user->U_Name = $req->U_Name;
        $user->U_AddressId = $address->id;
        $user->U_Email = $req->U_Email;
        $user->U_Pass = $req->U_Pass;
        $user->U_Phn = $req->U_Phn;
        $user->U_Dob = $req->U_Dob;
        $user->U_Gender = $req->U_Gender;
        $user->U_Photo=$req->U_Photo;
        $user->status=1;
        if($user->save()) return "Successful";
    }

    public function getComplain($id){

        
        $complain = Complaint::find($id);
       // $complian->Status=$req->Status;

        //$complian->save();
        return $complain;
    }
    public function updateComplain(Request $req){

        
        $complain = Complaint::find($req->id);
        $complain->Status=$req->Status;

        $complain->save();
        return $complain;
    }

    public function adminDelete($id){

        
        $admin = Admin::find($id);
       // $complian->Status=$req->Status;
       $admin->delete();
        //$complian->save();
        return "successfull";
    }

    public function deleteComplain($id){

        
        $complain = Complaint::find($id);
       // $complian->Status=$req->Status;
       $complain->delete();
        //$complian->save();
        return "successfull";
    }

    public function userDelete($id){

        
        $user = User::find($id);
       // $complian->Status=$req->Status;
       $user->delete();
        //$complian->save();
        return "successfull";
    }
}