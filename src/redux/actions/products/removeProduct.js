const type = "REMOVE_PRODUCT";

export const removeProduct = (product)=>{
    return {
        type,
        payload:{
            product
        }
    }
}