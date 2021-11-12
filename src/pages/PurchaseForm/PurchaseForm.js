import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import logo from '../../images/logo.png'
import { Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';


const PurchaseForm = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({})
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        data.status = "Pending";
        data.price = product?.price;
        data.img = product?.img;
        axios.post("http://localhost:5000/order", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("😃Product Successfully Ordered!")
                    reset()
                };
            })
    };

    return (
        <div className="container my-5 pt-3">
            <NavigationBar />
            <div className="row d-flex align-items-center g-4">
                <div className="col-md-6 text-center">
                    <Card className="px-2">
                        <Card.Img variant="top" src={product?.img} className="p-4 img-fluid w-75 mx-auto" />
                        <Card.Body className="text-uppercase text-center">
                            <Card.Title>
                                <h3 className="purple-text">{product?.name}</h3>
                            </Card.Title>
                            <Card.Text>
                                <h6 className="text-secondary my-3 w-75 mx-auto">{product?.description}</h6>
                            </Card.Text>
                            <Card.Text>
                                <h4 className="purple-text fs-5">Price: <del>$100.00</del> ${product?.price}.00 Only</h4>
                            </Card.Text>
                            <h5 className="text-white mt-4 purple-bg py-2">Please Fill the order now form</h5>
                        </Card.Body>
                    </Card>
                    <Link to="/allProducts">
                        <button className="btn regular-btn py-2 mt-4">Explore More</button>
                    </Link>
                </div>
                <div className="col-md-6 text-center">
                    <div className="py-5 border rounded-3 mx-auto shadow-lg animate__animated animate__backInDown">
                        <img src={logo} alt="" className="w-25" />
                        <h3 className="my-3 text-uppercase purple-text">Order Now Form</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {user?.displayName && <input
                                defaultValue={user?.displayName}
                                {...register("username", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0"
                                placeholder="Full Name"
                            />}
                            {user?.email && <input
                                defaultValue={user?.email}
                                {...register("email", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 my-3"
                                placeholder="Username or email"
                            />}
                            <input
                                type="tel"
                                {...register("phone", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3"
                                placeholder="Phone Number"
                            />
                            {errors.phone && <span className="text-danger">*This field is required</span>}
                            <input
                                {...register("address", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3"
                                placeholder="Address"
                            />
                            {errors.address && <span className="text-danger">*This field is required</span>}
                            <input
                                type="date"
                                {...register("date", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3"
                                placeholder="Date"
                            />
                            {errors.date && <span className="text-danger">*Give the order date</span>}
                            {product?.name && <input
                                defaultValue={product?.name}
                                {...register("itemName", { required: true })}
                                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3 "
                                placeholder="Tour title"
                            />}
                            <input type="submit" value="Order Now" className="btn purple-bg text-white w-75 mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PurchaseForm;