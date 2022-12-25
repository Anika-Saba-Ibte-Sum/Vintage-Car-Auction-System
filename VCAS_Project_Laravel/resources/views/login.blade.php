@extends('layouts.app')
@section('content')
<br><h1>Login</h1><br>
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
   
    <input type="checkbox" id="me" name="rem_me" value="Remember Me">
      <label for="remember me"> Remember Me</label><br><br>
    <input type="submit" class="btn btn-success" value="Sign In" > 
    <a href="{{route('forgetPass')}}"><span class="blue">Forget Password?</span></a>
                     
</form>


@endsection 