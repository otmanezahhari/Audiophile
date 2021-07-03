import "./cart.scss";
import {formatName, formatPrice, countPrice} from "../Healpers";

import {Link } from "react-router-dom";

function Cart(props){
  console.log(props)
 
  const displayEvent = (ev) =>{
    
    if(!ev.target.offsetParent){
      document.querySelector("#cart").classList.toggle("visible");
      document.querySelector("body").classList.toggle("hidden");
    }
  }

  const removeHidden =()=> {
    document.querySelector("body").classList.toggle("hidden");
  }

  const updateCartQuantity = (product, quantity)=>{
    props.updateQuantityCategory(product,quantity);
  }

  return(
    <div id="cart" className="cart" onClick={displayEvent}>
      <div className="container" >
        <div className="cart-content" >

          {props.cartProduct ? props.cartProduct.length?
            <>
              <div className="box-heading flex justify-content-between">
                <h3 className="cart-title ">cart ({props.cartProduct ?  props.cartProduct.length:0})</h3>
                <p className = "p" onClick={props.removeAll} >Remove all</p>
              </div>
              <div className="cart-content-products" >
                
                  

                  {props.cartProduct ? props.cartProduct.map((elem,index)=>{
              

                    return(
                      <div key = {index}  className="product flex justify-content-between">
                        <div className="box-product flex">
                          <div className="box-img-product">
                            <img src={`/Audiophile/${elem.product.image.desktop}`} alt="" />
                          </div>
                          <div className="description">
                            <h3 className="title p">{formatName(elem.product.name)}</h3>
                            <p className="price p">$ {formatPrice(elem.product.price)}</p>
                          </div>            
                        </div>
                        <div className="box-quantity flex center">
                            <input className="quantity" value= {elem.count} />    
                            <div className="plus" onClick = {() => updateCartQuantity(elem.product,elem.count + 1)}>+</div>
                            <div className="minus"  onClick = {() => updateCartQuantity(elem.product,elem.count - 1)}>-</div>
                        </div>
                      </div>
                    )
                    
                  }) : ''}
            
              </div>
            
              <div className="total-price flex justify-content-between">
                <p className="total p ">total</p>
                <div className="price cart-title">$ {formatPrice(countPrice(props.cartProduct))}</div>
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