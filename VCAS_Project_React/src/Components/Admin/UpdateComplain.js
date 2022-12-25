import React, {useEffect, useState} from "react";
import axiosConfig from '../axiosConfig';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Navbar2 from '../Navbar2';
import { useNavigate, useParams } from 'react-router-dom';

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
const UpdateComplain = () => {
    
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [complain, setComplain] = useState([]);
  
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/getComplain/${id}`)

            .then(resp => {
                  console.log(resp);
                  setComplain(resp.data);
            }).catch(err => {
                  console.log(err);
            });

          },[]);

    
          const onSubmit = async event => {
            event.preventDefault();
            await axios.put(`http://127.0.0.1:8000/api/updateComplain/${id}`, complain);
  
  
            navigate('/UserComplain');
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

 <form action={`http://127.0.0.1:8000/api/updateComplain/${id}`} method="post">
 <div className='d-flex justify-center '>
                                                <div className='m-8'>
                                                      <div className="rider_addinput-container">

                                                            <input name="id" type="number" placeholder="id" className="input input-bordered w-64 mt-2 " defaultValue={complain.id} required />
                                                      </div>
                                                      <div className="rider_addinput-container">
                                                            <input name="U_Id" type="number" placeholder="U_Id" className="input input-bordered w-64 mt-2 " defaultValue={complain.U_Id} required />

                                                      </div>
                                                      <div className="rider_addinput-container" >

                                                            <input name="Description" type="text" placeholder="Description" className="mt-2 input input-bordered  w-64" defaultValue={complain.Description} required />
                                                      </div>
                                                      <div className="rider_addinput-container" >

                                                            <input name="Status" type="text" placeholder="Status" className="mt-2 input input-bordered  w-64" defaultValue={complain.Status} required />
                                                      </div>

                                                </div>

                                              
                                                      <div >
                                                      <button className=" Rider_btn_form-submit mt-3 w-64" type="submit" >Update</button>
                                                      </div>
                                                </div>
                                                </form>
                                          
        </MDBCol>

      </MDBRow>

    </MDBContainer>
       
        
      </div>
   

   
 
    )
}
export default UpdateComplain;