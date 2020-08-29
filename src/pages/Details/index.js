import React , {Component} from "react";
import {connect} from "react-redux";

//views
import View from "./view";


class Details extends Component{

    state = {
        _product:null
    }

    componentDidMount(){
        const {product_cart_selected, product_selected} = this.props;
        if(product_cart_selected.length>0){
            this.setState({
                _product: product_cart_selected[0]
            })

        }else if(product_selected.length>0){
            this.setState({
                _product: product_selected[0]
            })
        }else if(product_cart_selected.length===0 && product_selected.length===0){
            window.history.back()
        }
    }

    render(){   
        const {_product}  = this.state;
        return(
            <View product={_product}/>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        product_selected: state.Products.product_selected,
        product_cart_selected: state.Cart.product_cart_selected
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);