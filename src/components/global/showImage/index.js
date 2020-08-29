import React, {Fragment} from "react";

//css
import "./styles.css"


export const ShowImage = (props)=>{
    const {imageSrc, imageName} = props;
    return(
        <Fragment>
            <img className="product-image" src={imageSrc} alt={imageName} />
        </Fragment>
    );
}