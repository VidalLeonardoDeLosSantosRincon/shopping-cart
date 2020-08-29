import React, {Component} from "react";
import {connect} from 'react-redux';

//actions
import {addProduct} from "../../redux/actions/products/addProduct";
import {removeCartProduct} from "../../redux/actions/cart/removeCartProduct";
import { getCartProduct } from "../../redux/actions/cart/getCartProduct";


//views
import View from "./view"

class Cart extends Component{
  
    render(){
        const { 
            products_in_cart, 
            removeCartProduct, 
            addProduct,
            getCartProduct,
            total
        } = this.props;
        return(
            <View 
                total={total} 
                removeCartProduct={removeCartProduct} 
                products_in_cart={products_in_cart}
                addProduct={addProduct}
                getCartProduct={getCartProduct}
                
            />
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        products_in_cart: state.Cart.products_in_cart,
        total: state.Cart.total
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        removeCartProduct: (product) => dispatch(removeCartProduct(product)),
        addProduct: (product)=> dispatch(addProduct(product)),
        getCartProduct: (product)=> dispatch(getCartProduct(product))
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);