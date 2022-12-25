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
const AuctionDetails = () => {
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
                      <a className="nav-link" href="./ProductDetails">
                        Product Details
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
                <center><h1>Auction Details</h1></center>
                <table class="table table-border">
                <tr>
                    <th>Start Amount</th>
                    <th>Final Amount</th>
                    <th>Win Status</th>
                </tr>
                <tr>
                    
                    <td>100000</td>
                    <td>150000</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    
                    <td>200000</td>
                    <td>350000</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    
                    <td>100000</td>
                    <td>150000</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    
                    <td>500000</td>
                    <td>700000</td>
                    <td>Yes</td>
                </tr> <tr>
                    
                    <td>10000</td>
                    <td>10000</td>
                    <td>No</td>
                </tr>
                
            </table>
                </MDBCol>
        
              </MDBRow>
        
            </MDBContainer>
               
                
              </div>
   

   
 
    )
}
export default AuctionDetails;