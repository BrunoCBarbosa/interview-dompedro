import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'



export default function Header(){
    return(
        <div className="header">
            <p className="logo">Interview Dom Pedro</p>
            <div className="header-links">
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/register">
                <p>Register</p>
            </Link>
            </div>
        </div>
    );
}