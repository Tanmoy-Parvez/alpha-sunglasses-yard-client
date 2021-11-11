import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth()
    return (
        <div style={{ height: '100vh' }}>
            <div className="row">
                <div className="col-md-3 ">
                    <nav className="navbar navbar-dark dark-purple-bg">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <h4 className="text-white me-5 pe-3">Dashboard</h4>
                        </div>
                    </nav>
                    <div className="show" id="navbarToggleExternalContent">
                        <div className="purple-bg p-3" style={{ height: "100vh" }}>
                            <h4 className="text-white ps-4">{user?.displayName}</h4>

                            <ul className="menu-list">
                                <li className="nav-items">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/myorders`}>My Orders</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/review`}>Review</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/pay`}>Payment</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/addProduct`}>Add A Product</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/makeAdmin`}>Make An Admin</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/manageProducts`}>Manage Products</Link>
                                </li>
                            </ul>
                            <button className="btn btn-outline-light ms-4">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path={`${path}/myorders`}>
                            <MyOrders />
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review />
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Pay />
                        </Route>
                        <Route exact path={`${path}/manageOrders`}>
                            <ManageOrders />
                        </Route>
                        <Route exact path={`${path}/addProduct`}>
                            <AddProduct />
                        </Route>
                        <Route exact path={`${path}/manageProducts`}>
                            <ManageProducts />
                        </Route>
                        <Route exact path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </Route>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;