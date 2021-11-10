import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Blogs from '../Home/Blogs/Blogs';
import Reviews from '../Home/Reviews/Reviews';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <h3 className="text-white">User Name</h3>
                        </div>
                    </nav>
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-3">
                            <h5 className="text-white ps-4">Dashboard</h5>
                            <ul>
                                <li className="nav-items">
                                    <Link to={`${url}/blogs`}>Blogs</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/reviews`}>Reviews</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/blogs`}>Blogs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path={`${path}/blogs`}>
                            <Blogs></Blogs>
                        </Route>
                        <Route exact path={`${path}/reviews`}>
                            <Reviews></Reviews>
                        </Route>
                        <Route exact path={`${path}/blogs`}>
                            <Blogs></Blogs>
                        </Route>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;