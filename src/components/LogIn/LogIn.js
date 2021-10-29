import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const handleGoogleSignIn = () => {
        signInUsingGoogle().then((result) => {
            const user = result.user;
            console.log(user);
            // history.push(redirect_url);
        });
        // .finally(() => setIsLoading(false));
    };
    const handleGithubSignIn = () => {
        signInUsingGithub().then((result) => {
            const user = result.user;
            console.log(user);
            // history.push(redirect_url);
        });
    };
    return (
        <div>
            <h2>this is log in page</h2>
            <Button variant="warning" onClick={handleGoogleSignIn}>
                Google Sign in
            </Button>{" "}
            <Button variant="info" onClick={handleGithubSignIn}>
                Github sign In
            </Button>
        </div>
    );
};

export default LogIn;
