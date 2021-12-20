import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../images/detail-img.png'

const About = () => {
    return (
        <div className="container-fluid banner-bg py-5" id="about">
            <h1 className="text-uppercase text-center mb-5"><span className="purple-text">About</span> Us</h1>
            <div className="container">
                <div className="row gx-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h3>Our Shop History</h3>
                        <p style={{ textAlign: 'justify' }}>We started our journey in 28th February, 1998. Sunglasses or sun glasses (informally called shades or sunnies; more names below) are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes.</p>
                        <ul>
                            <li>
                                Owning Pair Of Sunglasses Fashion
                            </li>
                            <li>
                                Important Protect Your Sunglasses
                            </li>
                            <li>
                                Cataracts One Leading Blindness.
                            </li>
                        </ul>
                        <Link to="/allProducts">
                            <button className="btn regular-btn py-2 mt-4">Explore Sunglasses</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <img src={Img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;