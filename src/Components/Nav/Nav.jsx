import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav-link'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/users">Users</Link>
        </div>
    );
};

export default Nav;