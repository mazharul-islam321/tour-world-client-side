import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SpecialPlace.css";

const SpecialPlace = () => {
    return (
        <div className="special-place">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={6} xs={12}>
                        <h4>WELCOME TO, TOUR WORLD</h4>
                        <h1>Nature's Majesty Awaits You</h1>
                        <p>
                            “Travel is fatal to prejudice, bigotry, and
                            narrow-mindedness, and many of our people need it
                            sorely on these accounts. Broad, wholesome,
                            charitable views of men and things cannot be
                            acquired by vegetating in one little corner of the
                            earth all one’s lifetime.” – Mark Twain
                        </p>
                        <button className="button-style">learn more...</button>
                    </Col>
                    <Col md={6} xs={12}>
                        <img
                            className="img-fluid"
                            src="https://i.ibb.co/30c7ThC/lake-nature-beautiful-places-world-wallpaper-preview.jpg"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpecialPlace;
