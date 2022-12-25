@extends('layouts.appAdmin')
@section('content')

    @if(Session::get('user')) {{Session::get('user')}}

    <table class="table table-border">
    <tr>
        <th>U_Id</th>
        <th>Description</th>
        <th>Status</th>
    </tr>
    @foreach($complaints as $complaint)
        <tr>
            <td>{{$complaint->U_Id}}</td>
            <td>{{$complaint->Description}}</td>
            <td>{{$complaint->Status}}</td>
        </tr>
    @endforeach
</table>
        
    @endif 
@endsection 