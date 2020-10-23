import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const NavBar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [navBar, setNavBar] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => {
        setClick(false)
    }

    const onMouseEnter = () => {
        if (window.innerWidth < 830) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
    };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 830) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const changeColorNavBar = () => {
        if(window.scrollY >= 90) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    };
    window.addEventListener('scroll', changeColorNavBar)

    return (
        <>
            <nav className={navBar ? 'navbar active' : 'navBar'}>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sobremi' className="nav-links" onClick={closeMobileMenu}>SOBREMI</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>PROYECTOS</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>APRENDIZAJES</Link>
                    </li> */}

                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            IDIOMA
                            <i className='fas fa-caret-down'></i>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                </ul>
            </nav>
        </>
    )   
}

export default NavBar
