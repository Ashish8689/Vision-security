import Link from 'next/link'
import React from 'react'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Banner = () => {
    return (
        <div className="banner-container">
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                navigation={true}
                grabCursor={true}
                className="swiper-container"
                autoplay={{
                    delay: 4000,
                }}
            >
                <SwiperSlide className="slider-banner-item">
                    <img
                        src={'/images/slider/s1.png'}
                        className="slider-banner-image"
                        alt="Beach"
                    />
                    <div className="swiper-content-container">
                        <h2 className="swiper-content-title">
                            We are digital security system
                        </h2>
                        <h1 className="swiper-content-subtitle">
                            Enjoy the vibe of every moment Enjoy the vibe of
                            every moment Enjoy the vibe of every moment Enjoy
                            the vibe of every moment
                        </h1>
                        <div className="swiper-content-button-container">
                            <Link
                                href="/contact"
                                className="swiper-content-button"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-banner-item">
                    <img
                        src={'/images/slider/s2.jpg'}
                        className="slider-banner-image"
                        alt="Beach"
                    />
                    <div className="swiper-content-container">
                        <h6 className="swiper-content-title">
                            We are digital security system
                        </h6>
                        <h5 className="swiper-content-subtitle">
                            Enjoy the vibe of every moment Enjoy the vibe of
                            every moment Enjoy the vibe of every moment Enjoy
                            the vibe of every moment
                        </h5>
                        <div className="swiper-content-button-container">
                            <Link
                                href="/contact"
                                className="swiper-content-button"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
