import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Destinations = () => {
    return (
        <div className="bg-dark text-white ">
            <h2>this is Destination section</h2>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px160"
                                />
                                <Card.Body>
                                    <Card.Title className="text-dark">
                                        Card title
                                    </Card.Title>
                                    <Card.Text className="text-dark">
                                        This is a longer card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </Card.Text>
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
