import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';


class Navbar extends Component {
    render() {
        return (
            <div className='container-fluid'>
            <div className='innerdiv'>
            
               <ul className="nav justify-content-end">
                    
                    <li className='nav-item'>
                    <p className = "nav-link font-italic"> Welcome, {localStorage.getItem('username')}</p>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Logout</Link>
                    </li>
               </ul>             
            </div>
            </div>
        );
    }
}

export default Navbar;