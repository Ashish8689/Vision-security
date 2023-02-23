import Call from '@/components/assets/svg_icons/Call'
import Location from '@/components/assets/svg_icons/Location'
import Mail from '@/components/assets/svg_icons/Mail'
import Map from '@/components/map/Map'
import PageBanner from '@/components/pageBanner/PageBanner'
import React from 'react'

const contact = () => {
    return (
        <div className="contact-page">
            <PageBanner page="Contact Us" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="form-section">
                            <div className="header-content">
                                <h3>Enquiry Form</h3>
                            </div>

                            <form onSubmit="sendEmail" method="POST">
                                <div className="form-group row">
                                    <div className="col-md-6 col-12 form-group-inner">
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            autocomplete="off"
                                        />
                                    </div>
                                    <div className="col-md-6 col-12 form-group-inner">
                                        <label for="Name">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            autocomplete="off"
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6 col-12 form-group-inner">
                                        <label for="mobile">Mobile no</label>
                                        <input
                                            type="number"
                                            name="mobile"
                                            autocomplete="off"
                                        />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label for="subject">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            autocomplete="off"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="Name">Message</label>
                                    <textarea
                                        name="message"
                                        cols="30"
                                        rows="3"
                                        autocomplete="off"
                                    ></textarea>
                                </div>

                                <div className="form-button">
                                    <button type="submit" className="button">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="get-in-touch-container">
                            <div className="header-content">
                                <h3>Get in touch</h3>
                            </div>

                            <div className="contact-block">
                                <div className="contact-content-container">
                                    <div className="contact-icon-container">
                                        <Location className="icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Our Location</h4>
                                        <p>
                                            456, Lorem Street, New York, 33454,
                                            NY.
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-content-container">
                                    <div className="contact-icon-container">
                                        <Call className="icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Phone Number</h4>
                                        <p>
                                            <a href="tel: 6280205668">
                                                +91 6280205668
                                            </a>
                                        </p>
                                        <p>
                                            <a href="tel: 6280205668">
                                                +91 6280205668
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-content-container">
                                    <div className="contact-icon-container">
                                        <Mail className="icon" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>Email Address</h4>
                                        <p>
                                            <a href="mailto: info@findnvibe.com">
                                                info@findnvibe.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
        </div>
    )
}

export default contact
