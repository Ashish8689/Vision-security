import MetaGenerator from '@/components/metaGenerator/MetaGenerator'
import PageBanner from '@/components/pageBanner/PageBanner'
import AccessControl from '@/components/servicePages/AccessControl'
import Cctv from '@/components/servicePages/Cctv'
import FireAlarm from '@/components/servicePages/FireAlarm'
import FireFighting from '@/components/servicePages/FireFighting'
import NGS from '@/components/servicePages/NGS'
import PAsystem from '@/components/servicePages/PAsystem'
import { SERVICE_META } from '@/constants/meta.constant'
import { SERVICE_PAGE_LIST } from '@/constants/service.constant'
import React, { useCallback, useState } from 'react'

export function getServerSideProps(context) {
    return {
        props: {
            metaData: SERVICE_META,
            link: context.resolvedUrl,
        },
    }
}

const gallery = (props) => {
    const [currentService, setCurrentService] = useState('FF')

    const getServiceComponent = useCallback(() => {
        switch (currentService) {
            case 'FF':
                return <FireFighting />

            case 'FA':
                return <FireAlarm />

            case 'CV':
                return <Cctv />

            case 'AC':
                return <AccessControl />

            case 'PAS':
                return <PAsystem />

            case 'NGS':
                return <NGS />
        }
    }, [currentService])

    return (
        <>
            <MetaGenerator {...props} />
            <div className="service-page">
                <PageBanner page="Service" />

                <div className="container">
                    <div className="service-page-container">
                        <div className="row position-relative">
                            <div className="col-md-3 col-12 fixed-panel">
                                <div className="list-container">
                                    {SERVICE_PAGE_LIST.map(({ label, key }) => (
                                        <div
                                            className={`list-item ${
                                                currentService === key
                                                    ? 'active'
                                                    : ''
                                            } `}
                                            key={key}
                                            onClick={() =>
                                                setCurrentService(key)
                                            }
                                        >
                                            <span>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-9 col-12">
                                <div className="service-page-content-container">
                                    {getServiceComponent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default gallery
