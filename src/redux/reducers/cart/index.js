const INITIAL_STATE = {
    products_in_cart:[],
    product_cart_selected:[],
    total:0,
    notifications:0,
    show_notifications:false
}

export const Cart = (state = INITIAL_STATE, {type, payload}) => 
{  
    switch(type){
        case "ADD_CART_PRODUCT":
            return {
                ...state,
                products_in_cart: state.products_in_cart.concat(payload.product).reverse(),
                notifications: state.notifications + 1,
                show_notifications: true,
                total: state.total + payload.product.price
            }
        case "REMOVE_CART_PRODUCT":
            return {
                ...state,
                products_in_cart: state.products_in_cart.filter(x => x.id !== payload.product.id).reverse(),
                notifications: state.notifications>0? (state.notifications - 1) : state.notifications,
                show_notifications: state.notifications>0? true: false,
                total: state.total - payload.product.price
            }
            case "GET_CART_PRODUCT":
                return{
                    ...state,
                    product_cart_selected: state.products_in_cart.filter(x => x.id === parseInt(payload.product.id))
                }
        default:
            return state;
    }
}