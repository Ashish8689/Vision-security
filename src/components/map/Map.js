import React from 'react'

const Map = () => {
    return (
        <div className="map-container">
            <iframe
                title="map"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d796.7309485423674!2d72.81918467820725!3d19.18812444315082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x874b6adf076bd198!2sK%20T%20R%20Machinery!5e0!3m2!1sen!2sin!4v1651656794925!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Map
