import React, {useState, userEffect} from 'react';
import axios from "axios";
import Navbar2 from '../Navbar2';
import { useNavigate  } from "react-router-dom";
import axiosConfig from '../axiosConfig';


import 'bootstrap/dist/css/bootstrap.min.css';

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


const CreateAuction = () =>{
    const navigate = useNavigate();
    const CreateSubmit= ()=>{
        navigate('/myauction');
      
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
        <center><h1>Create Auction</h1></center>
        <center><form className='form-group p-4 '>

        <div class="d-md-flex ustify-content-start align-items-center mb-4 ">
        <span>Start Time :</span>
        <input type="date" name="U_Dob"  size='lg' id='form10'/>
        
       </div>
       <div class="d-md-flex ustify-content-start align-items-center mb-4 ">
        <span>End Time :</span>
        <input type="date" name="U_Dob" size='lg' id='form10'/>
        
       </div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-person-plus-fill text-white'></i>
    </span>
    <input type="number" className='form-control' name="model" id="model" placeholder='Minimum Amount' ></input>
</div>




</form>
<div className="d-grid col-12 mx-auto p-4">
<button type='submit' className="btn btn-primary" onClick={CreateSubmit}>Add</button>
</div>
<div className="d-grid col-12 mx-auto p-4">
<h1 id='msg'></h1>
</div>



            </center>
        </MDBCol>

        </MDBRow>

</MDBContainer>

     </div>
    )
}
export default CreateAuction;