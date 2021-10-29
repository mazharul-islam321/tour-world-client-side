import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Homepage/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/login">
                            <LogIn></LogIn>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
