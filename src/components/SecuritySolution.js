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
                                    Vestibulum tristique ante sit amet fringilla
                                    pulvinar. Maecenas vitae placerat augue.
                                    Donec turpis nunc, pulvinar vel sodales
                                    eget, convallis nec odio. Donec nec quam
                                    tincidunt, gravida sem ac, malesuada libero.
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
                                                Nunc id justo eu est condimentum
                                                mollis. Ut consequat, est sit
                                                amet venenatis ultrices, enim
                                                odio euismod justo.
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
                                            <h1>
                                                All Your Security System At One
                                                Place
                                            </h1>
                                            <p>
                                                Nunc id justo eu est condimentum
                                                mollis. Ut consequat, est sit
                                                amet venenatis ultrices, enim
                                                odio euismod justo.
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
