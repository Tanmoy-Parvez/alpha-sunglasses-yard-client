import React from 'react';
import bannerImg from '../../../images/main-banner.png'

const Banner = () => {
    return (
        <div className="banner-bg py-3 mt-5">
            <div className="container py-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h4>Special offer</h4>
                        <h1 className="text-uppercase fw-bold mt-4">
                            Trendy <span className="green-text">Glasses</span>
                        </h1>
                        <h1 className="text-uppercase fw-bold">
                            For men & women
                        </h1>
                        <h5 className="text-secondary w-75 my-4">
                            We have best of best trendy Sunglasses collections for both men and women.
                        </h5>
                        <button className="btn regular-btn py-2">Explore More</button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={bannerImg} alt="" className="img-fluid w-75 green-bg rounded-circle" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;