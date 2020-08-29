import React, {Fragment} from "react";

//css
import "./styles.css";

export const Content = ({children})=>{
    return(
        <Fragment>
            <div className="ctr-content">
                {children}
            </div>
        </Fragment>
    );
}