import React from "react";
import {connect} from "react-redux";

//view
import View from "./view";

const Header = ({notifications, show_notifications}) =>{
    return(
        <View notifications={notifications} show_notifications={show_notifications}/>
    );
}

const mapStateToProps = (state) =>{
    return {
        notifications: state.Cart.notifications,
        show_notifications: state.Cart.show_notifications
    };
};

export default connect(mapStateToProps)(Header);


