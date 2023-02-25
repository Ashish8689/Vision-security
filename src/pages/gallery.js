import Plus from '@/components/assets/svg_icons/Plus'
import Lightbox from '@/components/lightbox/LightBox'
import { getImagesProperties } from '@/components/lightbox/Slides'
import PageBanner from '@/components/pageBanner/PageBanner'
import { GALLERY_IMAGES } from '@/constants/gallery.constant'
import Image from 'next/image'
import React, { useState } from 'react'

const gallery = () => {
    const [open, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)
    return (
        <div className="gallery-page">
            <PageBanner page="Gallery" />

            <div className="container">
                <div className="gallery-page-container">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div
                            className="gallery-page-block"
                            key={index}
                            onClick={() => {
                                setOpen(true)
                                setImageIndex(index)
                            }}
                        >
                            <Image
                                width={100}
                                height={100}
                                src={image}
                                alt="vision security"
                            />

                            <div className="gallery-icon-container">
                                <Plus className="icon" />
                            </div>
                        </div>
                    ))}
                </div>
                <Lightbox
                    open={open}
                    index={imageIndex}
                    images={getImagesProperties(GALLERY_IMAGES)}
                    close={() => setOpen(false)}
                />
            </div>
        </div>
    )
}

export default gallery
