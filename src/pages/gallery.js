import Lightbox from '@/components/lightbox/LightBox'
import PageBanner from '@/components/pageBanner/PageBanner'
import { GALLERY_IMAGES } from '@/constants/gallery.constant'
import React, { useState } from 'react'

const gallery = () => {
    const [open, setOpen] = useState(false)
    const [interactive, setInteractive] = useState(false)
    return (
        <div className="gallery-page">
            <PageBanner page="Gallery" />

            <div className="container">
                <div className="gallery-page-container">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div className="gallery-page-block" key={index}>
                            <img src={image} alt="vision security" />
                        </div>
                    ))}
                </div>
                {interactive && (
                    <Lightbox open={open} close={() => setOpen(false)} />
                )}
            </div>
        </div>
    )
}

export default gallery
