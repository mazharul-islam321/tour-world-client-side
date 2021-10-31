import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Destinations from "../Destinations/Destinations";
import Experience from "../Experience/Experience";
import SpecialPlace from "../SpecialPlace/SpecialPlace";
import "./Home.css";

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-center spiner-style">
                <Spinner animation="grow" variant="warning" />
            </div>
        );
    }
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
