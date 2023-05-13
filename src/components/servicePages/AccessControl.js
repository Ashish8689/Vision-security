import { ACCESS_CONTROL_KEY_HIGHLIGHT } from '@/constants/service.constant'
import React from 'react'
import Arrow from '../assets/svg_icons/Arrow'

const AccessControl = () => {
    return (
        <div className="service-content-container">
            <div className="service-content-img-container">
                <img src="/images/accessControl.jpeg" alt="access control" />
            </div>

            <div className="service-content">
                <h3>Access control</h3>
                <p>
                    Access control systems are electronic security systems
                    designed to regulate who can enter a specific area or
                    building. These systems work by verifying a person's
                    identity through a variety of means, such as biometric
                    identification (e.g., fingerprint, iris, or facial
                    recognition), proximity cards, keypads, or swipe cards.
                    Access control systems can be used to secure physical
                    spaces, such as office buildings, laboratories, data
                    centers, warehouses, and schools, as well as digital
                    resources, such as computer networks, databases, and online
                    accounts.
                </p>

                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="service-content-mini-img-container">
                            <img
                                src="/images/accessControl.jpeg"
                                alt="access control"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p>
                            The primary purpose of access control systems is to
                            protect people, property, and information from
                            unauthorized access, theft, vandalism, or harm. By
                            restricting entry to authorized personnel only,
                            access control systems can reduce the risk of theft,
                            damage, or violence, as well as provide
                            accountability and traceability for security
                            breaches and incidents.
                        </p>

                        <div className="row highlight">
                            {ACCESS_CONTROL_KEY_HIGHLIGHT.map((key, index) => (
                                <React.Fragment key={index}>
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <Arrow className={'icon'} />
                                    </div>
                                    <div className="col-11">
                                        <p>{key}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessControl
