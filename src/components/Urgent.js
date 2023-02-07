import React from 'react'
import Call from './assets/svg_icons/Call'

function Urgent() {
    return (
        <div className="urgentContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="urgent-content">
                            <h1>Call us for urgent need!</h1>
                            <p>
                                Got stuck in middle of your way, no worry we are
                                here to help you. Give a call, we will be there
                                to help you.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="urgent-number-container">
                            <div className="urgent-icon-container">
                                <Call className="icon" />
                            </div>
                            <h1>
                                (+91) <a href="tel:8355992793">8355-99-2793</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Urgent
