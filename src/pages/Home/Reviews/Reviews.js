import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../images/Ellipse 92.png'

const Reviews = () => {
    return (
        <div className='container my-5 text-center'>
            <h2 className="fw-bold text-uppercase">Customers <span className="purple-text">Reviews</span> </h2>
            <Row xs={1} md={3} className="g-5 my-3">
                <Col>
                    <Card className="border-0 py-3">
                        <Card.Img variant="top" src={img1} className="w-25 mx-auto" />
                        <Card.Body>
                            <Card.Title>Nash Patrik</Card.Title>
                            <Card.Text>
                                <h6 className="pink-text">CEO, Manpol</h6>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning mx-2"></i>
                            <i className="fas fa-star text-warning "></i>
                            <i className="fas fa-star text-warning mx-2"></i>
                            <i className="fas fa-star text-warning"></i>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3">
                        <Card.Img variant="top" src={img1} className="w-25 mx-auto" />
                        <Card.Body>
                            <Card.Title>Nash Patrik</Card.Title>
                            <Card.Text>
                                <h6 className="pink-text">CEO, Manpol</h6>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning mx-2"></i>
                            <i className="fas fa-star text-warning "></i>
                            <i className="fas fa-star text-warning mx-2"></i>
                            <i className="fas fa-star text-warning"></i>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3">
                        <Card.Img variant="top" src={img1} className="w-25 mx-auto" />
                        <Card.Body>
                            <Card.Title>Nash Patrik</Card.Title>
                            <Card.Text>
                                <h6 className="pink-text">CEO, Manpol</h6>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning mx-2"></i>
                            <i className="fas fa-star text-warning "></i>
                            <i className="fas fa-star text-warning mx-2"></i>
                            <i className="fas fa-star text-warning"></i>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Reviews;