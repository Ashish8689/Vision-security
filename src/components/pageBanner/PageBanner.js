import React from 'react'

const PageBanner = ({ page }) => {
    return (
        <div className="page-banner-section">
            <div className="page-banner-content">
                <h2>{page}</h2>
                <h3>Vision - {page}</h3>
            </div>
        </div>
    )
}

export default PageBanner
