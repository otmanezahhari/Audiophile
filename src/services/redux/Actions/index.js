import {ActionTypes} from "../Constants";

export const getDataFromDB = (data) =>{

  return{
    type :ActionTypes.GET_DATA_FROM_DB,
    payload:data,
  }
}

export const addProductToCart = (product,quantity) =>{
  return{
    type :ActionTypes.ADD_TO_CART,
    payload:product,
    quantity,
  }
}

export const removeProductFromCart = () =>{
  return{
    type :ActionTypes.ROMOVE_ALL,
    
  }
}

export const updateProductCartQuantity = (product,quantity) =>{
  return{
    type :ActionTypes.UPDATE_QUANTITY,
    payload:product,
    quantity:quantity,
  }
}