const type = "GET_CART_PRODUCT";

export const getCartProduct = (product)=>{
    return{
        type,
        payload:{
            product
        }
    }

}
