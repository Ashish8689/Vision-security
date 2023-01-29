import HomePage from '@/components/Home/HomePage'
import MetaGenerator from '@/components/metaGenerator/MetaGenerator'
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
                <HomePage />
            </main>
        </>
    )
}
