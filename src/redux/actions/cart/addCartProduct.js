const type = "ADD_CART_PRODUCT";

export const addCartProduct = (product)=>{
    return {
        type,
        payload:{
            product
        }
    }
}