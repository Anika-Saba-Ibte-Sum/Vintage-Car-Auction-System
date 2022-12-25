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
const AddAdmin = () => {
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
  
    const registered= ()=>{
        var obj = {A_Name: A_Name, LocalAddress: LocalAddress, PoliceStation: PoliceStation, City: City, Country: Country, ZipCode: ZipCode, A_Email: A_Email, A_Pass: A_Pass, A_Phone: A_Phone, A_Photo: A_Photo };
        console.log(obj);
        axiosConfig.post("AdminAdded",obj)
        .then(resp=>{
          var response = resp.data;
          
         
         if(response.message === "Post Failed"){
  
          document.getElementById('msg').innerHTML = response.message;
  
          }
  
          else{
            navigate('/adminlist')
  
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
                      <a className="nav-link" href="./ProductDetails">
                        Product Details
                      </a>
                    </li><br/>
                   
                    <li className="nav-item">
                      <a className="nav-link" href="./UserComplain">
                        User Complains
                      </a>
                   </li>
                    
                   
                  
                    
                  </ul>
                </div>

        </MDBCol>

        <MDBCol sm='10' className='d-none d-sm-block px-0'>
        <center><h1>Add Admin</h1></center>
        <div>
           <MDBContainer fluid className='h-custom'>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12' className='m-5'>

    <MDBCard className='card-registration card-registration-2'>

      <MDBCardBody className='p-0'>

        <MDBRow>

          <MDBCol md='6' className='p-5 bg-white'>

            <h3 className="fw-normal mb-5" style={{color: 'black'}}>General Infomation</h3>
           

            <MDBInput wrapperClass='mb-5' placeholder="Name" value={A_Name} onChange={(e)=>setName(e.target.value)} size='lg' id='form1' type='text'/>
  
            <MDBInput wrapperClass='mb-5' placeholder="Email" value={A_Email} onChange={(e)=>setEmail(e.target.value)} size='lg' id='form2' type='email'/>
            
            <MDBRow>
            <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='5' className='ps-5'>
                  <h5 class="fw-bold mb-0 me-4">Photo</h5>
                </MDBCol>

              
                <MDBCol md='7' className='pe-5 '>
                  <input type="file" value={A_Photo} onChange={(e)=>setPhoto(e.target.value)} size='lg'  />
                  <div className="small text-muted mt-2">Upload your profile picture and his file size maximum 10 MB</div>
                </MDBCol>
              </MDBRow>
            <MDBCol md='8'>
            <MDBInput wrapperClass='mb-5' value={A_Pass}placeholder="Password" onChange={(e)=>setPassword(e.target.value)}size='lg' id='form14' type='password'/>
            </MDBCol>
            
            </MDBRow> 
            <MDBRow>


             

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

            <MDBInput wrapperClass='mb-4' value={A_Phone} onChange={(e)=>setPhn(e.target.value)} placeholder="Phone Number" size='lg' id='form9' type='text'/>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I do accept the Terms and Conditions of your site.' />
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
export default AddAdmin;