import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./MyBooking.css";

const MyBooking = () => {
    const { user } = useAuth();
    const [allBooking, setAllBooking] = useState([]);
    useEffect(() => {
        const uri = `http://localhost:4000/mybooking/${user?.email}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setAllBooking(data));
    }, [user.email]);
    return (
        <div className="my-booking-style">
            <h1>
                my booked <span className="information">information</span>
            </h1>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {allBooking.map((singleBooking) => (
                        <Col key={singleBooking?._id}>
                            <div className="my-booking-card">
                                <div>
                                    <img src={singleBooking?.placeImg} alt="" />
                                </div>
                                <div>
                                    <h2>{singleBooking?.placeName}</h2>
                                    <p>{singleBooking?.placeDescriptions}</p>
                                    <p>{singleBooking?.addres}</p>
                                    <p>{singleBooking?.phone}</p>
                                    <p>${singleBooking?.placePrice}</p>
                                    <button>delete</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default MyBooking;
