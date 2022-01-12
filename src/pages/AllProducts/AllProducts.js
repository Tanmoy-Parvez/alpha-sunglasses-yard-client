import React from 'react';
import useProducts from '../../hooks/useProducts';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import useBuy from '../../hooks/useBuy';
import Fade from 'react-reveal/Fade';

const AllProducts = () => {
    const [products, setProducts] = useProducts();
    const handleBuyNow = useBuy()

    const handlePurchase = (id) => {
        handleBuyNow(id)
    }
    return (
        <div className='container-fluid pb-2 mt-5 pt-5 text-center banner-bg' style={{ minHeight: "100vh" }}>
            <NavigationBar />
            <h2 className="fw-bold text-uppercase">Most Sales<span className='purple-text'> Sunglasses</span> </h2>
            {products.length ? <Row xs={1} md={3} className="gx-4 gy-5 container mx-auto text-start m-2">
                {
                    products.map(product => <Fade up>
                        <Col key={product?._id}>
                            <Card className="border py-3">
                                <Card.Img variant="top" src={product?.img} className="mx-auto p-3" height="150px" />
                                <Card.Body className="text-center">
                                    <Card.Title className="text-uppercase purple-text">{product?.name}</Card.Title>
                                    <Card.Text className="text-secondary">
                                        {product?.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <h4 className="purple-text fs-5">Price: ${product?.price}</h4>
                                    </Card.Text>
                                    <Link to={`/purchase/${product?._id}`}>
                                        <button
                                            onClick={() => handlePurchase(product?._id)}
                                            className="btn py-2 regular-btn w-100">
                                            Buy Now
                                        </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Fade>)
                }
            </Row> : <div className="d-flex justify-content-center">
                <Spinner className="my-5" animation="border" variant="primary" />
            </div>}
            <Link to="/home">
                <button className="btn regular-btn py-2 mt-4">Back To Home</button>
            </Link>
        </div>
    );
};

export default AllProducts;