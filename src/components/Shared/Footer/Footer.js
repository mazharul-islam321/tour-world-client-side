import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Container>
                <Row>
                    <Col md={3} xs={12}>
                        <div>
                            <h1>tour wprld</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <i>icons</i>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div>
                            <h2>Quick Links</h2>
                            <div>
                                <Link to="">Home</Link>
                            </div>
                            <div>
                                <Link to="">contact</Link>
                            </div>
                            <div>
                                <Link to="">all service</Link>
                            </div>
                            <div>
                                <Link to="">about</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div>
                            <h2>Our Address</h2>
                            <div>
                                <span>3596 Longview Ave, NY</span>
                            </div>
                            <div>
                                <span>718-570-8650</span>
                            </div>
                            <div>
                                <span>anymail@mail.com</span>
                            </div>
                            <div>
                                <span>09.00 - 17.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12}>
                        <div>
                            <h2>For News</h2>
                            <input type="text" />
                            <button>subscribe</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
