import React from 'react'
import Check from './assets/svg_icons/Check'

function SecuritySolution({ className }) {
    return (
        <div className={`security-solution-container ${className}`}>
            <div className="section1">
                <div className="container">
                    <div className="section-flex">
                        <div className="section-left">
                            <div className="section-img-container">
                                <div className="cover-image">
                                    <img
                                        src={'/images/about-main.png'}
                                        className="section-img"
                                        alt="vision fire and security systems"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="section-right">
                            <div className="content">
                                <h1 className="title">
                                    Best Solution For Security System
                                </h1>
                                <p className="para">
                                    "Vision Fire & Security System" are one of
                                    the leading Fire Protection and Security
                                    System Engineers having many years of Market
                                    Experience. We listen to our customers
                                    intently to ‘Delight’ them through our
                                    service.
                                </p>

                                <div className="checklist-container">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-1 col-1">
                                            <div className="check-icon-container">
                                                <Check className="icon" />
                                            </div>
                                        </div>
                                        <div className="col-lg-11 col-md-11 col-11">
                                            <h1>
                                                All Your Security System At One
                                                Place
                                            </h1>
                                            <p>
                                                We provide services collectively
                                                that every company would require
                                                and full fill their security
                                                needs with our experience and
                                                dedication.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-lg-1 col-md-1 col-1">
                                            <div className="check-icon-container">
                                                <Check className="icon" />
                                            </div>
                                        </div>
                                        <div className="col-lg-11 col-md-11 col-11">
                                            <h1>Our Quality Services</h1>
                                            <p>
                                                We expertise in undertaking Fire
                                                and security protection system
                                                projects having vast experience
                                                in all types of security systems
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecuritySolution
