import { combineReducers } from "redux";
import {ProductReducer, CartReducer} from "./Products";



const reducers = combineReducers({
  Allproducts: ProductReducer,
  cartproducts : CartReducer,
});

export default reducers;