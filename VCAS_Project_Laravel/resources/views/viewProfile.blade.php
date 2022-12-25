@extends('layouts.app')
@section('content')

@if(Session::get('user')) {{Session::get('user')}} 
 <h1>Profile</h1>       
<form action="{{route('viewProfile')}}" class="form-group" method="post" enctype="multipart/form-data">

    {{csrf_field()}}

    <div class="col-md-4 form-group" >
        <span>Name</span>
        <input type="text" name="U_Name" value="{{$user->U_Name}}" class="form-control">
        
    </div>
    <div class="col-md-4 form-group">
        <span>Email</span>
        <input type="text" name="U_Email" value="{{$user->U_Email}}" class="form-control">
        
    </div>
    
    <div class="col-md-4 form-group">
        <span>Phone</span>
        <input type="text" name="U_Phn" value="{{$user->U_Phn}}" class="form-control">
        
    </div>
    <div class="col-md-4 form-group">
        <span>Date of Birth</span>
        <input type="date" name="U_Dob" value="{{$user->U_Dob}}" class="form-control">
        
    </div>
   
    <div class="col-md-4 form-group">
        <span>Photo</span>
        <input type="file" name="U_Photo" value="{{$user->U_Photo}}" class="form-control">
        
    </div>
    <br>
    <input type="submit" class="btn btn-success" value="Edit" href="{{route('editProfile')}}">  
                  
</form>
@endif
@endsection
