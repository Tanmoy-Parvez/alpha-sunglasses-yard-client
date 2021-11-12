import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { Card, Col, Row, Spinner } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    // remove a product from db
    const handleRemoveProduct = (id) => {
        const proceed = window.confirm('Are you sure you want to remove?')
        if (proceed) {
            fetch(`http://localhost:5000/removeProducts/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product successfully removed!')
                        window.location.reload()
                    }
                })
        }
    }
    return (
        <div className='container mt-3 text-center'>
            <h2 className="fw-bold text-uppercase mb-4">Manage All<span className='purple-text'> Products</span> </h2>
            {products.length ? <Row xs={1} md={2} className="g-5 text-start">
                {
                    products.map(product => <Col key={product?._id}>
                        <Card className="p-3">
                            <Card.Img variant="top" src={product?.img} className="mx-auto" height="150px" />
                            <Card.Body className="text-center">
                                <Card.Title className="text-uppercase purple-text">{product?.name}</Card.Title>
                                <Card.Text className="text-secondary px-4">
                                    {product?.description}
                                </Card.Text>
                                <Card.Text>
                                    <h4 className="purple-text fs-5">Price: <del>$100.00</del> ${product?.price}.00  Only</h4>
                                </Card.Text>
                                <button onClick={() => handleRemoveProduct(product?._id)} className="btn btn-danger text-white w-100">Remove</button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row> : <div className="d-flex justify-content-center">
                <Spinner className="my-5" animation="border" variant="primary" />
            </div>}
        </div>
    );
};

export default ManageProducts;