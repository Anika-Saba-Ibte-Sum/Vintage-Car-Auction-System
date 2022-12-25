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
const ViewProfile = (props) => {
  const [admin, setAdmin] = useState ([]);
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('user'));
 
    var obj = {id: user.userId};
    
     axios.post("http://127.0.0.1:8000/api/adminviewprofile",obj)
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
                    <li className="nav-item active">
                    <a className="nav-link" href="./AdminDash">
                      Admin Dashboard
                      </a>
                    <br/>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./aviewprofile">
                     View Profile
                      </a>
                    </li><br/>
                 
                    <li className="nav-item">
                      <a className="nav-link" href="./AddAdmin">
                      Add Admin
                      </a>
                    </li><br/>
                    <li className="nav-item">
                      <a className="nav-link" href="./AdminList">
                      Admin List
                      </a>
                    </li><br/>

                    <li className="nav-item">
                      <a className="nav-link" href="./AddUser">
                      Add User
                      </a>
                    </li><br/>
                    <li className="nav-item">
                      <a className="nav-link" href="./UserList">
                      User List
                      </a>
                    </li><br/>
                    <li className="nav-item">
                      <a className="nav-link" href="./AuctionDetails">
                        Auction Details
                      </a>
                    </li><br/>
                  
                    
                    <li className="nav-item">
                      <a className="nav-link" href="./PaymentDetails">
                        Payment Details
                      </a>
                    </li><br/>
                    <li className="nav-item">
                      <a className="nav-link" href="./UserComplain">
                        User Complains
                      </a>
                    </li><br/>
                   
                    
                   
                  
                    
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
                                    <h6 class="card-title mb-0">Personal Information</h6>
                                </div>
                               
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                        Full Name:
                                    </label>
                                    <p class="text-muted">{admin.A_Name}</p>
                                </div>
                                
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                        Email:
                                    </label>
                                    <p class="text-muted">{admin.A_Email}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                        Phone:
                                    </label>
                                    <p class="text-muted">{admin.A_Phone}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 fw-bolder mb-0 text-uppercase">
                                    {<img src={Anika} width="150" height="150"/>}
                                    </label>
                                    <p className='ms-5'>Want to Change Password? <a href="/changepassword" class="link-info">Click here</a></p>  
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
export default ViewProfile;