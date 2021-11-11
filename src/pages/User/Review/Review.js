import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/logo2.png';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post("", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Review Successfully Sent😃!")
                    reset()
                };
            })
    };

    // add new tour section
    return (
        <div className="container my-3 text-center">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
                        <img src={logo} alt="" className="w-25" />
                        <h4 className="my-4 text-uppercase purple-text">Give your valuable Review</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("username", { required: true })}
                                className="form-control w-75 mx-auto"
                                placeholder="Name"
                            />
                            <input
                                {...register("email", { required: true })}
                                className="form-control w-75 my-4 mx-auto"
                                placeholder="Email"
                            />
                            <textarea
                                {...register("message", { required: true })}
                                className="form-control w-75 mx-auto"
                                placeholder="Message"
                            />
                            <input
                                {...register("rating", { required: true })}
                                className="form-control w-75 mx-auto my-4"
                                placeholder="Rating out of 5"
                            />
                            <button
                                type="submit"
                                className="btn purple-bg text-white w-75 mx-auto py-2 px-3" >Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Review;