import Achievements from '@/components/achievement/Achievements'
import Benefits from '@/components/benefits/Benefits'
import PageBanner from '@/components/pageBanner/PageBanner'
import Purpose from '@/components/purpose/Purpose'
import SecuritySolution from '@/components/SecuritySolution'
import Testimonial from '@/components/testimonial/Testimonial'
import React from 'react'

const about = () => {
    return (
        <div className="about-page">
            <PageBanner page="About Us" />
            <SecuritySolution className="about-security" />
            <Achievements />
            <Benefits />
            <Testimonial />
            <Purpose />
        </div>
    )
}

export default about
