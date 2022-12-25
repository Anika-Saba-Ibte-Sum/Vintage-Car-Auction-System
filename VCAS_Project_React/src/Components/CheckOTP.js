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
const CheckOTP = ()=>{
   
    let[Otp, setOtp] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{

      
        var reg=JSON.parse(localStorage.getItem('reg'));
        var obj = {U_otp:Otp, U_Email: reg.U_Email};
console.log(obj);

       
            axiosConfig.post("checkotp",obj)
            .then(resp=>{
                var token = resp.data;
             
               
               
                if(token === "Wrong Otp!Please Try Again"){
                    alert("Wrong Otp!Please Try Again")
                 }else{
                     navigate('/login');
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

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>OTP Confirmation</h3>

          
            <MDBInput wrapperClass='mb-4 mx-5 w-100' value={Otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Send your otp" id='formControlLg' type='number' size="lg"/>

           
            <button type="button" onClick={loginSubmit} className="mb-4 px-5 mx-5 w-100 button button1">Confirm</button>
           

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
export default CheckOTP;