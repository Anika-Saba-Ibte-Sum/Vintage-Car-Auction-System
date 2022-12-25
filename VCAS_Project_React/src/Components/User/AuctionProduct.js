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
const AuctionProduct = () => {
  const navigate = useNavigate();
  const registered= ()=>{
    navigate('/viewmodel');
  
}
const registered2= ()=>{
  navigate('/viewreg');

}
const bid= ()=>{
  navigate('/createbid');

}


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
                <center><h1>Products</h1></center>
                <center><table class="table table-border">
                 <tr>
                    
                    <th>Car Name</th>
                    <th>Photo</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Minimum Amount</th>
                    <th>Running Amount</th>
                    <th>
                    </th>
                    <th>
                    </th>
                    <th>
                    </th>
                    
                    
                </tr>
                <tr>
                    <th>FIAT</th>
                    
                    <th>{<img src={vcar} width="200" height="200"/>}</th>
                    <th>2022-09-20 10:27:21.240752</th>
                    <th>2022-12-20 10:27:21.240752</th>
                    <th>1200000</th>
                    <th>1500000</th>
                    <button type="button" onClick={registered} class="button button1">Catagory Details</button>
                    <button type="button" onClick={registered2} class="button button1">Registration Details</button>
                     <button type="button" onClick={bid} class="button button1">Bid</button>
                </tr>
                <tr>
                    <th>Mercedes Benz</th>
                    <th>{<img src={vcar2} width="200" height="200"/>}</th>
                    <th>2022-09-20 10:27:21.240752</th>
                    <th>2022-12-27 10:27:21.240752</th>
                    <th>1000000</th>
                    <th>1800000</th>
                  
                    <button type="button" onClick={registered} class="button button1">Catagory Details</button>
                    <button type="button" onClick={registered2} class="button button1">Registration Details</button>
                     <button type="button" onClick={bid} class="button button1">Bid</button>
                    
                </tr>
                <tr>
                <th>Ford Zephyr</th>
                <th>{<img src={vcar3} width="200" height="200"/>}</th>
                    
                <th>2022-12-02 10:27:21.240752</th>
                    <th>2022-12-20 10:27:21.240752</th>
                    <th>1200000</th>
                    <th>1800000</th>
                   
                    <button type="button" onClick={registered} class="button button1">Catagory Details</button>
                    <button type="button" onClick={registered2} class="button button1">Registration Details</button>
                     <button type="button" onClick={bid} class="button button1">Bid</button>
                </tr>
                <tr>
                <th>Toyota KE70</th>
                   
                    <th>{<img src={vcar4} width="200" height="200"/>}</th>
                    <th>2022-10-16 10:27:21.240752</th>
                    <th>2022-12-29 10:27:21.240752</th>
                    <th>2000000</th>
                    <th>2500000</th>
                    <button type="button" onClick={registered} class="button button1">Catagory Details</button>
                    <button type="button" onClick={registered2} class="button button1">Registration Details</button>
                     <button type="button" onClick={bid} class="button button1">Bid</button>
                </tr>
               
               
            </table> </center>
                </MDBCol>
        
              </MDBRow>
        
            </MDBContainer>
               
                
              </div>
   

   
 
    )
}
export default AuctionProduct;