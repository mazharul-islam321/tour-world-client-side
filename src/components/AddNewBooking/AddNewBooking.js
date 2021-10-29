import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewBooking.css";

const AddNewBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const uri = `http://localhost:4000/allbooking`;
        fetch(uri, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("added successfullay");
                    reset();
                }
            });
    };
    return (
        <div className="add-services">
            <h2 className="text-center">Add a New Destination</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", {
                        required: true,
                        maxLength: 20,
                    })}
                    placeholder="Place Name"
                />
                <textarea
                    {...register("description")}
                    placeholder="Place description"
                />
                <input
                    type="number"
                    {...register("price")}
                    placeholder="Price"
                />
                <input {...register("img")} placeholder="Image Url" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewBooking;
