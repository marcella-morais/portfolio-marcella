import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>

            <div className="mobile-menu-container">
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
            </div>

        </div>
        </>
    )
}

export default MobileNav