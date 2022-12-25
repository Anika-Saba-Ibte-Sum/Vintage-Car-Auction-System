import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Navbar2 from '../Navbar2';
import { Link, useNavigate } from "react-router-dom";
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
const UserComplain = () => {
  const [complaints, setComplaints] = useState ([]);
  const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/APIUComplain")
        .then(resp=>{
            console.log(resp.data);
            setComplaints(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    const deleteComplain = (id) => {
      axios.get(`http://127.0.0.1:8000/api/deleteComplain/${id}`);
     
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
                <center><h1>User Complains</h1></center>
                <table class="table table-border">
                <tr>
                     <th scope="col">ID</th>
                    <th scope="col">U_Id</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                </tr>
                {complaints.map(complaint=>(
                    <tr key={complaint.id} scope="row">
                        <td>{complaint.id}</td>
                        <td>{complaint.U_Id}</td>
                        <td>{complaint.Description}</td>
                        <td>{complaint.Status}</td>
                        <Link className="btn btn-secondary  text-dark mt-4" to={`/updateComplain/${complaint.id}`} > <i className="fa fa-edit text-white fs-2xl"></i>Update</Link >
                        <button className="btn btn-outline-dark m-1  text-white mt-4" onClick={() => deleteComplain(complaint.id)}><i class="fa fa-trash-o text-danger"></i>Delete</button>
                    </tr>
                ))}
                
</table>
                </MDBCol>
        
              </MDBRow>
        
            </MDBContainer>
               
                
              </div>
   

   
 
    )
}
export default UserComplain;