<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\adminController;
use App\Http\Controllers\userController;
use App\Http\Controllers\LoginAPIController;
use App\Http\Controllers\UserAPIController;
use App\Http\Controllers\AdminAPIController;
use App\Http\Controllers\SellerAPIProductController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/AdminDetails',[adminController::class,'APIAdminList']);
Route::post('/APIadminListpost',[adminController::class,'APIAdminPost']);

Route::get('/UserDetails',[userController::class,'APIList']);
Route::post('/APIUserpost',[userController::class,'APIPost']);
Route::post('/createproduct',[SellerAPIProductController::class,'createproduct']);

Route::post('/productedit',[SellerAPIProductController::class,'productEdit']);
Route::post('/productdelete',[SellerAPIProductController::class,'productDelete']);

Route::get('/APIAdminDash',[adminController::class,'APIAdminDash']);

Route::post('/login',[UserAPIController::class,'apilogin']);
Route::post('/logout',[UserAPIController::class,'apilogout']); 

 //Route::get('/list',[AdminAPIController::class,'list'])->middleware('APIAuth');
 //Route::post('/addlist',[AdminAPIController::class,'add']);

 Route::post('/AdminAdded',[AdminAPIController::class,'APIAddAdmin']);
 Route::get('/getComplain/{id}',[AdminAPIController::class,'getComplain']);
 Route::get('/adminDelete/{id}',[AdminAPIController::class,'adminDelete']);
 Route::get('/userDelete/{id}',[AdminAPIController::class,'userDelete']);
 Route::get('/deleteComplain/{id}',[AdminAPIController::class,'deleteComplain']);
 Route::post('/updateComplain/{id}',[AdminAPIController::class,'updateComplain']);
 Route::post('/adminviewprofile',[AdminAPIController::class,'aviewprofile']);
 Route::post('/userviewprofile',[UserAPIController::class,'uviewprofile']);
 Route::post('/UserAdded',[AdminAPIController::class,'APIAddUser']);
 Route::post('/registration',[UserAPIController::class,'APIRegistration']); 
 Route::post('/checkotp',[UserAPIController::class,'APICheckOtp']); 

 Route::get('/APIUComplain',[adminController::class,'APIUComplain']);
 
 Route::get('/APIAdminDash',[adminController::class,'APIAdminDash']);
 Route::get('/APIAdminDash',[adminController::class,'APIAdminDash']);
 Route::get('/APIAdminDash',[adminController::class,'APIAdminDash']);
 Route::get('/APIAdminDash',[adminController::class,'APIAdminDash']);
 Route::get('/APIAdminDash',[adminController::class,'APIAdminDash']);
 Route::get('/APIAdminDash',[adminController::class,'APIAdminDash']);

 Route::get('/dash',[UserAPIController::class,'APIUserDash']);


 Route::get('/viewproduct/{id}',[SellerAPIProductController::class,'viewproduct']);
 Route::get('/viewmodel/{id}',[SellerAPIProductController::class,'viewmodel']);
 Route::get('/viewregdetail/{id}',[SellerAPIProductController::class,'viewregdetail']);