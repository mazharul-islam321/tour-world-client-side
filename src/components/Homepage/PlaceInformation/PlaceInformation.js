import React from "react";
import "./PlaceInformation.css";

const PlaceInformation = (props) => {
    const { name, description, price, img } = props?.booking;
    return (
        <div className="place-order-info">
            <img src={img} alt="" className="img-fluid" />
            <h1>{name}</h1>
            <h5>${price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default PlaceInformation;
