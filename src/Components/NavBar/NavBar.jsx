import React from 'react';
import { NavLink } from 'react-router-dom';
import logoIcon from '../../img/logo-icon.png';
import './NavBar.css';
import { Form, Container, Row, Col } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className="NavBar py-3 px-4">
            <Row>
                <Col>
                    <NavLink exact activeClassName='active-link' to="/">
                        <img src={logoIcon} width='50px' alt="logo.png"/>
                    </NavLink>
                </Col>
            </Row>

            {/* <NavLink exact activeClassName='active-link' to="/dog">
                Dog
            </NavLink> */}
            
        </div>
    );
}

export default NavBar;