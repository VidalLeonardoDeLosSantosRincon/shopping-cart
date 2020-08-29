import React , {Fragment} from "react";
import Magnifier from "react-magnifier";

//css
import "./styles.css";


export default function(props){
    const {product} = props;       
    return(
        <Fragment>
            <span className="button is-info is-small is-outlined"
            onClick={()=>{
                window.history.back();
            }}
            >Go back</span>
            {(product!==null && product!==undefined)?
            <div className="ctr-details">
                <div className="product-box">    
                    <Magnifier className="img" src={`${product.image}`} mgShape="circle" mgBorderWidth="1" zoomFactor="1.8"/>
                </div>

                <div className="product-info-box">
                    <span className="title">{product.name}</span>
                    <p>{product.description}</p>
                    <span className="button is-small is-info is-light">Size: {product.size}</span>
                    <span className="button is-small is-info is-light">State: {product.state}</span>
                    <span className="button is-small is-success is-light">Price: {product.price}</span>
                    <span className="button is-small is-info is-light">Units: {product.units}</span>
                    <span className="button is-small is-warning
                     is-light">Total: {product.total}</span>
                </div> 
            </div>
            :""}
        </Fragment>
    );
}