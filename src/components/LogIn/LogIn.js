import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

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
        <div>
            <h2>log in </h2>
            <Button variant="warning" onClick={handleGoogleSignIn}>
                Google Sign in
            </Button>
        </div>
    );
};

export default LogIn;
