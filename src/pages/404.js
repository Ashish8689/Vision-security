import MetaGenerator from '../components/metaGenerator/MetaGenerator'
import { PAGE_NOT_FOUND_META } from '@/constants/meta.constant'

const PageNotFound = (props) => {
    return (
        <>
            <MetaGenerator
                host={'https://visionfiresecuritysystems.com'}
                link="/404"
                metaData={PAGE_NOT_FOUND_META}
            />
        </>
    )
}

export default PageNotFound
