import { NGS_KEY_HIGHLIGHT } from '@/constants/service.constant'
import React from 'react'
import Arrow from '../assets/svg_icons/Arrow'

const NGS = () => {
    return (
        <div className="service-content-container">
            <div className="service-content-img-container">
                <img src="/images/novec.avif" alt="NOVEC Gas Suppression" />
            </div>

            <div className="service-content">
                <h3>NOVEC Gas Suppression</h3>
                <p>
                    3M™ Novec™ 1230 Fire Protection Fluid is a clean agent fire
                    extinguishant which was developed as a halon replacement and
                    hydrofluorocarbon (HFC) alternative. It belongs to a family
                    of chemicals called halocarbons, a group which includes HFCs
                    and fluoroketones. Novec 1230 fluid is a fluoroketone, while
                    chemical clean agents like FM-200™ and ECARO-25® are HFCs
                    (HFC-227ea, HFC-125). Novec 1230 fluid has a global warming
                    potential (GWP) of less than one while these HFCs have a GWP
                    of more than 3000. Novec 1230 fluid has the highest margin
                    of safety for human occupancy among clean agents, including
                    inert gas.
                </p>

                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="service-content-mini-img-container">
                            <img
                                src="/images/novec.avif"
                                alt="NOVEC Gas Suppression"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p>
                            When comparing the 3M™ Novec 1230 gas suppression
                            system to other fire suppressants, the benefits are
                            striking. Perhaps one of the most notable benefits
                            is that the 3M™ Novec™ 1230 clean agent system is
                            completely waterless and evaporates 50 times faster
                            than water. While 3M™ Novec 1230 is a liquid while
                            in storage, it instantly becomes a gas the moment it
                            is discharged. This gas is discharged within 10
                            seconds of a fire starting and the gas is
                            electronically non-conductive.
                        </p>

                        <div className="row highlight">
                            {NGS_KEY_HIGHLIGHT.map((key, index) => (
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

export default NGS
