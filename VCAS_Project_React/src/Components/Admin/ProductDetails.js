import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../Navbar2';
import axios from "axios";
import vcar from '../images/vcar.jpg';
import vcar2 from '../images/vcar2.jpg';
import vcar3 from '../images/vcar3.png';
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
const ProductDetails = () => {
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
                <center><h1>Product Details</h1></center>
                <center><table class="table table-border">
                 <tr>
                    <th>Car_Reg_Details_Id</th>
                    <th>Car Name</th>
                    <th>Photo</th>
                    <th>Valid Status</th>
                    
                </tr>
                <tr>
                    <th>1</th>
                    <th>BMW</th>
                    <th>{<img src={vcar} width="100" height="100"/>}</th>
                    <th>Yes</th>
                    
                </tr>
                <tr>
                    <th>2</th>
                    <th>CHR</th>
                    <th>{<img src={vcar2} width="100" height="100"/>}</th>
                    <th>Yes</th>
                    
                </tr>
                <tr>
                <th>3</th>
                    <th>Corolla</th>
                    <th>{<img src={vcar3} width="100" height="100"/>}</th>
                    <th>Yes</th>
                    
                </tr>
               
            </table> </center>
                </MDBCol>
        
              </MDBRow>
        
            </MDBContainer>
               
                
              </div>
   

   
 
    )
}
export default ProductDetails;