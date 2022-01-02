import React from 'react'

import Gplay from '../assets/gplay.png' 
import Logo from '../assets/logo.png' 
import { useState, useEffect } from "react";

import './navbar.css'

const Navbar = () => {

    const [token, setToken ] = useState(localStorage.getItem('token'));

    function loadToken(){
        setToken(localStorage.getItem('token'));
    }

    useEffect(()=>{
        loadToken();
        
    })

    return (
        token? 
        <div className='navbar'>
                <img src={Logo} alt="logo" height="40px" width="75px"/>
                <div className="nav-right">
                    <a href="#/dashboard" className='login-link'>Dashboard</a>
                    <div className="btn-download">
                    <span><img src={Gplay} alt="g" /></span>
                    <a href="https://tally.so/r/w27Abn"><div className="download-app">Get Early Access</div></a>
                </div>
                </div>
        </div>
        :
        <div className='navbar'>
                <img src={Logo} alt="logo" height="40px" width="75px"/>
                <div className="nav-right">
                    <a href="#/login" className='login-link'>Login</a>
                    <div className="btn-download">
                    <span><img src={Gplay} alt="g" /></span>
                    <a href="https://tally.so/r/w27Abn"><div className="download-app">Get Early Access</div></a>
                </div>
                </div>
        </div>
    )
}

export default Navbar
