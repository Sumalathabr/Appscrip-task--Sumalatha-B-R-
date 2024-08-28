'use client'
import React, { use, useState } from 'react'
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

type Props = {}

const Navbar = (props: Props) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar" id="navbar">
            <nav className="nav container">
                <div className="nav__top">
                    <div className="menu_icon" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </div>

                    <a href="#" className="logo_image">
                        <div>
                            <img src="" alt="" />Img
                        </div>
                    </a>

                    <a href="#" className="nav__logo">
                        <div>
                            Logo_Name
                        </div>
                    </a>

                    <div className="nav_icons">
                        <ul className="nav__icons__list">
                            <li><a href="#search" className="nav__icons__link"><i className="fa fa-search"></i></a></li>
                            <li><a href="#profile" className="nav__icons__link"><i className="fa fa-user"></i></a></li>
                            <li><a href="#cart" className="nav__icons__link"><i className="fa fa-shopping-cart"></i></a></li>
                            <li><a href="#favourite" className="nav__icons__link"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#login" className="nav__icons__link"><i className="fa fa-sign-in-alt"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className={`nav__bottom ${showMenu ? 'show' : ''}`}>
                    <ul className="nav__list">
                        <li><a href="#" className="nav__link active-link">Shop</a></li>
                        <li><a href="#" className="nav__link">Skills</a></li>
                        <li><a href="#" className="nav__link">Stories</a></li>
                        <li><a href="#" className="nav__link">About</a></li>
                        <li><a href="#" className="nav__link">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
