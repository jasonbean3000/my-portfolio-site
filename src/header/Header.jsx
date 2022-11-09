import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'

export default function Header() {
    
    return (
        <div className="header-container">
            <NavLink activeClassName="active-nav-link" className="nav-link" to="/home">HOME</NavLink>
            <NavLink activeClassName="active-nav-link" className="nav-link" to="/about">ABOUT</NavLink>
            <NavLink activeClassName="active-nav-link" className="nav-link" to="/projects">PROJECTS</NavLink>
            <NavLink activeClassName="active-nav-link" className="nav-link" to="/contact">CONTACT</NavLink>
        </div>
    )
}