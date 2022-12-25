import React, {useState, userEffect} from "react";
import axios from "axios";
import axiosConfig from './axiosConfig';
import { useNavigate } from "react-router-dom";
import './registration.css';
import Navbar from './Navbar';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
const Login = ()=>{
    let[token, setToken]= useState("");
    let[U_Email, setU_Email] = useState("");
    let[U_Pass, setU_Pass] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{
        var obj = {U_Email: U_Email, U_Pass: U_Pass};
   
        axiosConfig.post("login",obj)
        .then(resp=>{
            var token = resp.data;
         console.log(token);
           var user = {userId: token.U_Id, access_token:token.tokenn, type: token.Type};
          
            localStorage.setItem('user',JSON.stringify(user));
           
            if(token === "No user found"){
              alert("Wrong Email Or Password!! Please Try again")
                navigate('/login');
             }
             else if(token.Type=== "Admin") {
                 navigate('/admindash');
             }
             else{
              navigate('/userdash');
             }
         }).catch(err=>{
             console.log(err);
         });
     

    }
    return(
        <div>
<Navbar />
<MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4 h-75'>
           <br/>
           <br/>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100'  value={U_Email} onChange={(e)=>setU_Email(e.target.value)} placeholder="Email address" id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' value={U_Pass} onChange={(e)=>setU_Pass(e.target.value)} placeholder="Password" id='formControlLg' type='password' size="lg"/>

           
            <button type="button" onClick={loginSubmit} className="mb-4 px-5 mx-5 w-100 button button1">Login</button>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="/forgotpassword">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="./Registration" class="link-info">Sign Up</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://images.unsplash.com/photo-1579211897956-297c1150469a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbnRhZ2UlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Login image" className="w-100 " style={{objectFit: 'cover', objectPosition: 'left'}} />
 </MDBCol>
      </MDBRow>

    </MDBContainer>
       </div>
           

    )
}
export default Login;