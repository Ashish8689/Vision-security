import { PA_SYSTEM_KEY_HIGHLIGHT } from '@/constants/service.constant'
import React from 'react'
import Arrow from '../assets/svg_icons/Arrow'

const PAsystem = () => {
    return (
        <div className="service-content-container">
            <div className="service-content-img-container">
                <img src="/images/pa.jpeg" alt="pa system" />
            </div>

            <div className="service-content">
                <h3>Public Address Systems</h3>
                <p>
                    A public address (PA) system is a type of audio system that
                    is used to amplify sound in public spaces such as schools,
                    stadiums, airports, train stations, shopping malls, and
                    other large public venues. The primary purpose of a PA
                    system is to provide clear and intelligible communication to
                    a large audience, either for informational or emergency
                    purposes. PA systems typically consist of a microphone, an
                    amplifier, and loudspeakers and may also include other
                    components such as mixers, equalizers, compressors, and
                    processors.
                </p>

                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="service-content-mini-img-container">
                            <img src="/images/pa.jpeg" alt="pa system" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p>
                            A typical PA system works by capturing sound waves
                            from a microphone or other input source, converting
                            them into electrical signals, amplifying the
                            signals, and then reproducing them through one or
                            more loudspeakers. The sound waves are distributed
                            evenly throughout the space, allowing people to hear
                            them clearly and without distortion.
                        </p>

                        <div className="row highlight">
                            {PA_SYSTEM_KEY_HIGHLIGHT.map((key, index) => (
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

export default PAsystem
