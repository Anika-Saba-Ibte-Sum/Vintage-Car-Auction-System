@extends('layouts.appAdmin')
@section('content')

    @if(Session::get('user')) {{Session::get('user')}}

    <table class="table table-border">
    <tr>
        <th>Start Amount</th>
        <th>Final Amount</th>
        <th>Win Status</th>
    </tr>
    <tr>
           
           <td>100000</td>
           <td>150000</td>
           <td>Yes</td>
       </tr>
       <tr>
           
           <td>200000</td>
           <td>350000</td>
           <td>Yes</td>
       </tr>
       <tr>
           
           <td>100000</td>
           <td>150000</td>
           <td>Yes</td>
       </tr>
       <tr>
           
           <td>500000</td>
           <td>700000</td>
           <td>Yes</td>
       </tr> <tr>
           
           <td>10000</td>
           <td>10000</td>
           <td>No</td>
       </tr>
    @foreach($auctions as $auction)
        <tr>
           
            <td>{{$auction->Start_Amount}}</td>
            <td>{{$auction->Final_Amount}}</td>
            <td>{{$auction->Win_Status}}</td>
        </tr>
       
       
    @endforeach
</table>
        
    @endif 
@endsection 