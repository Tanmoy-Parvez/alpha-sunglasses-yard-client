import React from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBuy from '../../../hooks/useBuy';
import useProducts from '../../../hooks/useProducts';
import Zoom from 'react-reveal/Zoom';


const Products = () => {
    const [products, setProducts] = useProducts();
    const handleBuyNow = useBuy()

    const handlePurchase = (id) => {
        handleBuyNow(id)
    }

    return (
        <div className='container my-5 text-center'>
            <h2 className="fw-bold text-uppercase">Most Sales<span className='purple-text'> Sunglasses</span> </h2>
            {products.length ? <Row xs={1} md={3} className="gx-4 gy-5 text-start m-3">
                {
                    products.slice(0, 6).map(product => <Zoom>
                        <Col key={product?._id}>
                            <Card className="border p-3">
                                <Card.Img variant="top" src={product?.img} className="mx-auto p-3" height="150px" />
                                <Card.Body className="text-center">
                                    <Card.Title className="text-uppercase purple-text fs-6">{product?.name}</Card.Title>
                                    <Card.Text className="text-secondary">
                                        {product?.description.slice(0, 58)}
                                    </Card.Text>
                                    <Card.Text>
                                        <h4 className="purple-text fs-5">${product?.price}.00</h4>
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
                    </Zoom>)
                }
            </Row> : <div className="d-flex justify-content-center">
                <Spinner className="my-5" animation="border" variant="primary" />
            </div>}
            <Link to="/allProducts">
                <button className="btn regular-btn py-2 mt-4">Explore More</button>
            </Link>
        </div>
    );
};

export default Products;