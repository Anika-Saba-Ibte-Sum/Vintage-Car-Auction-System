@extends('layouts.app')
@section('content')

    @if(Session::get('user')) {{Session::get('user')}}
    <a class="btn btn-primary" href="{{route('wantSeller')}}">Want to be a seller?</a>      
        
    @endif 
@endsection 