import React from 'react';
import Img from '../../images/contact.svg'
const ContactForm = () => {
    return (
        <div className="container-fluid text-center py-5" id="contact">
            <h1 className="text-uppercase"><span className="purple-text">Contact</span> Us</h1>
            <div className="row d-flex align-items-center gx-5">
                <div className="col-md-7">
                    <h3 className="text-uppercase mb-3">Send Us <span className="purple-text">Message</span> </h3>
                    <input type="text" className="form-control mx-auto w-75" placeholder="Your Name" />
                    <input type="email" className="form-control my-3 mx-auto w-75" placeholder="Your Email" />
                    <textarea type="message" cols="80" rows="5" className="form-control mx-auto w-75" placeholder="Your Name" />
                </div>
                <div className="col-md-5">
                    <img src={Img} alt="" className="img-fluid w-75" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;