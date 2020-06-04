import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/pokemon-logo.png'
import '../navbar/Navbar.css';


const Navbar = () =>  {
    return (
        <nav className="navbar navbar-expand-lg navbar-light transparent">
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
            <div className="header2">
                <ul className="nav justify-content-center">
                <li className="nav-item active">
                    <Link to="/home">
                    <p className="nav-link text-body">Home <span className="sr-only">(current)</span></p>
                    </Link>
                </li>
                <img className='mt-2' src="https://img.icons8.com/color/48/000000/pokeball--v1.png" width="25" height="25" alt="pokeball"/>
                <li className="nav-item">
                    <Link to="/">
                    <p className="nav-link text-body">Features</p>
                    </Link>
                </li>
                <img className='mt-2' src="https://img.icons8.com/color/48/000000/pokeball--v1.png" width="25" height="25" alt="pokeball"/>
                <li className="nav-item">
                    <p className="nav-link text-body">Favorites</p>
                </li>
                <img className='mt-2' src="https://img.icons8.com/color/48/000000/pokeball--v1.png" width="25" height="25" alt="pokeball"/>
                <li className="nav-item">
                    <Link to="/info">
                    <p className="nav-link text-body">Info</p>
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;