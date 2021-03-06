import React, { useState } from "react";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
const [click, setClick] = useState(false)


const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false);

    return(
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
            WELCOME <i class='fab fa-firstdraft'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
            <li className='nav-item'>
                    <Link to='/read' className='nav-links' onClick={closeMobileMenu}>
                        Read
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/write' className='nav-links' onClick={closeMobileMenu}>
                        Write
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact Me
                    </Link>
                </li>
            </ul>
            <Button></Button>
        </nav>
        </>
    )
}

export default Navbar;