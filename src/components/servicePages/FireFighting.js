import { FIRE_FIGHTING_KEY_HIGHLIGHT } from '@/constants/service.constant'
import React from 'react'
import Arrow from '../assets/svg_icons/Arrow'

const FireFighting = () => {
    return (
        <div className="service-content-container">
            <div className="service-content-img-container">
                <img src="/images/slider/s3.jpg" alt="Fire Fighting" />
            </div>

            <div className="service-content">
                <h3>Fire Fighting</h3>
                <p>
                    Fire Services include the installation, maintenance,
                    monitoring, and retrofit of fire safety systems such as fire
                    hydrant systems, fire sprinkler systems, fire alarms and
                    detection systems and fire suppression systems. Fire
                    Services cater to the needs of various sectors including
                    construction, pharmaceutical restaurants, retail,
                    healthcare, assisted living, education, government,
                    hospitality to name a few.
                </p>

                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="service-content-mini-img-container">
                            <img
                                src="/images/slider/s3.jpg"
                                alt="Fire Fighting"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p>
                            Fire Services include the installation, maintenance,
                            monitoring, and retrofit of fire safety systems such
                            as fire hydrant systems, fire sprinkler systems,
                            fire alarms and detection systems and fire
                            suppression systems. Fire Services cater to the
                            needs of various sectors including construction,
                            pharmaceutical restaurants, retail, healthcare,
                            assisted living, education, government, hospitality
                            to name a few.
                        </p>

                        <div className="row highlight">
                            {FIRE_FIGHTING_KEY_HIGHLIGHT.map((key, index) => (
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

export default FireFighting
