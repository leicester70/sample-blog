import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";

class NavigationBar extends Component {
    render() {
        return (
            <nav className="nav boradius-15">
                <h1 className="logo">📔</h1>
                <ul className="ul">
                    <Link to="/"><li className="links boradius-5">Journal</li></Link>
                    <Link to="/CreateEntry"><li className="links boradius-5">Create Entry</li></Link>
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;