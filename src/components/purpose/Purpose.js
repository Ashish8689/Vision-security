import Link from 'next/link'
import React from 'react'

const Purpose = () => {
    return (
        <div className="purpose-section">
            <div className="container">
                <div className="purpose-header">
                    <h1 className="purpose-title">
                        Our Purpose is to provide you the best service
                    </h1>

                    <div className="button-container">
                        <Link href="/contact" prefetch={false}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purpose
