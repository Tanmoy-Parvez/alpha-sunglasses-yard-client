import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/logo2.png';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch("", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert("Admin Successfully Added😃!")
                    reset()
                };
            })
    };

    // add new tour section
    return (
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
                        <img src={logo} alt="" className="w-25" />
                        <h3 className="my-4 text-uppercase purple-text">Make An Admin</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="form-control w-75 mx-auto"
                                placeholder="User Email"
                            />
                            <button
                                type="submit"
                                className="btn purple-bg text-white mt-3 w-75 mx-auto py-2 px-3" >Add
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default MakeAdmin;