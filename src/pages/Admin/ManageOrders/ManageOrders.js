import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [cancel, setCancel] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [cancel, updated])

    // handle cancel booking function
    const handleCancel = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel?");
        if (proceed) {
            fetch(`http://localhost:5000/removeOrder/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Booking successfully cancelled!")
                        setCancel(!cancel)
                    };
                })
        }
    }

    // update status
    const [order, setOrder] = useState({});
    // handle update status function
    const handleApproved = (id) => {
        fetch(`http://localhost:5000/allOrders/${id}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
        setOrder(order.status = "Approved");

        fetch(`http://localhost:5000/allOrders/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Order Approved successfully!");
                    setUpdated(!updated)
                }
            });
    }
    // manage all orders section
    return (
        <div className="px-2 mb-5">
            <h5 className="purple-text text-uppercase text-center pt-2">
                <i>All the orders are below</i>
            </h5>
            <h3 className="text-uppercase text-warning text-center mb-4">Manage All The Ordered Products</h3>
            <div className="row">
                {
                    allOrders.map(allOrder => <div className="col-md-4">
                        <Card className="mb-2 text-white purple-bg">
                            <Card.Header>{allOrder?.itemName} ({allOrder.status})</Card.Header>
                            <Card.Body>
                                <Card.Title>Name: {allOrder?.username}</Card.Title>
                                <Card.Text>
                                    <h6> Email: {allOrder?.email}</h6>
                                    <h6>Mobile: {allOrder?.phone}</h6>
                                    <h6>Add: {allOrder?.address}</h6>
                                </Card.Text>
                                <button
                                    onClick={() => handleApproved(allOrder?._id)}
                                    className="btn btn-outline-success text-white me-3">
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleCancel(allOrder?._id)}
                                    className="btn btn-outline-danger text-light">
                                    Cancel</button>
                            </Card.Body>
                        </Card>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageOrders;