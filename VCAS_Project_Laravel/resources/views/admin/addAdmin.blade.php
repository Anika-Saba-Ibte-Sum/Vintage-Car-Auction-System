@extends('layouts.appAdmin')
@section('content')
<br><h1>Registration Form</h1><br>
<form action="{{route('addAdmin')}}" class="form-group" method="post" enctype="multipart/form-data">

    {{csrf_field()}}

    <div class="col-md-4 form-group" >
        <span>Name</span>
        <input type="text" name="A_Name" value="{{old('A_Name')}}" class="form-control">
        @error('A_Name')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Email</span>
        <input type="text" name="A_Email" value="{{old('A_Email')}}" class="form-control">
        @error('A_Email')
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
        <input type="text" name="A_Phone" value="{{old('A_Phone')}}" class="form-control">
        @error('A_Phone')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Password</span>
        <input type="password" name="A_Pass" value="{{old('A_Pass')}}" class="form-control">
        @error('A_Pass')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <div class="col-md-4 form-group">
        <span>Photo</span>
        <input type="file" name="A_Photo" value="{{old('A_Photo')}}" class="form-control">
        @error('A_Photo')
            <span class="text-danger">{{$message}}</span>
        @enderror
    </div>
    <br>
    <input type="submit" class="btn btn-success" value="Add" >  
                 
</form>
@endsection
