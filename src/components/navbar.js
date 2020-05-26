import React from 'react';
import Logo from '../assets/pokemon-logo.png'


const Navbar = () =>  {
    return (
        <nav className="navbar transparent navbar-inverse">
            <div className="header">
                <div className="header-img">
                    <img src={Logo} width="200" height="80" className="d-inline-block align-top" alt="logo"/>
                </div>
                <div className="header-menu">
                    <div className="header-menu--profile d-flex">
                        <img src="https://img.icons8.com/plasticine/100/000000/user-male-circle.png" alt="profile-logo"/>
                        <p className="d-flex align-items-center">Profile</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;