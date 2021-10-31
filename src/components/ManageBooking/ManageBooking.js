import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ManageBooking.css";

const ManageBooking = () => {
    const [manageeBooking, setManageeBooking] = useState([]);
    useEffect(() => {
        fetch("https://dark-labyrinth-92476.herokuapp.com/manageallorder")
            .then((res) => res.json())
            .then((data) => setManageeBooking(data));
    }, [manageeBooking]);

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
                        const remainingBooking = manageeBooking?.filter(
                            (deletebooking) => deletebooking._id !== id
                        );
                        setManageeBooking(remainingBooking);
                    }
                });
        }
    };

    const handleUpdate = (id) => {
        const updatestatus = manageeBooking.find(
            (update) => update?._id === id
        );
        updatestatus.status = "approved";

        const uri = `https://dark-labyrinth-92476.herokuapp.com/mybooking/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatestatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("updated successfully");
                }
            });
    };

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
                                        {booking?.placeDescriptions.slice(
                                            0,
                                            150
                                        )}
                                        ...
                                    </Card.Text>
                                    <p>${booking?.placePrice}</p>
                                    <p>status: {booking?.status}</p>
                                    <button
                                        onClick={() =>
                                            handleDelete(booking?._id)
                                        }
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleUpdate(booking?._id)
                                        }
                                    >
                                        {booking?.status}
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

export default ManageBooking;
