import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SpecialPlace = () => {
    return (
        <div className="bg-dark text-white">
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <h4>WELCOME TO MORII</h4>
                        <h1>Nature's Majesty Awaits You</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur tempor nunc non neque euismod
                            porttitor. Nullam lacus est, tincidunt eget sapien
                            eget, maximus convallis massa. Curabitur quis tellus
                            a tortor egestas viverra.
                        </p>
                        <button>learn more...</button>
                    </Col>
                    <Col>
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
