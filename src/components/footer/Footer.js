import React from 'react'
import Call from '../assets/svg_icons/Call'
import Facebook from '../assets/svg_icons/Facebook'
import Instagram from '../assets/svg_icons/Instagram'
import Location from '../assets/svg_icons/Location'
import Mail from '../assets/svg_icons/Mail'
import Twitter from '../assets/svg_icons/Twitter'
import Whatsapp from '../assets/svg_icons/Whatsapp'

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="mini-flex">
                                <div className="mini-flex-left">
                                    <Mail className="icon" />
                                </div>
                                <div className="mini-flex-right">
                                    <h5>
                                        <a href="mailto:support@ktrmachinery.com">
                                            support@ktrmachinery.com
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="mini-flex">
                                <div className="mini-flex-left">
                                    <Call className="icon" />
                                </div>
                                <div className="mini-flex-right">
                                    <h5>
                                        <a href="tel: 6353753933">
                                            {' '}
                                            +91 6353-75-3933
                                        </a>{' '}
                                        /{' '}
                                        <a href="tel: 8355992793">
                                            {' '}
                                            +91 8355-99-2793
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="mini-flex">
                                <div className="mini-flex-left">
                                    <Location className="icon" />
                                </div>
                                <div className="mini-flex-right">
                                    <h5>
                                        Shop No 251 , Malwani Gate No 6, near
                                        Raj Computer Academy, Malad West,
                                        Mumbai, Maharashtra 400095
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-logo-container">
                                <h1 className="footer-title">
                                    Vision Fire & <span>Security Systems</span>
                                </h1>
                            </div>
                            <p className="footer-para">
                                A network of smart two-wheeler repair company
                                that primarily focus on addressing the customer
                                needs by providing standardized services at
                                predictable quality & cost.{' '}
                            </p>

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
                                        <Twitter className="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <h4 className="footer-column-header">Company</h4>
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#service">Service</a>
                                </li>
                                <li>
                                    <a href="#booking">Booking</a>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li>
                                    <a href="#footer">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <h4 className="footer-column-header">Company</h4>
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#service">Service</a>
                                </li>
                                <li>
                                    <a href="#booking">Booking</a>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li>
                                    <a href="#footer">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <h4 className="footer-column-header">
                                Get Free Estimate
                            </h4>
                            <p className="footer-para p-0">
                                A network of smart two-wheeler repair company
                                that primarily focus on addressing the customer
                                needs by providing standardized services at
                                predictable quality & cost.{' '}
                            </p>

                            <div className="whatsapp-button">
                                <a href="#">
                                    <Whatsapp className="icon" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright-container">
                <div className="container">
                    <p className="copyright">
                        <span>Vision Fire & Security Systems</span> © 2023 All
                        Right Reserved
                    </p>
                    <p className="copyright">
                        <span>
                            Made by{' '}
                            <a
                                href="https://aashishportfolio.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ashish Gupta
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
