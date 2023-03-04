import { FIRE_FIGHTING_KEY_HIGHLIGHT } from '@/constants/service.constant'
import React from 'react'
import Arrow from '../assets/svg_icons/Arrow'

const FireFighting = () => {
    return (
        <div className="service-content-container">
            <div className="service-content-img-container">
                <img src="/images/slider/s1.png" alt="service" />
            </div>

            <div className="service-content">
                <h3>We give the best Services</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum deleniti qui ut perferendis dolor dignissimos earum
                    autem non commodi. Enim, quo. Libero explicabo numquam
                    ratione laborum quam, vitae, eveniet quaerat at sint et, ad
                    dicta obcaecati impedit molestias reprehenderit ipsam?.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum deleniti qui ut perferendis dolor dignissimos earum
                    autem non commodi. Enim, quo. Libero explicabo numquam
                    ratione laborum quam, vitae, eveniet quaerat at sint et, ad
                    dicta obcaecati impedit molestias reprehenderit ipsam?
                </p>

                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="service-content-mini-img-container">
                            <img src="/images/slider/s1.png" alt="service" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Harum deleniti qui ut perferendis dolor
                            dignissimos earum autem non commodi. Enim, quo.
                            Libero explicabo numquam ratione laborum quam,
                            vitae, eveniet quaerat at sint et, ad dicta
                            obcaecati impedit molestias reprehenderit ipsam?
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

                <h3>We give the best Services</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum deleniti qui ut perferendis dolor dignissimos earum
                    autem non commodi. Enim, quo. Libero explicabo numquam
                    ratione laborum quam, vitae, eveniet quaerat at sint et, ad
                    dicta obcaecati impedit molestias reprehenderit ipsam?
                </p>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum deleniti qui ut perferendis dolor dignissimos earum
                    autem non commodi. Enim, quo. Libero explicabo numquam
                    ratione laborum quam, vitae, eveniet quaerat at sint et, ad
                    dicta obcaecati impedit molestias reprehenderit ipsam?
                </p>
            </div>
        </div>
    )
}

export default FireFighting
