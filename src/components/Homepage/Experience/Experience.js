import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Experience = () => {
    return (
        <div className="bg-dark text-white">
            <Container>
                <h5>WHY CHOOSE US</h5>
                <h1>Countless Experiences</h1>
                <Row>
                    <Col md={3} xs={12}>
                        <div>
                            <i>df</i>
                            <h2>Experienced</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur tempor.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div>
                            <i>df</i>
                            <h2>Worldwide</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur tempor.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div>
                            <i>df</i>
                            <h2>Cheap</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur tempor.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div>
                            <i>df</i>
                            <h2>24/7 Service</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur tempor.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;
