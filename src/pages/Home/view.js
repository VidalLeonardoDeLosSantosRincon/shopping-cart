import React, {Fragment} from "react";
import {useHistory} from "react-router-dom";

/*import Magnifier from "react-magnifier";

//assets
import jeansImg from "../../assets/images/blue_jeans(2).jpg"*/

//css
import "./styles.css";

//components
import {ShowImage} from "../../components/global/showImage";

export default function(props){
    const {products, addCartProduct, removeProduct, getProduct} = props;
    const history  = useHistory();
    return(
        <Fragment>
            <div className="ctr-home">
                {/*<Magnifier src={jeansImg} mgShape="circle" mgBorderWidth="0" zoomFactor="1.2"/>*/}
                <div className="table-container">
                    <table className="table is-hoverable" style={{backgroundColor:"white"}}>
                        <thead>
                            <tr>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index)=>{
                                    return(                              
                                        <tr key={`product_${index}`} 
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                
                                                getProduct(product);
                                                history.push(`/details/${product.id}`)
                                            }}
                                            style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
                                            
                                            <td>
                                                <ShowImage imageSrc={product.image} imageName={product.name}/>
                                                <span>&nbsp;&nbsp;</span>   
                                                <div>
                                                    <span className="title" style={{padding:"0", margin:"0"}}>{product.name}</span>
                                                    
                                                    <span className="info-box">
                                                        <p>{product.description}</p>
                                                        <p>
                                                            <span>size: {product.size}</span>
                                                            <span>&nbsp;|&nbsp;</span>
                                                            <span>state: {product.state}</span>
                                                            <span>&nbsp;|&nbsp;</span>
                                                            <span>price: {product.price}</span>
                                                            <span>&nbsp;|&nbsp;</span>
                                                            <span>units: {product.units}</span>
                                                            <span>&nbsp;|&nbsp;</span>
                                                            <span>total: {product.total}</span>
                                                        </p>
                                                    </span>
                                                </div>
                                            </td>
                                        
                                            <td>
                                                <button className="button is-small is-success" 
                                                    onClick={(e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        removeProduct(product);
                                                        addCartProduct(product)
                                                    }}>
                                                    Add to cart
                                                </button>
                                            </td>
                                        </tr>
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