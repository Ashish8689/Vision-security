import { FIRE_ALARM_KEY_HIGHLIGHT } from '@/constants/service.constant'
import React from 'react'
import Arrow from '../assets/svg_icons/Arrow'

const FireAlarm = () => {
    return (
        <div className="service-content-container">
            <div className="service-content-img-container">
                <img src="/images/firealarm.jpeg" alt="firealarm service" />
            </div>

            <div className="service-content">
                <h3>Fire Alarm</h3>
                <p>
                    A fire alarm system has a number of devices working together
                    to detect and warn people through visual and audio
                    appliances when smoke, fire, carbon monoxide or other
                    emergencies are present. These alarms may be activated
                    automatically from smoke detectors and heat detectors or may
                    also be activated via manual fire alarm activation devices
                    such as manual call points or pull stations. Alarms can be
                    either motorized bells or wall mountable sounders or horns.
                </p>

                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="service-content-mini-img-container">
                            <img
                                src="/images/firealarm.jpeg"
                                alt="firealarm service"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p>
                            They can also be speaker strobes which sound an
                            alarm, followed by a voice evacuation message which
                            warns people inside the building not to use the
                            elevators. Fire alarm sounders can be set to certain
                            frequencies and different tones including low,
                            medium and high, depending on the country and
                            manufacturer of the device.
                        </p>

                        <div className="row highlight">
                            {FIRE_ALARM_KEY_HIGHLIGHT.map((key, index) => (
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

export default FireAlarm
