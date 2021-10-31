import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import PlaceForm from "../PlaceForm/PlaceForm";
import PlaceInformation from "../PlaceInformation/PlaceInformation";
import "./PlaceOrder.css";

const PlaceOrder = () => {
    const { id } = useParams();
    const [booking, setBooking] = useState({});
    useEffect(() => {
        const uri = `https://dark-labyrinth-92476.herokuapp.com/allbooking/${id}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [id]);
    // console.log(booking);
    return (
        <div className="place-order">
            <h2 className="text-center my-5">
                <span className="confirm">Confirm</span> Your Order
            </h2>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <PlaceInformation booking={booking}></PlaceInformation>
                    </Col>
                    <Col md={6} xs={12}>
                        <PlaceForm booking={booking}></PlaceForm>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;
