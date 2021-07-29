import { useSelector, useDispatch } from "react-redux";
import {Link } from "react-router-dom";

import {removeProductFromCart, updateProductCartQuantity} from "services/redux/Actions";

import {formatName, formatPrice, countPrice, removeHidden} from "components/Healpers";
import "./cart.scss";



function Cart(){
  
  const GetDataFromCart = useSelector(state=>state.cartproducts);
  const CartProduct = GetDataFromCart.cartProduct;

  
  const dispatch = useDispatch()
 
  return(
    <div id="cart" className="cart">
      <div className="container" >
        <div className="cart-content" >

          {CartProduct ? CartProduct.length?
            <>
              <div className="box-heading flex justify-content-between">
                <h3 className="cart-title ">cart ({CartProduct ?  CartProduct.length:0})</h3>
                <p className = "p" onClick={()=>dispatch(removeProductFromCart())}>Remove all</p>
              </div>
              <div className="cart-content-products" >
                                 
                  {CartProduct ? CartProduct.map((elem,index)=>{
              
        
                    return(
                      <div key = {index}  className="product flex justify-content-between">
                        
                        <div className="box-product flex">
                          <div className="box-img-product">
                            <img src={`/Audiophile/${elem.image.desktop}`} alt="" />
                          </div>
                          <div className="description">
                            <h3 className="title p">{formatName(elem.name)}</h3>
                            <p className="price p">$ {formatPrice(elem.price)}</p>
                          </div>            
                        </div>
                        <div className="box-quantity flex center">
                            <input className="quantity" value= {elem.quantity} />    
                            <div className="plus" onClick={()=>dispatch(updateProductCartQuantity(elem, +1))}>+</div>
                            <div className="minus" onClick={()=>dispatch(updateProductCartQuantity(elem, -1))}>-</div>
                        </div>
                      
                      </div>
                    
                    
                    )
                    
                  }) : ''}
            
              </div>
            
              <div className="total-price flex justify-content-between">
                <p className="total p ">total</p>
                <div className="price cart-title">$ {formatPrice(countPrice(CartProduct))}</div>
              </div>

              <Link to="/checkout" className="checkout btn" onClick={removeHidden}>
                <p>checkout</p>
              </Link>
       
            </> :<p id="message" className="p">Your Cart is Currently Empty !!</p> : ''
          }
          



        </div>
      </div>
    </div>
  )
}

export default Cart;