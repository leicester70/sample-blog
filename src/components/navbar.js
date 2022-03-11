import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './navbar.css';

// // Import Routing
import {
    Routes,
    Route,
    Link
} from "react-router-dom"

//  Importing components to link
import App from '../App';
import Create from "../create/create"

const Navbar = () => {
    // return (
        {/* Links */}
            <nav className="navbar">
            <h1>Thought Blog</h1>
            <div className="links">
                <Link to="/" element={<App/>}>Home</Link>
                <Link to="/Create" element={<Create/>}>Create</Link>
                <Link to="/Amend">Amend</Link>
            </div>
            </nav>
            {/* Switch */}
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/Create" element={<Create/>} />
            </Routes>
    // );
}
 
export default Navbar;