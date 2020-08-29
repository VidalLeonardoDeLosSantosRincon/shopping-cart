import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//components
import App from "../components/App";

//pages
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Details from "../pages/Details";

export const AppRoutes = ()=>{
    return(
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/details/:id" component={Details}/>
                </Switch>
            </App>
        </Router>
    );
}