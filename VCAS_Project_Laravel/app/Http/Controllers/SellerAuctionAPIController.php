<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Auction;
use App\Models\Seller;
use App\Models\Product;
use Carbon\Carbon;

class SellerAuctionAPIController extends Controller
{
    public function createAuctionSubmit(Request $request){
    
       
  
      $product=Product::where('id',$request->P_Id)->first();
     
          $auction= new Auction();
          $auction->Start_Amount=$request->Start_Amount;
          $auction->Start_Time=$request->Start_Time;
          $auction->End_Time=$request->End_Time;
          $auction->P_Id=$request->P_Id;
          $auction->S_Id=$request->S_Id;
          $auction->S_BankName=$request->BankName;
          $auction->S_AccountNo=$request->Account_No;
          $auction->Picture=$product->P_Photo;
          $auction->Catagory_Id=$product->Category_Id;
          $auction->RegD_Id=$product->Car_Reg_Details_Id;
  
          $result=$auction->save();
          if ($result){
               return "Successfull";
          }
          else{
              return "Not Added!!Please try again";
          }
  
        
}

}
