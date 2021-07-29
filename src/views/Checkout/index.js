import {  formatName, formatPrice, countPrice} from "components/Healpers";
import { useSelector } from "react-redux";
import {useState} from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

import MessageThanks from "./ThanksMessage";
import CashOnDelivery from "./RenderCashOnDelivery";
import "./checkout.scss";

function Checkout(){

  const GetDataFromCart = useSelector(state=>state.cartproducts);
  const cartProduct = GetDataFromCart.cartProduct;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [displayMessage,SetDisplayThanks] = useState(false);
  
  const [choosePaymentMethode,setChoosePaymentMethode] = useState(false)
  
  const onSubmit = () =>{
    SetDisplayThanks(true);
    document.querySelector("body").classList.toggle("hidden");
  } 



  const paymentMethode = (ev) =>{
    
    if(ev.target.classList.value.includes('on-delivery')){
      setChoosePaymentMethode(true)
      document.querySelector(".check-box.on-delivery").classList.add("active") ;
      document.querySelector(".check-box.e-money").classList.remove("active");
      document.querySelector("input.on-delivery").classList.add("checked");
      document.querySelector("input.e-money").classList.remove("checked");
      document.querySelector("input.on-delivery").removeAttribute("disabled");
      document.querySelector("input.e-money").setAttribute("disabled","disabled")
    }
    else if(ev.target.classList.value.includes('e-money')){
      setChoosePaymentMethode(false)
      document.querySelector(".check-box.e-money").classList.add("active");
      document.querySelector(".check-box.on-delivery").classList.remove("active");
      document.querySelector("input.e-money").classList.add("checked");
      document.querySelector("input.on-delivery").classList.remove("checked");
      document.querySelector("input.e-money").removeAttribute("disabled");
      document.querySelector("input.on-delivery").setAttribute("disabled","disabled")
    }
  }

  const  RenderEmoney = () => {
    return(
      <div className="e-money-information display information active flex justify-content-between">
          <div className="group-form">
            <label className="label">e-Money number</label>
            <input 
              className= {errors.eMoneyNumber? "error middle" : "middle" }
              type="text" 
              {...register("eMoneyNumber", { required: true,pattern:/[0-9]{2}$/ })} 
  
              placeholder="New York"/> 
          </div>
          <div className="group-form">
            <label className="label">e-Money PIN</label>
            <input 
              className= {errors.eMoneyPIN? "error middle" : "middle" } 
              type="text" 
              {...register("eMoneyPIN", { required: true,pattern:/[0-9]{3}$/ })} 
              placeholder="United States" />
          </div>
      </div>
  
  
    )
  }



  return(
    <>
      {displayMessage ? <MessageThanks  cartProduct={cartProduct}/>: ''}
      
      <div id="checkout">
        


        <div className="container">
          <div className="go-back">
            <Link to="/Audiophile" className="back">Go back</Link>
          </div>
          <div className="flex justify-content-between">
          {cartProduct.length === 0 ? <p className="empty-cart">Your Cart is Currently Empty !!</p> :             <form onSubmit={handleSubmit(onSubmit)}>
              <div className="box-bill flex justify-content-between">
                  <div className="box-checkout">
                  <h2 className="heading">Checkout</h2>
                  <div className="box box-belling-details">
                    <h3 className="p heading-checkout">Billing details</h3>
                    <div className="information billing-details flex justify-content-between">
                      <div className="group-form">
                        <div className="flex msg-label justify-content-between">
                          <label 
                            className= {errors.name? "error label" :"label"}>Name</label>
                          {errors.name && <span className="label" style={{color:"red"}}>Wrong format</span>}
                        </div>
                        <input 
                            className = {errors.name? "error middle" : "middle" }
                            type="text" 
                            placeholder="Alexel Ward" 
                            {...register("name", {required : true, maxLength: 20, pattern: /^[A-Za-z]+$/i})} />
                      </div>

                      <div className="group-form">
                        <div className="flex msg-label justify-content-between">
                          <label 
                            className= {errors.name? "error label" :"label"}>Email Adress</label>
                          {errors.email && <span className="label" style={{color:"red"}}>Wrong format</span>}
                        </div>
                        <input 
                          className={errors.email? "error middle" : "middle" }
                          type="email" 
                          placeholder="alexei@gmail.com" 
                          {...register("email", { required: true,pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                      </div>

                      <div className="group-form">
                        <div className="flex msg-label justify-content-between">
                          <label 
                            className= {errors.phoneNumber? "error label" :"label"}>Phone Number</label>
                            {errors.phoneNumber && <span className="label" style={{color:"red"}}>Wrong format</span>}
                        </div>
                        <input 
                          className= {errors.phoneNumber? "error middle" : "middle" }
                          type="tel" 
                          {...register("phoneNumber", { required: true })}
                          placeholder="+1(202) 555-0123" />
                      </div>


                    </div>
                  </div>
                
                  <div className="box box-belling-details">
                    <h3 className="p heading-checkout">Shipping info</h3>
                    <div className="information billing-details flex justify-content-between">
                      <div className="group-form">
                        <div className="flex msg-label justify-content-between">
                          <label 
                            className= {errors.Address? "error label" :"label"}>Address</label>
                            {errors.Address && <span className="label" style={{color:"red"}}>Wrong format</span>}
                        </div>
                        <input 
                          className= {errors.Address? "error full" : "full" }
                          type="text" 
                          {...register("Address", { required: true })}
                          placeholder="1137 Williams Avenue" />
                      </div>
                      <div className="group-form">
                        <div className="flex msg-label justify-content-between">
                          <label 
                            className= {errors.zip? "error label" :"label"}>Zip code</label>
                            {errors.zip && <span className="label" style={{color:"red"}}>Wrong format</span>}
                        </div>
                        <input 
                          className= {errors.zip? "error middle" : "middle" } 
                          type="text"
                          {...register("zip", { required: true,pattern:/^(\d{5})$/ })} 
                          placeholder="10001" />
                      </div>
                      <div className="group-form">
                        <div className="flex msg-label justify-content-between">
                          <label 
                            className= {errors.city? "error label" :"label"}>City</label>
                            {errors.city && <span className="label" style={{color:"red"}}>Wrong format</span>}
                        </div>
                        <input 
                          className= {errors.city? "error middle" : "middle" }  
                          type="text" 
                          {...register("city", { required: true,pattern:/[a-z-A-Z]{2}$/ })} 
                          placeholder="New York" />
                      </div>
                      <div className="group-form">
                        <div className="flex msg-label justify-content-between">
                          <label 
                            className= {errors.country? "error label" :"label"}>country</label>
                            {errors.country && <span className="label" style={{color:"red"}}>Wrong format</span>}
                        </div>
                        
                        <input 
                          className= {errors.country? "error middle" : "middle" } 
                          type="text" 
                          {...register("country", { required: true,pattern:/[a-z-A-Z]{2}$/ })} 
                          placeholder="United States" />
                      </div>
                    </div>
                  </div>


                  <div className="box box-belling-details">
                    <h3 className="p heading-checkout">Payment details</h3>
                    <div className="information billing-details flex justify-content-between">
                      <div className="group-form">
                        <label className="label" >Payement methode</label>
                      </div>
                      <div className="group-form">
                        <div className="check-box active flex e-money" onClick = {paymentMethode} >
                          <label className="radio p e-money" >e-money</label>
                          <input className="middle e-money checked" name="payment" type="radio" />
                        </div>
                        <div className="check-box flex on-delivery" onClick = {paymentMethode}>
                          <label className="radio p on-delivery" >cash on delivery</label>
                          <input className="middle on-delivery " name="payment" type="radio"  disabled="true" />
                        </div>
                      </div>
                    </div>

                    {choosePaymentMethode ? <CashOnDelivery/> : <RenderEmoney/>}

                    

                    


                  </div>

                </div>


                  <div className="box-element">
                    <div className="box-summary">
                      <h2 className="cart-title">Summary</h2>
                      <div className="box-products-quantity ">
                        {cartProduct.map((elem,index)=>{
                          return(
                            <div key = {index} className="box-product flex justify-content-between">
                              <div className="box-product-description flex">
                                <div className="product-box-img">
                                  <img src={`/Audiophile/${elem.image.desktop}`} alt={elem.name} />
                                </div>
                                <div className="product-description">
                                  <h3 className="p title">{formatName(elem.name)}</h3>
                                  <p className="p price">$ {formatPrice(elem.price)}</p>
                                </div>
                              </div>
                              <p className="quantity">x{elem.quantity}</p>
                            </div>
                          )
                        })}
                      </div>
                      <div className="total-price-box">
                        <div className="total flex justify-content-between">
                          <h3 className="p title">Total</h3>
                          <p className="p price">$ {formatPrice(countPrice(cartProduct))}</p>
                        </div>
                        <div className="total flex justify-content-between">
                          <h3 className="p title">Shipping</h3>
                          <p className="p price">$ 50</p>
                        </div>
                        <div className="total flex justify-content-between">
                          <h3 className="p title">VAT(included)</h3>
                          <p className="p price">$ {formatPrice(countPrice(cartProduct)*20/100)}</p>
                        </div>
                        <div className="total flex justify-content-between">
                          <h3 className="p title">Grand total</h3>
                          <p className="p price grand-total">$ {formatPrice(countPrice(cartProduct)+50+countPrice(cartProduct)*20/100)}</p>
                        </div>

                      </div>
                    <input type="submit" className="btn pay" value = "Continue &amp; pay" />
                  </div>
                </div>
              
                
              </div>
              
              
            </form>
          }

          </div>
        </div>


      </div>
  
    </>
  )
}

export default Checkout;