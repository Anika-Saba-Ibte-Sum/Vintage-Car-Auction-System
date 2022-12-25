@extends('layouts.app')
@section('content')
<br><h1>Registration Form</h1><br>
<form action="{{route('registration')}}" class="form-group" method="post" enctype="multipart/form-data">

    {{csrf_field()}}

    <div class="col-md-4 form-group" >
        <span>Name</span>
        <input type="text" name="U_Name" value="{{old('U_Name')}}" class="form-control">
        @error('U_Name')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Email</span>
        <input type="text" name="U_Email" value="{{old('U_Email')}}" class="form-control">
        @error('U_Email')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group" >
        <span>Local Address</span>
        <input type="text" name="Localaddress" value="{{old('Localaddress')}}" class="form-control">
        @error('Localaddress')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group" >
        <span>Police Station</span>
        <input type="text" name="PoliceStation" value="{{old('PoliceStation')}}" class="form-control">
        @error('PoliceStation')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group" >
        <span>City</span>
        <input type="text" name="City" value="{{old('City')}}" class="form-control">
        @error('City')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group" >
        <span>Country</span>
        <input type="text" name="Country" value="{{old('Country')}}" class="form-control">
        @error('Country')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group" >
        <span>Zip Code</span>
        <input type="text" name="ZipCode" value="{{old('ZipCode')}}" class="form-control">
        @error('ZipCode')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Phone</span>
        <input type="text" name="U_Phn" value="{{old('U_Phn')}}" class="form-control">
        @error('U_Phn')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Date of Birth</span>
        <input type="date" name="U_Dob" value="{{old('U_Dob')}}" class="form-control">
        @error('U_Dob')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Gender</span><br>
        <input type="radio" name="U_Gender"  > Male
        <input type="radio" name="U_Gender"  > Female
        <input type="radio" name="U_Gender"  > Others
        @error('U_Gender')
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
    <div class="col-md-4 form-group">
        <span>Photo</span>
        <input type="file" name="U_Photo" value="{{old('U_Photo')}}" class="form-control">
        @error('U_Photo')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <br>
    <input type="submit" class="btn btn-success" value="Sign Up" >  
    <a class="btn btn-primary" href="{{route('login')}}">Log In</a>                
</form>
@endsection
