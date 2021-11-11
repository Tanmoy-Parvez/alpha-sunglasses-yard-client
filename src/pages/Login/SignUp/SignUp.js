import React from 'react';
import loginImg from '../../../images/signUp.png';
import logo from '../../../images/logo.png';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import useAuth from '../../../hooks/useAuth';


const SignUp = () => {
    const { signUpUser } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        signUpUser(data.email, data.password, data.name, history)
        reset()
    };
    return (
        <div>
            <NavigationBar />
            <div className="container mt-4 pt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7">
                        <img src={loginImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-5 text-center">
                        <div className="rounded-3 mx-auto shadow-lg py-4 mt-2">
                            <img src={logo} alt="" className="w-25" />
                            <h5 className="my-3 text-uppercase green-text">Explore More By Sign Up</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    className="form-control rounded-pill w-75 mx-auto py-2 px-3"
                                    placeholder="Full Name"
                                />
                                {errors.email && <span>This field is required</span>}

                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="form-control rounded-pill  my-3  w-75 mx-auto py-2 px-3"
                                    placeholder="Email"
                                />
                                {errors.email && <span>This field is required</span>}

                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    className="form-control rounded-pill w-75 mx-auto py-2 px-3"
                                    placeholder="Password"
                                />

                                {errors.password && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="form-control rounded-pill green-bg text-white w-75 mx-auto py-2 px-3 mt-3" />
                            </form>
                            <p className="my-3">Let us help you explore more.</p>
                            <p className="my-3">Already have an account? <Link to="/signIn" className="green-text">Sign in</Link>.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignUp;