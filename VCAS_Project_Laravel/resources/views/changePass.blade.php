@extends('layouts.app')
@section('content')
@if(Session::get('user')) {{Session::get('user')}} 
        <a class="btn btn-danger" href="{{route('logout')}}">Log out </a>
<br><h1>Change Password</h1><br>
<form action="{{route('login')}}" class="form-group" method="post">

    {{csrf_field()}}
    
    <div class="col-md-4 form-group">
        <span>Email</span>
        <input type="text" name="U_Email" value="{{old('U_Email')}}" class="form-control">
        @error('U_Email')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
   
    <div class="col-md-4 form-group">
        <span>Password</span>
        <input type="password" name="U_Pass" value="{{old('U_Pass')}}" class="form-control">
        @error('U_Pass')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Confirm Password</span>
        <input type="password" name="cpassword" value="{{old('cpassword')}}" class="form-control">
        @error('cpassword')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
  
    <br>
    <input type="submit" class="btn btn-success" value="Confirm" >  
    <a class="btn btn-primary" href="{{route('login')}}">Log In</a>                
</form>
@endif
@endsection
