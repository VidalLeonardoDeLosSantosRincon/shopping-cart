import React, {Fragment} from "react";
import {Link} from "react-router-dom";

//css
import "./styles.css";

export default function(props){
    const {
        total, 
        removeCartProduct, 
        products_in_cart, 
        addProduct,
        getCartProduct
    } = props;
    
    return(
        <Fragment>
            <div className="ctr-cart">
                <Link to="/" className="button is-small is-info is-outlined" style={{marginBottom:"5px"}}>go back</Link>
                <div className="table-container">
                    <table className="table is-hoverable" style={{backgroundColor:"white"}}>
                        <thead>
                            <tr>
                                <span className="button is-warning is-small is-rounded">Total:{` ${total}`}</span>
                            </tr>
                        </thead>
                        <hr/>
                        <tbody>
                            {
                                products_in_cart.length===0?<span className="title" style={{color:"gray",fontSize:"30px", fontWeight:"300"}}>No products in cart</span>
                                :products_in_cart.map((product, index)=>{
                                    return(
                                    <Fragment>
                                        <tr>
                                            
                                            <td style={{textAlign:"left"}}>
                                                <img src={product.image} alt={product.name}/>
                                                <span className="product-info-box">
                                                    <span className="title">{product.name}</span>
                                                    <p>{product.description}</p>
                                                    <span>size: {product.size}</span>
                                                    <span>&nbsp;|&nbsp;</span>
                                                    <span>state: {product.state}</span>
                                                    <span>&nbsp;|&nbsp;</span>
                                                    <span>price: {product.price}</span>
                                                    <span>&nbsp;|&nbsp;</span>
                                                    <span>units: {product.units}</span>
                                                    <span>&nbsp;|&nbsp;</span>
                                                    <span>total: {product.total}</span>
                                                </span>
                                            </td>
                                            <td>
                                                <button className="button is-danger is-small is-rounded is-outlined" 
                                                    onClick={()=>{
                                                        
                                                        addProduct(product);
                                                        removeCartProduct(product)
                                                        }}>
                                                    X
                                                </button>
                                                <Link to={`/details/${product.id}`}
                                                    onClick={()=>{
                                                        getCartProduct(product);
                                                    }} 
                                                    style={{margin:"0 5px"}}
                                                    className="button is-info is-small is-rounded is-outlined">
                                                    Details
                                                </Link>
                                            </td>
                                        </tr>
                                    </Fragment>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    ) 
}