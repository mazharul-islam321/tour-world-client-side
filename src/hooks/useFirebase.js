import React from "react";
import initializeAuthentication from "../firebase/Firebase.Init";

initializeAuthentication();
const useFirebase = () => {
    return (
        <div>
            <h2>this is firebase</h2>
        </div>
    );
};

export default useFirebase;
