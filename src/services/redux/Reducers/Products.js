import {ActionTypes} from "../Constants";

const initialState ={
  products:[],
  cartProduct :[],
}

export const ProductReducer = (state=initialState, {type, payload})=>{
  // state = read_cookie('cartproducts').cartProduct ? {...read_cookie('cartproducts')} :state;

  switch(type){
    case ActionTypes.GET_DATA_FROM_DB :

      return({...state,products:payload})   
    default:
      return state;
      

  }
}


export const CartReducer = (state = initialState, {type, payload,quantity}) =>{
  state = JSON.parse(localStorage.getItem('MyCartProducts'))? JSON.parse(localStorage.getItem('MyCartProducts')) : initialState;
  
  switch(type){
    

    case ActionTypes.ADD_TO_CART:
      let {cartProduct} = state;
      const NewCartProduct = cartProduct.filter((elem)=>elem.id !== payload.id);
      NewCartProduct.push({...payload,quantity});
      localStorage.setItem('MyCartProducts', JSON.stringify({...state,cartProduct:NewCartProduct}));
      return ({...state,cartProduct:NewCartProduct});
    case ActionTypes.ROMOVE_ALL:
      localStorage.removeItem('MyCartProducts');
      return({...state,cartProduct:[]});
    
    case ActionTypes.UPDATE_QUANTITY:
      
      const ProductCart = state.cartProduct;
      let NewUpdatedProductCart = [];

      
      if(payload.quantity+quantity === 0){
        NewUpdatedProductCart = ProductCart.filter((elem)=>elem.id !== payload.id)
        localStorage.setItem('MyCartProducts', JSON.stringify({...state,cartProduct:NewUpdatedProductCart}));

        return ({...state,cartProduct:NewUpdatedProductCart});
      }else{
        
        NewUpdatedProductCart = ProductCart.map((elem)=>{
        if(elem.id === payload.id){

          return({...elem, quantity: elem.quantity+quantity})

        }else{
          return {...elem}
        }
        })
        localStorage.setItem('MyCartProducts', JSON.stringify({...state,cartProduct:NewUpdatedProductCart}));

        return ({...state,cartProduct:NewUpdatedProductCart});
      }
      
      

    default:
      return state;

  }
}