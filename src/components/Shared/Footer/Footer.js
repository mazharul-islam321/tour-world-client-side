import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Footer.css";

const Footer = () => {
    const { user } = useAuth();
    return (
        <div className="footer-style py-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h1>TOUR WORLD</h1>
                            <p>
                                "Money can't buy happiness." <br /> Successful
                                people realize that events are often random
                            </p>
                            <div className="footer-icon">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">Quick Links</h2>
                            <div>
                                <Link to="/" className="quick-link">
                                    Home
                                </Link>
                            </div>
                            <div className="quick-link">
                                <Link to="/contact" className="quick-link">
                                    contact
                                </Link>
                            </div>
                            <div>
                                <Link to="/about" className="quick-link">
                                    about
                                </Link>
                            </div>
                            <div>
                                {!user?.email && (
                                    <Link to="/login" className="quick-link">
                                        Log In
                                    </Link>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">Our Address</h2>
                            <div>
                                <span>3596 Longview Ave, NY</span>
                            </div>
                            <div className="my-2">
                                <span>718-570-8650</span>
                            </div>
                            <div>
                                <span>anymail@mail.com</span>
                            </div>
                            <div className="mt-2">
                                <span>09.00 - 17.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2>For News</h2>
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="footer-input"
                            />
                            <button className="footer-button">subscribe</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
