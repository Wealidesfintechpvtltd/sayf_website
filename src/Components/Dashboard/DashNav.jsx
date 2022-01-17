import React from 'react'

import Gplay from '../Dashboard/dashboard_assets/gplay.png';
import Logo from '../Dashboard/dashboard_assets/logo.png' 



import Avatar from '@material-ui/core/Avatar'
import DropMenu from './DropMenu'
import GridBtn from './GridBtn'

const DashNav = ({username , phone}) => {
    return (
        <div className='dash-nav'>
                <a href="#/dashboard"><img src={Logo} alt="logo" height="40px" width="75px"/></a>
                <div className="right">
                <GridBtn></GridBtn>
                <DropMenu phone={phone} username = {username}></DropMenu>
                </div>
        </div>
    )
}

export default DashNav
