@extends('layouts.appAdmin')
@section('content')

    @if(Session::get('user')) {{Session::get('user')}}

       
    <table class="table table-border">
    <tr>
        <th>Admin ID</th>
        <th>Admin Name</th>
        <th>Phone</th>
        <th>Email</th>
    </tr>
    @foreach($admins as $admin)
        <tr>
           <td >{{$admin->id}}</td>
            <td >{{$admin->A_Name}}</td>
            <td >{{$admin->A_Phone}}</td>
            <td >{{$admin->A_Email}}</td>
        </tr>
    @endforeach
</table>


        
    @endif 
@endsection 