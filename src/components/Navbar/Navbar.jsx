import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="/assets/images/logo-mm.png" alt="" />

                <ul>
                    <li>
                        <a className="menu-item" href="">Início</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Experiência</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Contato</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Contrate-me
                    </button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span 
                        className={"material-symbols-outlined"}
                        style={{ fontSize: "1.8rem"}}
                        >
                        {openMenu ? "x" : "-"}        
                    </span>
                </button>

            </div>
        </nav>
        </>
    )
}

export default Navbar