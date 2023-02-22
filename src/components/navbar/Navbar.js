import React, { useState, useEffect } from 'react'
import Call from '../assets/svg_icons/Call'
import Facebook from '../assets/svg_icons/Facebook'
import Instagram from '../assets/svg_icons/Instagram'
import Mail from '../assets/svg_icons/Mail'
import Whatsapp from '../assets/svg_icons/Whatsapp'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    })

    const handleHamburger = () => {
        setOpen(!open)
        if (open) {
            document.querySelector('body').classList.remove('active')
            document.querySelector('.outerHamburger').style = 'display:block'
        } else {
            document.querySelector('body').classList.add('active')
            document.querySelector('.outerHamburger').style = 'display:none'
        }
    }

    const handleNavLinkClick = () => {
        setOpen(false)
        document.querySelector('body').classList.remove('active')
        document.querySelector('.outerHamburger').style = 'display:block'
    }

    return (
        <div className={nav ? 'nav active' : 'nav'}>
            <div className="nav-media-container">
                <div className="d-flex">
                    <div className="nav-call me-lg-4">
                        <div className="icon-container">
                            <Call className="icon" />
                        </div>
                        <a href="tel: 6280205668"> +91 6280205668</a>
                    </div>

                    <div className="nav-call">
                        <div className="icon-container">
                            <Mail className="icon" />
                        </div>
                        <a href="mailto: support@vision.com">
                            support@vision.com
                        </a>
                    </div>
                </div>

                <div className="social-icon-container">
                    <div className="social-icon-block">
                        <a
                            href="https://www.facebook.com/findnvibe/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Facebook className="icon" />
                        </a>
                    </div>

                    <div className="social-icon-block">
                        <a
                            href="https://instagram.com/-find-n-vibe-?utm-medium=copy-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Instagram className="icon" />
                        </a>
                    </div>
                    <div className="social-icon-block">
                        <a
                            href="https://wa.me/message/DIRXZORJPRUNJ1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Whatsapp className="icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="nav-container">
                <div className="logo-block">
                    <a href="#home">
                        {/* <img
                            className="logo"
                            src="/images/logo/logo1.png"
                            alt="ktr machinery"
                        ></img> */}
                        <h2>Vision Security</h2>
                    </a>
                </div>

                <div className="side-menu">
                    <ul className={open ? 'nav-list active' : 'nav-list'}>
                        <li className="nav-link">
                            <a href="#home">Home</a>
                        </li>

                        <li className="nav-link">
                            <a href="#service">Service</a>
                        </li>

                        <li className="nav-link">
                            <a href="#booking">Booking</a>
                        </li>

                        <li className="nav-link">
                            <a href="#team">Team</a>
                        </li>

                        <li className="nav-link">
                            <a href="#footer">Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/*  *****************   Mobile Sidebar  ******************  */}

                <div
                    className={
                        open ? 'mobile-sidebar active' : 'mobile-sidebar'
                    }
                >
                    <div className="number">
                        <a className="nav-link" href="tel: 8355992793">
                            ( +91 ) 8355992793
                        </a>

                        <div
                            className="hamburger innerHamburger"
                            onClick={handleHamburger}
                        >
                            <span className="span span1 active"></span>
                            <span className="span span2 active"></span>
                            <span className="span span3 active"></span>
                        </div>
                    </div>

                    <div className="navigation-link">
                        <ul className="nav-list">
                            <li
                                className="nav-link"
                                onClick={handleNavLinkClick}
                            >
                                <a href="#home">Home</a>
                            </li>

                            <li
                                className="nav-link"
                                onClick={handleNavLinkClick}
                            >
                                <a href="#service">Service</a>
                            </li>

                            <li
                                className="nav-link"
                                onClick={handleNavLinkClick}
                            >
                                <a href="#booking">Booking</a>
                            </li>

                            <li
                                className="nav-link"
                                onClick={handleNavLinkClick}
                            >
                                <a href="#team">Team</a>
                            </li>

                            <li
                                className="nav-link"
                                onClick={handleNavLinkClick}
                            >
                                <a href="#footer">Contact Us</a>
                            </li>
                            <li>
                                <div className="social-icon-container">
                                    <div className="social-icon-block">
                                        <a
                                            href="https://www.facebook.com/KTR-Machinery-107841851554602"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Facebook className="icon" />
                                        </a>
                                    </div>
                                    <div className="social-icon-block">
                                        <a
                                            href="https://www.instagram.com/ktr-machinery"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Instagram className="icon" />
                                        </a>
                                    </div>
                                    <div className="social-icon-block">
                                        <a
                                            href="https://wa.me/+918355992793"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Whatsapp className="icon" />
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>Mumbai</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="outerHamburger hamburger outerHamburger"
                    onClick={handleHamburger}
                >
                    <span
                        className={open ? 'span span1 active' : 'span span1'}
                    ></span>
                    <span
                        className={open ? 'span span2 active' : 'span span2'}
                    ></span>
                    <span
                        className={open ? 'span span3 active' : 'span span3'}
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
