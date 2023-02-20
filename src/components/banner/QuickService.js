import { QUICK_SERVICE } from '@/constants/quick-service.constant'
import React from 'react'
import QuickServiceBlock from './QuickServiceBlock'

const QuickService = () => {
    return (
        <div className="quick-service-section">
            <div className="container">
                <div className="quick-service-block-container">
                    {QUICK_SERVICE.map((data) => (
                        <QuickServiceBlock key={data.title} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuickService
