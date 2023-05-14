import Achievements from '@/components/achievement/Achievements'
import Benefits from '@/components/benefits/Benefits'
import MetaGenerator from '@/components/metaGenerator/MetaGenerator'
import PageBanner from '@/components/pageBanner/PageBanner'
import Purpose from '@/components/purpose/Purpose'
import SecuritySolution from '@/components/SecuritySolution'
import Testimonial from '@/components/testimonial/Testimonial'
import { ABOUT_META } from '@/constants/meta.constant'
import React from 'react'

export function getServerSideProps(context) {
    return {
        props: {
            metaData: ABOUT_META,
            link: context.resolvedUrl,
        },
    }
}

const about = (props) => {
    return (
        <>
            <MetaGenerator {...props} />
            <div className="about-page">
                <PageBanner page="About Us" />
                <SecuritySolution className="about-security" />
                <Achievements />
                <Benefits />
                <Testimonial />
                <Purpose />
            </div>
        </>
    )
}

export default about
