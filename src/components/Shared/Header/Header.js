import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className="headerimg" src="" alt="" />
                        TOUR WORLD
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/departments">
                                Departments
                            </Nav.Link>
                            <Nav.Link as={Link} to="/allService">
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="/doctors">
                                Doctors
                            </Nav.Link>

                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>

                        {user.email ? (
                            <span>
                                <span className="username"></span>
                                <span className=" logout" onClick={logOut}>
                                    Log Out
                                </span>
                                <img src="" className="profile" alt="" />
                            </span>
                        ) : (
                            <Nav>
                                <Nav.Link as={Link} to="/login">
                                    Log in
                                </Nav.Link>
                                {/* <Nav.Link as={Link} to="/signup">
                                    Sign Up
                                </Nav.Link> */}
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
