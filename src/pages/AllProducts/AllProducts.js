import React from 'react';
import useProducts from '../../hooks/useProducts';
import { Card, Col, Row } from 'react-bootstrap';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='container my-5 pt-5 text-center'>
            <NavigationBar />
            <h2 className="fw-bold text-uppercase">Most Sales<span className='purple-text'> Sunglasses</span> </h2>
            <Row xs={1} md={3} className="gx-4 gy-5 text-start m-2">
                {
                    products.map(product => <Col key={product?.id}>
                        <Card>
                            <Card.Img variant="top" src={product?.img} className="mx-auto" height="150px" />
                            <Card.Body>
                                <Card.Title className="text-uppercase purple-text">{product?.name}</Card.Title>
                                <Card.Text style={{ textAlign: 'justify' }} className="text-secondary">
                                    {product?.description}
                                </Card.Text>
                                <Card.Text>
                                    <h4 className="purple-text fs-5">Price: <del>$100.00</del> ${product?.price}.00  Only</h4>
                                </Card.Text>
                                <button className="btn purple-bg text-white w-100">Buy Now</button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
            <Link to="/home">
                <button className="btn regular-btn py-2 mt-4">Back To Home</button>
            </Link>
        </div>
    );
};

export default AllProducts;