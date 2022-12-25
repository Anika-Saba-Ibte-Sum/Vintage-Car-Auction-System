import React, {useEffect, useState} from "react";
import axiosConfig from '../axiosConfig';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Navbar2 from '../Navbar2';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFile,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
const UChangePass = () => {
    let[A_Name, setName] = useState("");
    let[LocalAddress, setLocaladdress] =useState("");
    let[PoliceStation, setPoliceStation] = useState("");
    let[City, setCity] =useState("");
    let[Country, setCountry] = useState("");
    let[ZipCode, setZipCode] =useState("");
    let[A_Email, setEmail] = useState("");
    let[A_Pass, setPassword] =useState("");
    let[A_Phone, setPhn] =useState("");
    let[A_Photo, setPhoto] =useState("");

    const navigate = useNavigate();
  
   
  
    



    return(
        <div>
 <Navbar2 />
        <MDBContainer fluid>
              <MDBRow>
        
                <MDBCol sm='2' className='d-none d-sm-block px-0'>
                <div className="sm='2' bg-light">
                <ul className="navbar-nav" style={{backgroundColor: "lightblue"}}>
                    <h3>Menu Bar</h3>
                    <li className="nav-item">
                    <a className="nav-link" href="./userdash">
                    Dashboard
                    </a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="/uviewProfile">
                    View Profile
                    </a>
                  </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./createproduct">
                     Add Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./viewproduct">
                     My Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./myauction">
                     My Auctioning Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="auctionproduct">
                      View Products
                    </a>
                  </li>
                 
                  <li className="nav-item">
                    <a className="nav-link" href="mybid">
                    My Bids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="mypayment">
                    My Payments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="getpayment">
                    Get Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                    
                    </a>
                  </li>
                
                   
                   
                  
                    
                  </ul>
                </div>

        </MDBCol>

        <MDBCol sm='10' className='d-none d-sm-block px-0'>
        <center><h1>Change Password</h1></center>
        <div>
           <MDBContainer fluid className='h-custom'>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12' className='m-5'>

    <MDBCard className='card-registration card-registration-2'>

      <MDBCardBody className='p-0'>

        <MDBRow>

          <MDBCol md='6' className='p-5 bg-white'>

          
           

           
            <center>
            <MDBRow>
           
            <MDBCol md='8'>
            <MDBInput wrapperClass='mb-5' value={A_Pass}placeholder="Old Password" onChange={(e)=>setPassword(e.target.value)}size='lg' id='form14' type='password'/>
            </MDBCol>
            
            </MDBRow> 
            <MDBRow>

            <MDBCol md='8'>
            <MDBInput wrapperClass='mb-5' value={A_Pass}placeholder="New Password" onChange={(e)=>setPassword(e.target.value)}size='lg' id='form14' type='password'/>
            </MDBCol>
             

            </MDBRow>
            </center>
            <MDBRow>
            
<MDBCol md='8'>
<MDBInput wrapperClass='mb-5' value={A_Pass}placeholder="Confirm New Password" onChange={(e)=>setPassword(e.target.value)}size='lg' id='form14' type='password'/>
</MDBCol>

            <button type="button" class="button button1">Submit</button>

</MDBRow>
          </MDBCol>


       
        </MDBRow>

      </MDBCardBody>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>

       </div> 
        </MDBCol>

      </MDBRow>

    </MDBContainer>
       
        
      </div>
   

   
 
    )
}
export default UChangePass;