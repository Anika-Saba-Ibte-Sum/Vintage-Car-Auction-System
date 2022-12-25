<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Address;
use App\Models\Token;
use App\Models\Admin;
use App\Mail\RegistrationConfirm;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use DateTime;
class UserAPIController extends Controller
{
    public function  apilogin(Request $request){

        $user = User::where('U_Email',$request->U_Email)
        ->where('U_Pass',$request->U_Pass)
        ->first();

        $admin =Admin::where('A_Email',$request->U_Email)
        ->where('A_Pass',$request->U_Pass)
        ->first();

        
        if($user){
            $api_token = Str::random(64);
            $token =new Token();
            $token->U_Id = $user->id;
            $token->tokenn = $api_token;
            $token->Type="User";
            $token->create_at = new DateTime();
            $token->save();
            return $token;
        }
        else if($admin){
            $api_token = Str::random(64);
            $token =new Token();
            $token->U_Id = $admin->id;
            $token->tokenn = $api_token;
            $token->Type="Admin";
            $token->create_at = new DateTime();
            $token->save();
            return $token;
        }
        return "No user found";

    }
    public function  apilogout(Request $req){

        $token = Token::where('tokenn',$req->token)->first();
        if($token){
            $token->expire_at =new DateTime();
            $token->save();
            return $token;
        }

    }
    public function  apicheckTokenExpire(Request $req){
       
       
        $token = Token::where('tokenn',$req->access_token)->where('expire_at',NULL)->first();
        if($token){
          
            return $token;
        }
        else{
            return "expierd";
        }

    }

    public function APIRegistration(Request $req){

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
        $user->status=0;
        $code = rand(1000,9000);
        $details = [
            'title' => 'Registration Confirmation',
            'code' => $code
        ];
        
        $user->U_otp = $code;
        Mail::to($req->U_Email)->send(new RegistrationConfirm($details));
        $result = $user->save();
       

        if($result){

          
            return response()->json([
                'message'=>'Registration Successful. An otp send in your Email.',
                'U_Email'=>$user->U_Email,
                'otp'=>$user->U_otp
            ]);
        }
        else{
          
            return response()->json([
                'message'=>'Registration Failed'
            ]);
        }
    }

    public function APIDash(){

        
    }



    
    public function APIUserDash(){
        return User::all();
    }

    public function APICheckOTP(Request $req){
      
        $user = User::where('U_Email',$req->U_Email)
        ->where('U_otp',$req->U_otp)
        ->first();
        if($user){
            $user->U_otp="";
            $user->status=1;
            $user->save();
        }
        else{
           return "Wrong Otp!Please Try Again";
        }
    }

    public function uviewprofile(Request $req){
        $admin = User::where('id',$req->id)->first();
        return $admin;
    }

}
