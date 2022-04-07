import React, { Component } from 'react';
import './style.css';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="nav">
                <h1>Sample-Blog</h1>
                <ul className="ul">
                    <li className="links">Journal</li>
                    <li className="links">Create Entry</li>
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;