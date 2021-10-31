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
        const uri = `https://dark-labyrinth-92476.herokuapp.com/mybooking/${user?.email}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setAllBooking(data));
    }, [user.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure, you want to delete!!!");
        if (proceed) {
            fetch(
                `https://dark-labyrinth-92476.herokuapp.com/mybooking/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingBooking = allBooking.filter(
                            (deletebooking) => deletebooking._id !== id
                        );
                        setAllBooking(remainingBooking);
                    }
                });
        }
    };
    return (
        <div className="my-booking-style">
            <h1>
                My Booked <span className="information">Information</span>
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
                                    <h4>{singleBooking?.placeName}</h4>
                                    <p>
                                        {singleBooking?.placeDescriptions.slice(
                                            0,
                                            50
                                        )}
                                        ...
                                    </p>
                                    <p>{singleBooking?.addres}</p>
                                    <p>{singleBooking?.phone}</p>
                                    <p>${singleBooking?.placePrice}</p>
                                    <p>status: {singleBooking?.status}</p>
                                    <button
                                        onClick={() =>
                                            handleDelete(singleBooking?._id)
                                        }
                                    >
                                        delete
                                    </button>
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
