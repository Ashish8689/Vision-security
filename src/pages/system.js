import MetaGenerator from '@/components/metaGenerator/MetaGenerator'
import PageBanner from '@/components/pageBanner/PageBanner'
import SystemItem from '@/components/system/SystemItem'
import { SYSTEM_META } from '@/constants/meta.constant'
import { SYSTEM_LIST } from '@/constants/system.constant'
import React from 'react'

export function getServerSideProps(context) {
    return {
        props: {
            metaData: SYSTEM_META,
            link: context.resolvedUrl,
        },
    }
}

const system = (props) => {
    return (
        <>
            <MetaGenerator {...props} />
            <div className="system-page">
                <PageBanner page="System" />

                <div className="container">
                    <div className="system-page-container">
                        {SYSTEM_LIST.map((system, index) => (
                            <SystemItem data={system} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default system
