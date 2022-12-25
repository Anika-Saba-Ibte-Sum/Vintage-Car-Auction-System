<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
use App\Models\Token;
use DateTime;
class AuthenticationAPI extends Controller
{
    public function login(Request $req){

        $username = $req->username;
        $password = $req->password;

        $rec=explode('-',$username);

        if($rec[1]=="U"){

            $user = User::whereRaw("U_Email = '$U_Email'")->whereRaw("U_Pass = '$U_Pass'")->first();
            if($user){

                if($user->email_verified=="yes"){
                    if($user->status=="Valid"){
                        $api_token = Str::random(64);
                        $token = new Token();
                        $token->user_id = $user->U_Email;
                        $token->token = $api_token;
                        $token->token_for="User";
                        $token->created_at = new DateTime();
                        $token->save();
                        return $token;

                    }
                    else if($user->status=="Blocked"){
                        return "Blocked";
                    }


                }else if($user->email_verified==NULL){

                    return "Not Verified";
                }

            }else{
                return "Wrong Info";
            }
        }
       
        
        else if($rec[1]=="AD"){
            $admin = Admin::where('A_id',$req->A_Email)->where('A_Pass',$A_Pass)->first();
            if($admin){

                $api_token = Str::random(64);
                $token = new Token();
                $token->user_id = $admin->A_Email;
                $token->token = $api_token;
                $token->token_for="Admin";
                $token->created_at = new DateTime();
                $token->save();
                return $token;

            }else{
                return "Wrong Info";
            }

        }

        return "No User Found";

    }

    public function logout(Request $req){

        $activeUser=Token::where('token',$req->token)->first();
        $activeUser->expired_at=new DateTime();
        $activeUser->save();

        return "Success";

    }
    

    

    public function userExistence(Request $req){

        $activeUser=Token::where('token',$req->token)->where('expired_at',NULL)->first();

        if($activeUser && $activeUser->token_for=="Doctor"){
            return "Doctor";
        }else if($activeUser && $activeUser->token_for=="Patient"){
            return "Patient";
        }
        else if($activeUser && $activeUser->token_for=="Seller"){
            return "Seller";
        }
        else if($activeUser && $activeUser->token_for=="Admin"){
            return "Admin";
        }

            return "No";


    }

   

    

    
}
