import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience">
            <Container>
                <h4 className="">WHY CHOOSE US</h4>
                <h1>Countless Experiences</h1>
                <Row>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="far fa-compass"></i>
                            <h2>Experienced</h2>
                            <p>
                                Average people say this to console themselves
                                when they feel helpless to make a positive
                                change in the world.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-globe"></i>
                            <h2>Worldwide</h2>
                            <p>
                                Average people say this to give themselves
                                permission to meander all over the place rather
                                than set and achieve goals.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-wallet"></i>
                            <h2>Cheap</h2>
                            <p>
                                Average people say this because it makes them
                                feel better to pretend is directing events in
                                their lives.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-headphones"></i>
                            <h2>24/7 Service</h2>
                            <p>
                                Trusted results for Your Search Query. Check
                                Visymo Search for the best results! Unlimited
                                Access. 100% Secure.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;
