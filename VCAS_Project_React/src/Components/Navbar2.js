import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar2 = () => {

  // const[status,setStatus]=useState("No");
  // const[whologged,setWhoLogged]=useState("");
  // let user = JSON.parse(localStorage.getItem('admin'));
  // var obj={token:user.access_token};

  // function refreshPage() {
  //     setTimeout(()=>{
  //         window.location.reload(false);
  //     }, 500);
  //     console.log('page to reload')
  // }


  // useEffect(()=>{
  //     axios.post('http://127.0.0.1:8000/api/userExist',obj).then(resp=>{
  //         console.log(resp.data);
  //         setStatus(resp.data);
  //         setWhoLogged(resp.data);
  //     }).catch(
  //         err=>{
  //             console.log(err);
  //         });
      
  // },[obj]);

    return (
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="/home">
          Vintage Car Auction System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="./Home">
                Home <span className="sr-only"></span>
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="./About">
                About Us
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="./Logout">
                Logout
              </a>
            </li>
          
            
          </ul>
        </div>
      </nav>
    );  
    
}
export default Navbar2