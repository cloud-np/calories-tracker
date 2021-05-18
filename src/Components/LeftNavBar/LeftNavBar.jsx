import React from 'react';
import logoIcon from '../../img/logo-icon.png';
import { NavLink } from 'react-router-dom';
import './LeftNavBar.css';
import { GoFlame, GoSignOut } from 'react-icons/go';
import { MdLocalDining, MdAddCircle, MdToday, MdDashboard } from 'react-icons/md';

const LeftNavBar = () => {

    return (
        <nav className='LeftNavBar'>
            <ul className="LeftNavBar-nav">
                <li className="logo">
                    <NavLink exact activeClassName='active-link' to="/">
                        <img src={logoIcon} className="shine" width='50px' alt="logo.png"/>
                        <span className="logo-text">Cloud</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="my-nav-link" exact activeClassName='active-link' to="/progress">
                        <GoFlame size="2rem" />
                        <span className="link-text">Progress</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="my-nav-link" exact activeClassName='active-link' to="/recipes">
                        <MdLocalDining size="2rem" />
                        <span className="link-text">Recipes</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="my-nav-link" exact activeClassName='active-link' to="/log-day">
                        <MdToday size="2rem" />
                        <span className="link-text">Log<span className="ml-1">Day</span></span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="my-nav-link" exact activeClassName='active-link' to="/add-recipe">
                        <MdAddCircle size="2rem" />
                        <span className="link-text">Add<span className="ml-1">Recipe</span></span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="my-nav-link" exact activeClassName='active-link' to="/dashboard">
                        <MdDashboard size="2rem" />
                        <span className="link-text">Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="my-nav-link" exact activeClassName='active-link' to="/">
                        <GoSignOut size="2rem" />
                        <span className="link-text">Sign<span className="ml-1">Out</span></span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default LeftNavBar;