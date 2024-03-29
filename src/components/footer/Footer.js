import { NAV_LINKS } from '@/constants/navbar.constant'
import Link from 'next/link'
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
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="mini-flex">
                            <div className="mini-flex-left">
                                <Mail className="icon" />
                            </div>
                            <div className="mini-flex-right">
                                <h5>
                                    <a href="mailto:firealarmvision@gmail.com">
                                        firealarmvision@gmail.com
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="mini-flex">
                            <div className="mini-flex-left">
                                <Call className="icon" />
                            </div>
                            <div className="mini-flex-right">
                                <h5>
                                    <a href="tel:9653123581"> +91 9653123581</a>{' '}
                                    /{' '}
                                    <a href="tel:9920558911"> +91 9920558911</a>{' '}
                                    /{' '}
                                    <a href="tel:8850642551"> +91 8850642551</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="mini-flex">
                            <div className="mini-flex-left">
                                <Location className="icon" />
                            </div>
                            <div className="mini-flex-right">
                                <h5>Mumbai Maharashtra</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                            <div className="footer-logo-container">
                                <h1 className="footer-title">
                                    Vision Fire & <span>Security Systems</span>
                                </h1>
                            </div>
                            <p className="footer-para">
                                Vision Fire & Security Systems is a leading Fire
                                Protection System Integration Provider with
                                high-end Consultation, Distribution and
                                Installation services with a proven track record
                                of delivering solutions for Fire Protection &
                                Security Risks involved in an organization.
                            </p>

                            {/* <div className="social-icon-container">
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
                            </div> */}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <h4 className="footer-column-header">Company</h4>
                            <ul>
                                {NAV_LINKS.map(({ label, link }) => (
                                    <li key={label}>
                                        <Link href={link} prefetch={false}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <h4 className="footer-column-header">Company</h4>
                            <ul>
                                {NAV_LINKS.map(({ label, link }) => (
                                    <li key={label}>
                                        <Link href={link} prefetch={false}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
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
                                <a
                                    href="https://wa.me/+919653123581"
                                    target="_blank"
                                    rel="noreferrer"
                                >
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
