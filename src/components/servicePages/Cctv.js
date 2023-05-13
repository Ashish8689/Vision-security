import { CCTV_KEY_HIGHLIGHT } from '@/constants/service.constant'
import React from 'react'
import Arrow from '../assets/svg_icons/Arrow'

const Cctv = () => {
    return (
        <div className="service-content-container">
            <div className="service-content-img-container">
                <img src="/images/slider/s1.png" alt="service" />
            </div>

            <div className="service-content">
                <h3>CCTV System</h3>
                <p>
                    CCTV, also known as closed-circuit television, is a security
                    monitor system that enables you to always keep a watchful
                    eye around or in your business. CCTV security systems
                    contain monitors and cameras that allow you to view live
                    events, as well as recorders that archive footage for later
                    use. CCTV systems use cameras to capture video footage of a
                    facility. This footage is sent to a recording device (a DVR
                    or NVR), where it is stored for future reference. It is then
                    sent from the cameras to a dedicated monitor, or even a
                    smartphone or computer, which displays the footage in real
                    time. CCTV security systems are connected with a coaxial
                    cable, network cable, or wireless signal, depending on the
                    system type. CCTV cameras are typically placed at business
                    entrances and around the perimeter, as well as in strategic
                    places inside the building. They guard merchandise, data,
                    and the safety of employees and visitors by monitoring and
                    recording everyone that comes near.
                </p>

                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="service-content-mini-img-container">
                            <img src="/images/slider/s1.png" alt="service" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p>
                            CCTV surveillance cameras work to prevent crime
                            around the clock, letting property managers and
                            security staff instantly sees and respond to
                            security breaches in all areas of a property. Anyone
                            who commits a crime on the property is taped,
                            providing easy identification and legal evidence.
                        </p>

                        <div className="row highlight">
                            {CCTV_KEY_HIGHLIGHT.map((key, index) => (
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

export default Cctv
