import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../images/glass1.jpg'

const Products = () => {
    return (
        <div className='container my-5 text-center'>
            <h2 className="fw-bold text-uppercase">Most Sales<span className='green-text'> Sunglasses</span> </h2>
            <Row xs={1} md={3} className="g-5 mb-3">
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="mx-auto" />
                        <Card.Body>
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="green-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="green-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="green-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="green-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="green-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="green-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <button className="btn regular-btn py-2 my-3">Explore More</button>
        </div>
    );
};

export default Products;