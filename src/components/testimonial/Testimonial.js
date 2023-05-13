import React from 'react'
import TestimonialBlock from './TestimonialBlock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import { TESTIMONIAL_LIST } from '@/constants/testimonial.constant'

const Testimonial = () => {
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="testimonial-header">
                    <h1 className="testimonial-title">What our client say's</h1>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="swiper-container"
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {TESTIMONIAL_LIST.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialBlock content={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial
