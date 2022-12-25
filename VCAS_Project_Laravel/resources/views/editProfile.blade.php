@extends('layouts.app')
@section('content')

@if(Session::get('user')) {{Session::get('user')}} 
        
<form action="{{route('editProfile')}}" class="form-group" method="post" enctype="multipart/form-data">

    {{csrf_field()}}

    <div class="col-md-4 form-group" >
        <span>Name</span>
        <input type="text" name="U_Name" value="{{$user->U_Name}}" class="form-control">
        @error('U_Name')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Email</span>
        <input type="text" name="U_Email" value="{{$user->U_Email}}" class="form-control">
        @error('U_Email')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    
    <div class="col-md-4 form-group">
        <span>Phone</span>
        <input type="text" name="U_Phn" value="{{$user->U_Phn}}" class="form-control">
        @error('U_Phn')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Date of Birth</span>
        <input type="date" name="U_Dob" value="{{$user->U_Dob}}" class="form-control">
        @error('U_Dob')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    
    
    <div class="col-md-4 form-group">
        <span>Photo</span>
        <input type="file" name="U_Photo" value="{{$user->U_Photo}}" class="form-control">
        @error('U_Photo')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <br>
    <input type="submit" class="btn btn-success" value="Save" >  
    <a class="btn btn-primary" href="{{route('login')}}">Log In</a>                
</form>
@endif
@endsection
