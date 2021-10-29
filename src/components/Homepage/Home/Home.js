import React from "react";
// import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Destinations from "../Destinations/Destinations";
import Experience from "../Experience/Experience";
import SpecialPlace from "../SpecialPlace/SpecialPlace";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SpecialPlace></SpecialPlace>
            <Destinations></Destinations>
            <Experience></Experience>
        </>
    );
};

export default Home;
