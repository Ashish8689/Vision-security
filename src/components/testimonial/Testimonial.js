import React from 'react'
import TestimonialBlock from './TestimonialBlock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Yash',
            img: '/images/testimonial.png',
            description: `All the things were good & worth for 7 days trip. Enjoyed a lot Gulmarg's stay was very nice & it is such a beautiful place to visit. Thank you Find N Vibe.`,
        },
        {
            id: 2,
            name: 'Shristi',
            img: '/images/testimonial.png',
            description: `I am so thankful you guys are my travel agents as I am too overwhelmed with everything else. You know you are much more than travel company. You are my friends, and that means a great deal to me. Thank You Find N Vibe for the amazing trip.`,
        },
        {
            id: 3,
            name: 'Rohit',
            img: '/images/testimonial.png',
            description: `A very emotional experience. Thank you Find N Vibei for leading this successful trip. The hotel, the food, the guide, and the traveling and trip schedule including visiting significant places in Uttarakhand made this trip an experience that was perfectly orchestrated and adjusted according to limits and changes.
           Thank you for all your efforts.`,
        },
    ]

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
                    {testimonials.map((testimonial) => (
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
