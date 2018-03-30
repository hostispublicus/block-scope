import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="app-navbar navbar navbar-expand navbar-dark bg-dark fixed-top">
                
                <Link className="navbar-brand app-logo" to="/"><b>Block</b>Scope</Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blocks">Blocks</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;