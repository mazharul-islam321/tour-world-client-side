import {
    getAuth,
    signOut,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../firebase/Firebase.Init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const signInUsingGithub = () => {
        // setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const logOut = () => {
        // setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        });
        // .finally(() => setIsLoading(false));
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            // setIsLoading(false);
        });
    }, [auth]);
    return { user, logOut, signInUsingGoogle, signInUsingGithub };
};

export default useFirebase;
