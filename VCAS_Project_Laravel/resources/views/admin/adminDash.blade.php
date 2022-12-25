@extends('layouts.appAdmin')
@section('content')

    @if(Session::get('user')) {{Session::get('user')}}

   
        
    @endif 
@endsection 