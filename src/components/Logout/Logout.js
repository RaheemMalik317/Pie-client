import React from 'react';
import './Logout.css';
import logoutPic from '../../assets/logout.jpg'


const Logout = () => {
    return(
        <div>
            <img id="logout" src={logoutPic} alt = "powerButton" />
        </div>
    )
}

export default Logout;