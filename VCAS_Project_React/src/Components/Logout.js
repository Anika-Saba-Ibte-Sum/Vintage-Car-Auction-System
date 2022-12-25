import React, {useState, userEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosConfig from './axiosConfig';

const Logout = ()=>{
    
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user'));

    var obj = {token: user.access_token};

    axiosConfig.post("logout",obj)
        .then(resp=>{
            var token = resp.data;
           
          
            navigate('/login');
        }).catch(err=>{
            console.log(err);
        });

}
export default Logout;