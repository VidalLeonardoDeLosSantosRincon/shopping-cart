const type = "ADD_PRODUCT";

export const addProduct = (product)=>{
    return {
        type,
        payload:{
            product
        }
    }
}