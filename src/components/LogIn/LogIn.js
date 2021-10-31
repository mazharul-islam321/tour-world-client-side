import React from "react";
// import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
    const { setIsLoading, signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="login">
            <h2>log in </h2>
            <button onClick={handleGoogleSignIn}>
                <img src="https://i.ibb.co/c8H6TN5/google.png" alt="" />
                <h4>Google Sign in</h4>
            </button>
        </div>
    );
};

export default LogIn;
