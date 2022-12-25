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
const AdminList = () => {

    const [admins, setAdmins] = useState ([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/AdminDetails")
        .then(resp=>{
            console.log(resp.data);
            setAdmins(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    const deleteAdmin = (id) => {
      axios.get(`http://127.0.0.1:8000/api/adminDelete/${id}`);
     
        navigate('/AdminList');   

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
        <center><h1>Admin Details</h1></center>
        <center><table class="table table-border">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
                {admins.map(admin=>(
                    <tr key={admin.id} scope="row">
                        <td>{admin.id}</td>
                        <td>{admin.A_Name}</td>
                        <td>{admin.A_Phone}</td>
                        <td>{admin.A_Email}</td>
                        <Link className="btn btn-secondary  text-dark mt-4" to={`/updateComplain/${admin.id}`} > <i className="fa fa-edit text-white fs-2xl"></i>Update</Link >
                        <button className="btn btn-outline-dark m-1  text-white mt-4" onClick={() => deleteAdmin(admin.id)}><i class="fa fa-trash-o text-danger"></i>Delete</button>
                       
                    </tr>
                ))}
            </table>
            </center>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
            

        </div>
    );

}
export default AdminList;