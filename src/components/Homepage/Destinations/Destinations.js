import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Destinations.css";

const Destinations = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const uri = "http://localhost:4000/allbooking";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setPlaces(data));
    }, []);
    return (
        <div className="destination">
            <h4 className="text-center">Our Destination</h4>
            <h1 className="text-center">Our Best Destination</h1>
            <Container>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {places.map((place) => (
                        <Col key={place._id}>
                            <Card className="card-style">
                                <Card.Img
                                    variant="top"
                                    src={place.img}
                                    className="card-img"
                                />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        {place.name}
                                    </Card.Title>
                                    <Card.Text className="card-para">
                                        {place.description}
                                    </Card.Text>
                                    <Card.Text className="card-para">
                                        ${place.price}
                                    </Card.Text>
                                    <button className="card-button">
                                        Book Now
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Destinations;
