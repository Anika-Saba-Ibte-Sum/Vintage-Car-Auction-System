import React, {useState, userEffect} from 'react';
import axios from "axios";
import Navbar2 from '../Navbar2';

import axiosConfig from '../axiosConfig';

import { useNavigate  } from "react-router-dom";
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


const CreateProduct = () =>{
    

    let user = JSON.parse(localStorage.getItem('user'));
    let[model, setModel] = useState("");
    let[color, setColor] = useState("");
    let[glass, setGlass] = useState("");
    let[wheel_size, setWheelSize] = useState("");
    let[body, setBody] = useState("");
    let[regnum, setRegnum] = useState("");
    let[opip, setOpip] = useState("");
    let[ip, setIp] = useState("");
    let[rtrc, setRtrc] = useState("");
    let[pc, setPc] = useState("");
    let[pname, setPname] = useState("");
    let[photo, setPhoto] = useState("");
    const navigate = useNavigate();
   
   

    const CreateSubmit = () =>{
        
        var obj = {Model: model, Color: color, Glass: glass, Wheel_Size: wheel_size, Body: body, Reg_Num: regnum, OPIP:opip, IP:ip,RTRC: rtrc, PC:pc, U_Id:user.userId, P_CarName:pname, P_Photo:photo};
        console.log(obj);
        axiosConfig.post("createproduct",obj)
        .then(resp=>{
            var response = resp.data;
         

            if(response.message === "Post Failed"){

                    document.getElementById('msg').innerHTML = response.message;
            }
            else{
                navigate('/viewproduct');
              
        }

        }).catch(err=>{
            if(err.message == "Request failed with status code 401"){
                navigate('/login'); 
            }
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
        <center><h1>Add Product</h1></center>
        <center><form className='form-group p-4 '>

        <div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-person-plus-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="pname" id="pname" placeholder='Car Name' required value={pname} onChange={(e)=>setPname(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-person-plus-fill text-white'></i>
    </span>
    <input type="number" className='form-control' name="regnum" id="regnum" placeholder='Registartion Number' required value={regnum} onChange={(e)=>setRegnum(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-person-plus-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="model" id="model" placeholder='Model' required value={model} onChange={(e)=>setModel(e.target.value)}></input>
</div>



<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="color" id="color"  placeholder='Color' required value={color} onChange={(e)=>setColor(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="glass" id="glass" placeholder='Glass' required value={glass} onChange={(e)=>setGlass(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="wheel_size" id="color" placeholder='Wheel_Size' required value={wheel_size} onChange={(e)=>setWheelSize(e.target.value)}></input>
</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
    <input type="text" className='form-control' name="body" id="body" placeholder='Body' value={body} required onChange={(e)=>setBody(e.target.value)}></input>
</div>
<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
<input type="file" value={photo} onChange={(e)=>setPhoto(e.target.value)} size='lg'  />
                  <div className="small text-muted mt-2">Upload your Car picture </div>

</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
<input type="file" value={opip} onChange={(e)=>setOpip(e.target.value)} size='lg'  />
                  <div className="small text-muted mt-2">Upload your Car's Orginal Purchase Invoice Photo </div>

</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
<input type="file" value={ip} onChange={(e)=>setIp(e.target.value)} size='lg'  />
                  <div className="small text-muted mt-2">Upload your Car's Insurance paper picture </div>

</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
<input type="file" value={rtrc} onChange={(e)=>setRtrc(e.target.value)} size='lg'  />
                  <div className="small text-muted mt-2">Upload your Car's road tax recipt certificate picture </div>

</div>

<div className='input-group mb-3'>
    <span className='input-group-text bg-primary'>
        <i className='bi bi-key-fill text-white'></i>
    </span>
<input type="file" value={pc} onChange={(e)=>setPc(e.target.value)} size='lg'  />
                  <div className="small text-muted mt-2">Upload your Car's pollution certificate picture </div>

</div>
</form>
<div className="d-grid col-12 mx-auto p-4">
    <button type='submit' className="btn btn-primary" onClick={CreateSubmit}>Submit</button>
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
export default CreateProduct;