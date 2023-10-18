import React from 'react'
import '../App.css';
import navbar_logo from '../Assets/navbar_logo.png'

function Navbar(){
    return(
        <>
        <nav>

            <img src={navbar_logo} alt="Logo de mi página" className="navbar-logo" />

            <h1 id="navbar_tittle">COMPANY</h1>
            <h1 id="navbar_tittle2">NAME</h1>

            <div>
                <ul id="navbar">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Services</a></li>
                <li><a href="index.html">Blog</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Contact</a></li>
                <li>
                    <b className="navbar-button-container">
                    <button className="navbar-button"> Button </button>
                    </b>
                </li>
                </ul> 
                
            </div>
        </nav>
        </>
    );
}

export default Navbar;