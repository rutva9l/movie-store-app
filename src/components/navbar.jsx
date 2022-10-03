import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav" style={{alignItems:'center'}}>
                    <li className="nav-item">
                        <Link to="#"><h2>MOVIE STORE</h2></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/rentals">Rentals</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;