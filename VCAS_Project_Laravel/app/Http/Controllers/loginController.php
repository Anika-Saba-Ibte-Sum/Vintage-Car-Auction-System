<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
class loginController extends Controller
{
    public function login(){
        return view('login');
    }
    public function adminDash(){
        return view('admin.adminDash');
    }
    public function loginSubmit(Request $request){
        $admin = Admin ::where('A_Email',$request->U_Email)
                            ->where('A_Pass',$request->U_Pass)
                            ->first();
                            $user = User::where('U_Email',$request->U_Email)
                            ->where('U_Pass',$request->U_Pass)
                            ->first();
    
        if($admin){
            $request->session()->put('user',$admin->A_Name);
            return redirect()->route('adminDash');
        }
        else if($user){
            $request->session()->put('user',$user->U_Name);
            return redirect()->route('userDash');
        }
        return back();
    }
    public function logout(){
        session()->forget('user');
        return redirect()->route('login');
    }
}
