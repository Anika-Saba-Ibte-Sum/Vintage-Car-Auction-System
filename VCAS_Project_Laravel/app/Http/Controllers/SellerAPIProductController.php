<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\CarRegDetail;
use App\Models\Catagory;
use App\Models\Seller;

class SellerAPIProductController extends Controller
{
    public function createproduct(Request $request){

          
          $catagory= new Catagory();
          $catagory->Model=$request->Model;
          $catagory->Color=$request->Color;
          $catagory->Glass=$request->Glass;
          $catagory->Wheel_Size=$request->Wheel_Size;
          $catagory->Body=$request->Body;
  
          $result=$catagory->save();
  
         
         
        
           $car_reg= new CarRegDetail();
           $car_reg->Reg_Num=$request->Reg_Num;
           $car_reg->Original_Purchase_Invoice_Photo=$request->OPIP;
           $car_reg->Insurance_Photo=$request->IP;
           $car_reg->Road_Tax_Recipt_Certificate=$request->RTRC;
           $car_reg->Pullotion_Certificate= $request->PC;
   
           $result1=$car_reg->save();
  
          
  
        
              $product= new Product();
              $product->S_Id	=$request->U_Id;
              $product->Category_Id=$catagory->id;
              $product->P_CarName=$request->P_CarName;
              $product->P_Photo= $request->P_Photo;
              $product->Car_Reg_Details_Id= $car_reg->id;
             
              $result2=$product->save();
                   
            
                if($result2) {
                    return "successfull";
                }
               
      }

     
   
      

      public function productDelete(Request $request){
        $product = Product::where('id', $request->id)->first();
     
        
        $catagory=Catagory::where('id', $product->Category_Id)->first();
        $car_reg=CarRegDetail::where('id', $product->Car_Reg_Details_Id)->first();
     
        $catagory->delete();
        $car_reg->delete();
        $product->delete();
     
        return "Successfull";
     }

     public function productEdit(Request $request){
       
        
        $item = Catagory::where('id', $request->id)->first();
        
        
        $item->id = $request->id;
        $item->Model = $request->Model;
        $item->Color = $request->Color;
        
        $item->Glass = $request->Model;
        
        $item->Wheel_Size = $request->Wheel_Size;
        $item->Body = $request->Body;
        $item->save();
        return "successfull";
        
        }

        public function viewproduct($id){

        
          $product = Product::where('S_Id', $id)->first();
         // $complian->Status=$req->Status;
  
          //$complian->save();
          return $product;
      }

      public function viewmodel($id){

        
        $product = Catagory::where('id',$id)->first();
       // $complian->Status=$req->Status;

        //$complian->save();
        return $product;
    }
    public function viewregdetail($id){

        
      $product = CarRegDetail::where('id', $id)->first();
     // $complian->Status=$req->Status;

      //$complian->save();
      return $product;
  }
    
        
    }  
  

