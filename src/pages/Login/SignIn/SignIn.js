import React from 'react';
import loginImg from '../../../images/login.png';
import logo from '../../../images/logo.png';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <NavigationBar />
            <div className="container mt-5 pt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7">
                        <img src={loginImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-5 text-center">
                        <div className="mx-auto shadow-lg py-5 rounded-3">
                            <img src={logo} alt="" className="w-25" />
                            <h4 className="my-3 text-uppercase green-text">Explore More By Sign in</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="form-control rounded-pill w-75 mx-auto py-2 px-3"
                                    placeholder="Enter your email "
                                />
                                {errors.email && <span>This field is required</span>}

                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    className="form-control my-3 rounded-pill w-75 mx-auto py-2 px-3"
                                    placeholder="Enter your password"
                                />

                                {errors.password && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Sign in"
                                    className="form-control rounded-pill green-bg text-white w-75 mx-auto py-2 px-3" />
                            </form>
                            <p className="my-3">Let us help you explore more.</p>
                            <p className="my-3">Don't have an account? <Link to="/signUp" className="green-text">Create an account</Link>.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignIn;