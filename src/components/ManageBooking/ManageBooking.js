import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ManageBooking.css";

const ManageBooking = () => {
    const [manageeBooking, setManageeBooking] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/manageallorder")
            .then((res) => res.json())
            .then((data) => setManageeBooking(data));
    }, []);

    return (
        <div className="ManageBooking">
            <h2 className="manage-header">
                Manage Your <span>Booking</span>
            </h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {manageeBooking.map((booking) => (
                        <Col key={booking?._id}>
                            <Card className="managecard">
                                <Card.Img
                                    variant="top"
                                    src={booking?.placeImg}
                                    className="manage-img"
                                />
                                <Card.Body>
                                    <Card.Title>{booking?.name}</Card.Title>
                                    <h5>Place: {booking?.placeName}</h5>
                                    <Card.Text>
                                        {booking?.placeDescriptions}
                                    </Card.Text>
                                    <p>${booking?.placePrice}</p>
                                    <button>delete</button>
                                    <button>{booking?.status}</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ManageBooking;
