import React from 'react'

const TestimonialBlock = ({
    content: { id, name, designation, description, img },
}) => {
    return (
        <div className="testimonial-block">
            <div className="testimonial-img-container">
                <div className="testimonial-mini-img-container">
                    <img src={img} alt="acc" />
                </div>
            </div>

            <div className="testimonial-content">
                <p className="testimonial-para">{description}</p>
                <h5 className="testimonial-name">{name}</h5>
            </div>
        </div>
    )
}

export default TestimonialBlock
