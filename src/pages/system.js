import PageBanner from '@/components/pageBanner/PageBanner'
import SystemItem from '@/components/system/SystemItem'
import { SYSTEM_LIST } from '@/constants/system.constant'
import React from 'react'

const system = () => {
    return (
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
    )
}

export default system
