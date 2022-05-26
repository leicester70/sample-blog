import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";

class NavigationBar extends Component {
    render() {
        return (
            <nav className="nav">
                <h1>Sample-Blog</h1>
                <ul className="ul">
                    <li className="links"><Link to="/">Journal</Link></li>
                    <li className="links"><Link to="/CreateEntry">Create Entry</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;