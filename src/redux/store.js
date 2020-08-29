import {createStore, combineReducers} from "redux";

//reducers
import {Cart} from "./reducers/cart";
import {Products} from "./reducers/products";

const reducers = combineReducers({
    Cart,
    Products
})

export const store = createStore(reducers);