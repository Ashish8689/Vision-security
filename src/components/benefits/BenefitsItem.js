import React from 'react'

const BenefitsItem = ({ data: { icon, title, para } }) => {
    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="benefit-block">
                <div className="row">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="icon-container">{icon}</div>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center">
                        <h1 className="benefit-heading">{title}</h1>
                        <p className="benefit-para">{para}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsItem
