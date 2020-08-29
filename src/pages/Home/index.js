import React, {Component} from "react";
import {connect} from 'react-redux';

//actions
import {addCartProduct} from "../../redux/actions/cart/addCartProduct";
import {removeProduct} from "../../redux/actions/products/removeProduct";
import { getProduct } from "../../redux/actions/products/getProduct";
//views
import View from "./view"

class Home extends Component{
   
    render(){
        const {
            products,
            addCartProduct, 
            removeProduct,
            getProduct
            } = this.props;
      
        return(
            <View 
                products={products} 
                addCartProduct={addCartProduct} 
                removeProduct={removeProduct}
                getProduct={getProduct}
            />
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        products: state.Products.products
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        addCartProduct: (product) => dispatch(addCartProduct(product)),
        removeProduct: (product)=> dispatch(removeProduct(product)),
        getProduct: (product)=> dispatch(getProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

