import React from "react";
import { Redirect, Route } from "react-router";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" variant="danger" />;
    }
    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.displayName ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        ></Redirect>
                    )
                }
            ></Route>
        </>
    );
};

export default PrivateRoute;
