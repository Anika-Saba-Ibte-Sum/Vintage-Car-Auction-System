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
const AddUser = () => {
    let[U_Name, setName] = useState("");
    let[LocalAddress, setLocaladdress] =useState("");
    let[PoliceStation, setPoliceStation] = useState("");
    let[City, setCity] =useState("");
    let[Country, setCountry] = useState("");
    let[ZipCode, setZipCode] =useState("");
    let[U_Email, setEmail] = useState("");
    let[U_Pass, setPassword] =useState("");
    let[U_Phn, setPhn] =useState("");
    let[U_Dob, setDob] =useState("");
    let[U_Gender, setGender] = useState("");
    let[U_Photo, setPhoto] =useState("");
    let[cpassword, setCPassword] =useState("");
   
    const navigate = useNavigate();

   
  
    const registered= ()=>{
       var obj = {U_Name: U_Name, LocalAddress: LocalAddress, PoliceStation: PoliceStation, U_Gender:U_Gender, City: City, Country: Country, ZipCode: ZipCode, U_Email: U_Email, U_Pass: U_Pass, U_Phn: U_Phn, U_Dob: U_Dob, U_Photo, U_Photo, cpassword: cpassword };
      console.log(obj);
        console.log(obj);
        axiosConfig.post("UserAdded",obj)
        .then(resp=>{
          var response = resp.data;
          
         
         if(response.message === "Post Failed"){
  
          document.getElementById('msg').innerHTML = response.message;
  
          }
  
          else{
            navigate('/userlist')
  
      }
  
      }).catch(err=>{
  
          console.log(err);
  
      });
  
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
                      User  List
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
        <center><h1>Add User</h1></center>
        <div>
           <MDBContainer fluid className='h-custom'>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12' className='m-5'>

    <MDBCard className='card-registration card-registration-2'>

      <MDBCardBody className='p-0'>

        <MDBRow>

          <MDBCol md='6' className='p-5 bg-white'>

            <h3 className="fw-normal mb-5" style={{color: 'black'}}>General Infomation</h3>
           

            <MDBInput wrapperClass='mb-5' placeholder="Name" value={U_Name} onChange={(e)=>setName(e.target.value)} size='lg' id='form1' type='text'/>
  
  <MDBInput wrapperClass='mb-5' placeholder="Email" value={U_Email} onChange={(e)=>setEmail(e.target.value)} size='lg' id='form2' type='email'/>
  
<div class="d-md-flex ustify-content-start align-items-center mb-4 ">
<span>Date of Birth  :</span>
<input type="date" name="U_Dob" value={U_Dob} wrapperClass='mb-5' onChange={(e)=>setDob(e.target.value)} size='lg' id='form10'/>

</div>


<div className="d-md-flex ustify-content-start align-items-center mb-4">
                              <label htmlFor="U_Gender" className="form-label">Gender</label>
                              <select name="U_Gender" id="U_Gender" value={U_Gender} onChange={(e)=>setGender(e.target.value)} className="form-select">
                                  <option value="">Choose One</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Others">Others</option>
                              </select>
</div>


  
  <MDBRow>
  <MDBRow className='align-items-center pt-4 pb-3'>

      <MDBCol md='4' className='ps-5'>
        <h5 class="fw-bold mb-0 me-4">Photo</h5>
      </MDBCol>

      <MDBCol md='8' className='pe-5 '>
        <input type="file" value={U_Photo} onChange={(e)=>setPhoto(e.target.value)} size='lg'  />
        <div className="small text-muted mt-2">Upload your profile picture and his file size maximum 10 MB</div>
      </MDBCol>

    </MDBRow>
  <MDBCol md='6'>
  <MDBInput wrapperClass='mb-5' value={U_Pass}placeholder="Password" onChange={(e)=>setPassword(e.target.value)}size='lg' id='form14' type='password'/>
  </MDBCol>
  <MDBCol md='6'>
  <MDBInput wrapperClass='mb-5' value={cpassword} onChange={(e)=>setCPassword(e.target.value)} placeholder="Confirm Password" size='lg' id='form18' type='password'/>
  </MDBCol>
  </MDBRow>
  <MDBRow>


    <MDBCol md='6'>
     
    </MDBCol>

  </MDBRow>

</MDBCol>


<MDBCol md='6' className='bg-indigo p-5'>

  <h3 className="fw-normal mb-5 " style={{color: 'black'}}>Address Details</h3>
  <MDBInput wrapperClass='mb-4' value={LocalAddress} onChange={(e)=>setLocaladdress(e.target.value)} placeholder="Local Address" size='lg' id='form5' type='text'/>
  <MDBInput wrapperClass='mb-4'  value={PoliceStation} onChange={(e)=>setPoliceStation(e.target.value)} placeholder="PoliceStation" size='lg' id='form6' type='text'/>

  <MDBRow>

    <MDBCol md='6'>
      <MDBInput wrapperClass='mb-4'  value={City} onChange={(e)=>setCity(e.target.value)} placeholder="City" size='lg' id='form6' type='text'/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBInput wrapperClass='mb-4' value={ZipCode} onChange={(e)=>setZipCode(e.target.value)} placeholder="Zip Code" size='lg' id='form7' type='text'/>
    </MDBCol>

  </MDBRow>

  <MDBInput wrapperClass='mb-4' value={Country} onChange={(e)=>setCountry(e.target.value)} placeholder="Country" size='lg' id='form8' type='text'/>

  <MDBInput wrapperClass='mb-4' value={U_Phn} onChange={(e)=>setPhn(e.target.value)} placeholder="Phone Number" size='lg' id='form9' type='text'/>
  <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I do accept the Terms and Conditions of your site.' />
  {/* <MDBBtn onClick={registered} color='primary' size='lg'>Sign Up</MDBBtn> */}
  <button type="button" onClick={registered} class="button button1">Add</button>
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
export default AddUser;