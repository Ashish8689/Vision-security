import React from 'react'
import Instagram from '../assets/svg_icons/Instagram'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import 'swiper/css'

function Gallery() {
    const GalleryImageList = [
        '/images/gallery/g1.png',
        '/images/gallery/g1.png',
        '/images/gallery/g1.png',
        '/images/gallery/g1.png',
        '/images/gallery/g1.png',
        '/images/gallery/g1.png',
        '/images/gallery/g1.png',
        '/images/gallery/g1.png',
    ]

    return (
        <div className="gallery-container">
            <div className="gallery-swiper-container">
                <Swiper
                    modules={[Autoplay]}
                    className="swiper-container"
                    loop
                    spaceBetween={30}
                    allowTouchMove
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={4}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {GalleryImageList.map((image, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="swiper-img-block">
                                <Image
                                    src={image}
                                    alt="ktr Machinery"
                                    fill={true}
                                    sizes={100}
                                />

                                <div className="gallery-icon-container">
                                    <a
                                        href="https://www.instagram.com/ktr_machinery"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Instagram className="icon" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery
