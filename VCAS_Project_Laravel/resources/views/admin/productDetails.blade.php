@extends('layouts.appAdmin')
@section('content')

    @if(Session::get('user')) {{Session::get('user')}}
    <table class="table table-border">
    <tr>
        <th>Car_Reg_Details_Id</th>
        <th>Car Name</th>
        <th>Photo</th>
        <th>Valid Status</th>
        
    </tr>
    <tr>
        <th>1</th>
        <th>BMW</th>
        <th>ANIKA.JPG</th>
        <th>Yes</th>
        
    </tr>
    <tr>
        <<th>2</th>
        <th>CHR</th>
        <th>ANIKA1.JPG</th>
        <th>Yes</th>
        
    </tr>
    <tr>
    <th>3</th>
        <th>Corolla</th>
        <th>ANIKA2.JPG</th>
        <th>Yes</th>
        
    </tr>
    <!-- @foreach($products as $product)
        <tr>
            <td>{{$product->P_CarName}}</td>
            <td>{{$product->P_Photo}}</td>
            <td>{{$product->Car_Reg_Details_Id}}</td>
            <td>{{$product->Valid_Status}}</td>
            
        </tr>
    @endforeach -->
</table>
   
        
    @endif 
@endsection 