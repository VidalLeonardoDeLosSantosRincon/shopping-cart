const type = "REMOVE_CART_PRODUCT";

export const removeCartProduct = (product)=>{
    return {
        type,
        payload:{
            product
        }
    }
}