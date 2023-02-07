import Achievements from '@/components/achievement/Achievements'
import MetaGenerator from '@/components/metaGenerator/MetaGenerator'
import SecuritySolution from '@/components/SecuritySolution'
import Services from '@/components/services/Services'
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
                <SecuritySolution />
                <Services />
                <Achievements />
            </main>
        </>
    )
}
