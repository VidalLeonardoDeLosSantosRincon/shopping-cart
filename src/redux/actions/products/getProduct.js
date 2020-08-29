const type = "GET_PRODUCT";

export const getProduct = (product)=>{
    return{
        type,
        payload:{
            product
        }
    }

}
