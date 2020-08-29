const INITIAL_STATE = {
    products:[
        {id:1, image:"https://i.ibb.co/2srT8Jh/black-tshirt-2.jpg", name:"T-shirt", description:"black t-shirt",size:"S", state :"new", price:450, units:1, total:450, saved:false},
        {id:2, image:"https://i.ibb.co/DbRLtyT/blue-jeans-2.jpg", name:"Jeans", description:"blue jeans", size:"32", state :"new", price:900, units:1, total:900, saved:false},
        {id:3, image:"https://i.ibb.co/gJN6vzm/black-shoes.jpg", name:"Shoes", description:"black shoes", size:"42", state :"second hand", price:450, units:1, total:450, saved:false}
    ],
    product_selected:[]
}

export const Products = (state = INITIAL_STATE, {type, payload}) => 
{
    switch(type){
        case "ADD_PRODUCT":
            return{
               ...state,
               products: state.products.concat(payload.product)
            }
        case "REMOVE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(x => x.id!== payload.product.id)
            }
        case "GET_PRODUCT":
            return{
                ...state,
                product_selected: state.products.filter(x => x.id === parseInt(payload.product.id))
            }
        default:
            return state;
    }
}

