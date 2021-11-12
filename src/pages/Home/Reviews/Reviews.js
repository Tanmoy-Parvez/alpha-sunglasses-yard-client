import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='banner-bg my-5 p-5 text-center'>
            <h2 className="fw-bold text-uppercase mb-4">Customers <span className="purple-text">Reviews</span> </h2>
            <Row xs={1} md={3} className="g-5">
                {
                    reviews.map(review => <Col key={review?.id}>
                        <Card className="border-0 py-3">

                            {review?.img ? <Card.Img variant="top" src={review?.img} className="mx-auto w-25" />
                                :
                                <i className="fas fa-user-circle my-" style={{ fontSize: "95px" }}></i>
                            }

                            <Card.Body className="px-4">
                                <Card.Title>{review?.name}</Card.Title>
                                <Card.Text>
                                    <h6 className="pink-text">{review?.email}</h6>
                                </Card.Text>
                                <Card.Text>
                                    {review?.message}
                                </Card.Text>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning mx-2"></i>
                                <i className="fas fa-star text-warning "></i>
                                <i className="fas fa-star text-warning mx-2"></i>
                                <i className="fas fa-star text-warning"></i>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Reviews;