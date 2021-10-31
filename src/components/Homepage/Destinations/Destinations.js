import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Destinations.css";

const Destinations = () => {
    const { setIsLoading } = useAuth();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const uri = "https://dark-labyrinth-92476.herokuapp.com/allbooking";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setPlaces(data);
            });
    }, [setIsLoading]);

    return (
        <div className="destination">
            <h4 className="text-center">Our Destination</h4>
            <h1 className="text-center">
                Our Best <span>Destination</span>
            </h1>
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
                                        {place.description.slice(0, 80)}...
                                    </Card.Text>
                                    <Card.Text className="card-para">
                                        ${place.price}
                                    </Card.Text>
                                    <Link to={`/placeorder/${place._id}`}>
                                        <button className="card-button">
                                            Book Now
                                        </button>
                                    </Link>
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
