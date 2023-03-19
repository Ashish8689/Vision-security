import React from 'react'

const SystemItem = ({ data: { name, application, advantages, image } }) => {
    return (
        <div className="row m-5">
            <div className="col-md-4 col-12">
                <div className="system-image-container">
                    <img src={image} className="system-image" />
                </div>
            </div>
            <div className="col-md-8 col-12">
                <h2>{name}</h2>
                <div className="row">
                    <div className="col-6">
                        <h3>Applications:</h3>

                        <div className="system-list">
                            {application.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                    </div>
                    <div className="col-6">
                        <h3>Advantages:</h3>

                        <div className="system-list">
                            {advantages.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemItem
