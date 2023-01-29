import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from './navbar/navbar.component'
import Footer from './Footer'

const Layout = ({ children }) => {
    const [activeTab, setActiveTab] = useState({})
    const router = useRouter()

    const getActiveTab = useCallback((router) => {
        const activeTabArr = router.pathname.split('/').filter(Boolean)
        if (!activeTabArr.length) {
            return setActiveTab({ home: true })
        }
        const activeTabs = activeTabArr.reduce((result, tab) => {
            return { ...result, [tab]: true, [router.pathname]: true }
        }, {})
        setActiveTab(activeTabs)
    }, [])

    useEffect(() => {
        if (router.isReady) {
            getActiveTab(router)
        }
    }, [router])

    return (
        <div className="body">
            <Navbar activeTab={activeTab} />

            {children}
            <Footer activeTab={activeTab} />
        </div>
    )
}

export default Layout
