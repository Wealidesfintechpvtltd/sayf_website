import React from 'react'

import Gplay from '../Dashboard/dashboard_assets/gplay.png';
import Logo from '../Dashboard/dashboard_assets/logo.png';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

const DashNav = () => {
    return (
        <div className='dash-nav'>
              <img src={Logo} alt="logo" height="40px" width="75px"/>
                <div className="nav-right">
                    <div className='myDropdown'>
                    <button onclick="DropdownMenu" class="dropbtn">Profile Picture</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#settings">Profile & Settings</a>
                        <a href="#invite-friends">Invite Friends</a>
                        <a href="#redeem-gift-card">Redeem Gift Card</a>
                        <a href="#get-help">Get Help</a>
                        <a href="#log-out">Log Out</a>
                    </div>

                </div>
                    {/* <a href="#/login" className='login-link'>Login</a> */}
                    <div className="btn-download">
                    <span><img src={Gplay} alt="g" /></span>
                    <a href="https://tally.so/r/w27Abn"><div className="download-app">Get Early Access</div></a>
                </div>
                </div>
        </div>
        
    )
}

export default DashNav
