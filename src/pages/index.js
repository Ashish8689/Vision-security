import Achievements from '@/components/achievement/Achievements'
import Banner from '@/components/banner/Banner'
import QuickService from '@/components/banner/QuickService'
import Benefits from '@/components/benefits/Benefits'
import Gallery from '@/components/gallery/Gallery'
import MetaGenerator from '@/components/metaGenerator/MetaGenerator'
import Purpose from '@/components/purpose/Purpose'
import SecuritySolution from '@/components/SecuritySolution'
import Services from '@/components/services/Services'
import Testimonial from '@/components/testimonial/Testimonial'
import { CONTACT_META } from '@/constants/meta.constant'

export function getServerSideProps(context) {
    return {
        props: {
            metaData: CONTACT_META,
            link: context.resolvedUrl,
        },
    }
}

export default function Home(props) {
    return (
        <>
            <MetaGenerator {...props} />
            <main>
                <Banner />
                <QuickService />
                <SecuritySolution />
                <Services />
                <Gallery />
                <Achievements />
                <Benefits />
                <Testimonial />
                <Purpose />
            </main>
        </>
    )
}
