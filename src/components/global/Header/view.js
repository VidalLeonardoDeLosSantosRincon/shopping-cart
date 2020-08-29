import React, {Fragment} from "react";
import {Link} from "react-router-dom";

//css
import "./styles.css";

//assets
import cartLogo from "../../../assets/images/supermarket (1).png";

export default function({notifications, show_notifications}){
    return(
        <Fragment>
            <header>
                <Link to="/cart"><img src={cartLogo} alt="cart_logo"/></Link>
                { 
                show_notifications && notifications?
                    <span className="button is-danger is-small is-rounded">{notifications}</span>
                :null     
                }
            </header>
        </Fragment>
    );
}