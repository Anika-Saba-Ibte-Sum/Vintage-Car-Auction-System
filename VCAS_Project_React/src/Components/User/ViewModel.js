import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../Navbar2';
import axios from "axios";
import vcar from '../images/vcar.jpg';
import vcar2 from '../images/vcar2.jpg';
import vcar3 from '../images/vcar3.png';
import vcar4 from '../images/vcar4.jpg';
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
const ViewModel = () => {
  


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
                <center><h1>Catagory Details</h1></center>
                <center><table class="table table-border">
                 <tr>
                    
                    <th>Model</th>
                    <th>Color</th>
                    <th>Glass</th>
                    <th>Wheel Size</th>
                    <th>Body</th>
                    
                    
                </tr>
                <tr>
                    <th>FIAT</th>
                    <th>Red</th>
                    <th>Black</th>
                    <th>6</th>
                    <th>Cover</th>
                   
                  
                    
                </tr>
               
               
            </table> </center>
                </MDBCol>
        
              </MDBRow>
        
            </MDBContainer>
               
                
              </div>
   

   
 
    )
}
export default ViewModel;