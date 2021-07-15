import React from 'react';
import {Link} from 'react-router-dom';
import '../fontawesome/css/all.min.css';
import './navbar.css';

const Nav = (props) => {
    const logged_out_nav = (
        <div className="nav-container">
            <div className="logo">
                
            </div>
            <nav className="nav-content">
                <ul>
                    <Link to='/articles'>
                        <li>thoughts</li>
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
    );

    const logged_in_nav = (
        <div className="nav-container">
            <div className="logo">
                
            </div>
            <nav className="nav-content">
                <ul>
                    <Link to='/articles'>
                        <li>thoughts</li>
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
                    <Link to='/profile'>
                        <li><p><i className="fas fa-user" id="logout-icon"></i></p></li>
                    </Link>
                    <li><i className="fas fa-sign-out-alt" id="logout-icon" onClick={props.Logout} ></i></li>
                </ul>
            </div>
        </div>
    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>
}

export default Nav
