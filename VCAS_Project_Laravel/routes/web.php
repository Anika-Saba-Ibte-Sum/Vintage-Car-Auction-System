<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\loginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/home',[userController::class, 'home'])->name('home');
Route::get('/registration',[userController::class, 'registration'])->name('registration');
Route::post('/registration',[userController::class, 'userCreateSubmitted'])->name('registration');
Route::get('/login',[loginController::class, 'login'])->name('login');
Route::get('/forgetPass',[userController::class, 'forgetPass'])->name('forgetPass');
Route::get('/editProfile',[userController::class, 'editProfile'])->name('editProfile');

Route::get('/changePass',[userController::class, 'changePass'])->name('changePass');
Route::post('/login',[loginController::class, 'loginSubmit'])->name('login');
Route::get('/userDash',[userController::class, 'userDash'])->name('userDash');
Route::get('/viewProfile',[userController::class, 'viewProfile'])->name('viewProfile');

Route::get('/wantSeller',[userController::class, 'wantSeller'])->name('wantSeller');
Route::post('/editProfile',[userController::class, 'userEditSubmitted'])->name('editProfile');
Route::get('/logout',[userController::class,'logout'])->name('logout');

Route::get('/adminDash',[loginController::class, 'adminDash'])->name('adminDash');
Route::get('/addAdmin',[adminController::class, 'addAdmin'])->name('addAdmin');
Route::post('/addAdmin',[adminController::class, 'adminAdded'])->name('addAdmin');
Route::get('/adminList',[adminController::class, 'adminList'])->name('adminList');
Route::get('/auctionDetails',[adminController::class, 'auctionDetails'])->name('auctionDetails');
Route::get('/paymentDetails',[adminController::class, 'paymentDetails'])->name('paymentDetails');
Route::get('/productDetails',[adminController::class, 'productDetails'])->name('productDetails');
Route::get('/userComplains',[adminController::class, 'userComplains'])->name('userComplains');
Route::get('/pendingDetails',[adminController::class, 'pendingDetails'])->name('pendingDetails');
Route::post('/auctionDetails',[adminController::class, 'auctionAdded'])->name('auctionDetails');
