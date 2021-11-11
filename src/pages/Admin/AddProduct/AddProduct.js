import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/logo.png';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post("", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Product Successfully Added😃!")
                    reset()
                };
            })
    };

    // add new tour section
    return (
        <div className="container mb-5 text-center">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
                        <img src={logo} alt="" className="w-25" />
                        <h3 className="my-4 text-uppercase text-info">Add A New Product</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name", { required: true })}
                                className="form-control w-75 mx-auto"
                                placeholder="Product Name"
                            />
                            <input
                                {...register("description", { required: true })}
                                className="form-control w-75 my-4 mx-auto"
                                placeholder="Description"
                            />
                            <input
                                type="number"
                                {...register("price", { required: true })}
                                className="form-control w-75 mx-auto"
                                placeholder="Price"
                            />
                            <input
                                {...register("img", { required: true })}
                                className="form-control w-75 mx-auto my-4"
                                placeholder="Image Url"
                            />
                            <input type="submit" value="Add" className="btn btn-info text-white w-75 mt-3" />
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default AddProduct;