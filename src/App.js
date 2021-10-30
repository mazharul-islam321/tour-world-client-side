import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Homepage/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import About from "./components/About/About";
import MyBooking from "./components/MyBooking/MyBooking";
import ManageBooking from "./components/ManageBooking/ManageBooking";
import AddNewBooking from "./components/AddNewBooking/AddNewBooking";
import Contact from "./components/Contact/Contact";
import PlaceOrder from "./components/Homepage/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
                        <PrivateRoute path="/placeorder/:id">
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute>
                        <PrivateRoute path="/mybooking">
                            <MyBooking></MyBooking>
                        </PrivateRoute>
                        <PrivateRoute path="/managebooking">
                            <ManageBooking></ManageBooking>
                        </PrivateRoute>
                        <PrivateRoute path="/addnewbooking">
                            <AddNewBooking></AddNewBooking>
                        </PrivateRoute>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/contact">
                            <Contact></Contact>
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
