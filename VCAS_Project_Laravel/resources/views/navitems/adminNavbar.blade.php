
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        nav{
            padding-top: 20px;
            width: 100%;
            background-color: rgba(11, 2, 41, 0.85);
            height: 100px;
        }
        .container{

            margin: 0 auto;
            width: 200%;
            
        }
        .nav-icon{

            width: 5%;
            float: left;
            text-align: right;
            
        }
        .nav-links{
            width: 90%;
            float: left;
            color: white;
        }

        .nav-name{
          float: left;
          color: white;
          font-size: 20px;
        }
        ul{
            list-style: none;
            width: 100%;
            text-align: right;
        }
        ul li{
            display: inline-block;
            padding: 10px 20px;
            line-height: 70px;
            font-size: 20px;
            opacity: 0.8;

            
        }
        #nav-icon > .nav-links > ul > li:hover {
        cursor: pointer;
        opacity: 1;
  }
        ul li a{
            color: white;
            
        }

        .my-content{
          padding: 320px 0;
          text-align: center;
        }
        .custom-form{
            padding: 95px 0;
        }
        .custom-form-login{
            padding: 240px 0;
        }
        .custom-form-fpass{
            padding: 257px 0;
        }
        .custom-form-dashboard{
            
        }
        .new-container{
            width: 50%;
            margin: 0 auto;
            text-align: center;

        }

        .navitems table ul li{
           display: block;
           text-align: left;
        }
        .navitems table ul  li a{
           display: block;
           color: #000 !important;
        }
       
       
    </style>
</head>
<body>
    <nav>
        <div class="container">
            <div class="nav-icon">
              

            </div>
            <div class="nav-name">
              <h1>Vintage Car Auction System</h1>
            </div>
            
            <div class="nav-links">
                <ul>
                    
                   <br>
                   @if(Session::get('user')) {{Session::get('user')}} {
                    <li><a class="btn btn-primary" href="{{route('addAdmin')}}">Add Admin</a></li>
                    <li><a class="btn btn-primary" href="{{route('adminList')}}">Admin List</a></li>
                    <li><a class="btn btn-primary" href="{{route('auctionDetails')}}">Auction Details</a></li>
                    <li><a class="btn btn-primary" href="{{route('productDetails')}}">Product Details</a></li>
                    <li><a class="btn btn-primary" href="{{route('userComplains')}}">User Compalins</a></li>
                    
                    <li><a class="btn btn-danger" href="{{route('logout')}}">Log out </a></li>
                   }
                    
                @else{
                    <li><a class="btn btn-primary" href="{{route('home')}}">Home</a></li>
                    <li><a class="btn btn-primary" href="{{route('registration')}}">Sign Up</a></li>
                    <li><a class="btn btn-primary" href="{{route('login')}}">Log In</a></li>

                }
                </ul>
                @endif
            </div>

            
        </div>
    </nav>

    

