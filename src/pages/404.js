import Image from 'next/image'
import MetaGenerator from '../components/metaGenerator/MetaGenerator'
import { PAGE_NOT_FOUND_META } from '@/constants/meta.constant'

export function getServerSideProps(context) {
    return {
        props: {
            metaData: PAGE_NOT_FOUND_META,
            link: context.resolvedUrl,
        },
    }
}

const PageNotFound = (props) => {
    return (
        <>
            <MetaGenerator {...props} />
            <div className="grid h-screen place-items-center bg-[#F4F2F4]">
                <section className="grid place-items-center">
                    <Image
                        alt="Page not found"
                        height="370"
                        src="/images/page-not-found.gif"
                        width="380"
                    />
                    <h1 className="mt-12 text-4xl font-extrabold">
                        Page Not Found
                    </h1>
                    <p className="mt-6 text-center">
                        Oh No!! The page you are looking for couldn’t be found.
                    </p>
                </section>
            </div>
        </>
    )
}

export default PageNotFound
