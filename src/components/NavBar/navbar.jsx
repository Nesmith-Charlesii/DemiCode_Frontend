import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const NavBar = (props) => {
    return (
        <div className="nav-container">
            <nav className="nav">
                <ul>
                    <Link to='/articles'>
                        <li>articles</li>
                    </Link>
                    <Link to='/snippets'>
                        <li>snippets</li>
                    </Link>
                    <Link to='/videos'>
                        <li>videos</li>
                    </Link>
                    <Link to='/products'>
                        <li>products</li>
                    </Link>
                    <Link to='/login'>
                        <li>login</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar