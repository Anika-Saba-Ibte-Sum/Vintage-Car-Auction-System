import React, {useEffect, useState} from "react";
import axios from "axios";
import Navbar2 from '../Navbar2';
import Anika from '../images/Anika.jpg';

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
const UViewProfile = (props) => {
  const [admin, setAdmin] = useState ([]);
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('user'));
 
    var obj = {id: user.userId};
    
     axios.post("http://127.0.0.1:8000/api/userviewprofile",obj)
    .then(resp=>{
      setAdmin(resp.data);
     
        
     }).catch(err=>{
        console.log(err);
    });
  },[]);

    return (
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
    <center>
<div class="row profile-body">
                    <div class="d-none d-md-block col-md-10 col-xl-10 center">
                        <div class="card rounded">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <center><h6 class="card-title mb-0 align-items-center">Personal Information:</h6></center>
                                </div>
                               
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                        Full Name:
                                    </label>
                                    <p class="text-muted">{admin.U_Name}</p>
                                </div>
                                
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                        Email:
                                    </label>
                                    <p class="text-muted">{admin.U_Email}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                        Phone:
                                    </label>
                                    <p class="text-muted">{admin.U_Phone}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                       Date of Birth:
                                    </label>
                                    <p class="text-muted">{admin.U_Dob}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                        Gender:
                                    </label>
                                    <p class="text-muted">{admin.U_Gender}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                    {<img src={Anika} width="150" height="150"/>}
                                    </label>
                                    <p className='ms-5'>Want to Change Password? <a href="/uchangepass" class="link-info">Click here</a></p>      
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    </center>  
        </MDBCol>
        </MDBRow>

</MDBContainer>

     </div>
    );
};
export default UViewProfile;