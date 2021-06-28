import React from 'react';
import {Link} from 'react-router-dom';
import '../fontawesome/css/all.min.css';
import './navbar.css';

const NavBar = (props) => {
    return (
        <div className="nav-container">
            <div className="logo">
                <h4>logo</h4>
            </div>
            <nav className="nav-content">
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
                    <Link to='/contributors'>
                        <li>contributors</li>
                    </Link>
                </ul>
            </nav>
            <div className="nav-common">
                <div className="search-form">
                    <form>
                        <div className="form-group">
                            <input type="text" name="search" placeholder="search..."/>
                            <button id="search-button"><i className="fas fa-search mx-2"></i></button>
                        </div>
                    </form>
                </div>
                <ul>
                    <Link to='/login'>
                        <li><i className="fas fa-user" id="login-icon"></i></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar