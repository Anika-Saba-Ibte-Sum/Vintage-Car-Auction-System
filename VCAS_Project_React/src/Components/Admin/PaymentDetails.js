import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
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
const PaymentDetails = () => {
  const [admins, setAdmins] = useState ([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/APIAdminDash")
        .then(resp=>{
            console.log(resp.data);
            setAdmins(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
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
                    <li>
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
                <center><h1>Payment Details</h1></center>
                  
                </MDBCol>
        
              </MDBRow>
        
            </MDBContainer>
               
                
              </div>
 
    )
}
export default PaymentDetails;