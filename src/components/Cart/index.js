import "./cart.scss";

import {Link } from "react-router-dom";

function Cart(props){
 
  
  const formatName = (elem)=>{
    const NewElem = elem.split(' ');
    if(NewElem.length>3){
      const Name = NewElem[1];
      return NewElem[0]+' '+NewElem[1][0]+ NewElem[1][NewElem[1].length -1] + ' ' + NewElem[2] ;
    }else{
     return  NewElem[0];
    }
  }

  const formatPrice = (price) =>{
    const NewPrice = price.toString();
    if(NewPrice.length>3){
      return NewPrice[0]+','+ NewPrice.slice(1)
    }else{
        return price;
    }  
  }

  const displayEvent = (ev) =>{
    
    if(!ev.target.offsetParent){
      document.querySelector("#cart").classList.toggle("visible");
      document.querySelector("body").classList.toggle("hidden");
    }
  }

  const countPrice = () =>{
    let sum = 0;
    if(props.cartProduct ){
      props.cartProduct.map(elem=>{
        sum+= elem.product.price * elem.count;
      });
  
      return formatPrice(sum)
    }
     return '';
   
  }

  const removeHidden =()=> {
    document.querySelector("body").classList.toggle("hidden");
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
                            <div className="plus">+</div>
                            <div className="minus">-</div>
                        </div>
                      </div>
                    )
                    
                  }) : ''}
            
              </div>
            
              <div className="total-price flex justify-content-between">
                <p className="total p ">total</p>
                <div className="price cart-title">$ {countPrice()}</div>
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