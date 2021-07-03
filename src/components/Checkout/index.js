import {Navbar, Footer, formatName, formatPrice, countPrice} from "../Healpers";
import {useState} from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import "./checkout.scss";

function Checkout(props){

  const { register, handleSubmit,watch, formState: { errors } } = useForm();

  const [displayMessage,SetDisplayThanks] = useState(false);


  // const countPrice = () =>{
  //   let sum = 0;
  //   if(props.cartProduct ){
  //     props.cartProduct.map(elem=>{
  //       sum+= elem.product.price * elem.count;
  //     });
  
  //     return sum
  //   }
  //    return '';
   
  // }
  
  const onSubmit = () =>{
    SetDisplayThanks(true);
    document.querySelector("body").classList.toggle("hidden");
  } 

  const removeHidden = () =>{
    document.querySelector("body").classList = "";
  }

  const paymentMethode = (ev) =>{
    
    if(ev.target.classList.value.includes('on-delivery')){
      document.querySelector(".check-box.on-delivery").classList.add("active") ;
      document.querySelector(".check-box.e-money").classList.remove("active");
      document.querySelector("input.on-delivery").classList.add("checked");
      document.querySelector("input.e-money").classList.remove("checked");
      document.querySelector("input.on-delivery").removeAttribute("disabled");
      document.querySelector("input.e-money").setAttribute("disabled","disabled")
      document.querySelector(".e-money-information").classList.remove("display");
      document.querySelector(".cash-on-delivery").classList.add("display");
    }
    else if(ev.target.classList.value.includes('e-money')){
      document.querySelector(".check-box.e-money").classList.add("active");
      document.querySelector(".check-box.on-delivery").classList.remove("active");
      document.querySelector("input.e-money").classList.add("checked");
      document.querySelector("input.on-delivery").classList.remove("checked");
      document.querySelector("input.e-money").removeAttribute("disabled");
      document.querySelector("input.on-delivery").setAttribute("disabled","disabled")
      document.querySelector(".cash-on-delivery").classList.remove("display");
      document.querySelector(".e-money-information").classList.add("display");
    }
  }

  const MessageThanks = () =>{
    return(
      <div className="thanksmessage visible">
        <div className="message-content">
          <div className="box-confirmed-commande">
            <img src="" alt="" />
          </div>

          <div className="box-description">
            <h2 className="message-thank">Thank you for your order</h2>
            <p className="description p ">You will recive an email confirmation shortly.</p>
          </div>

          <div className="box-product-checkout flex">
            <div className="box-product-information">
            <div className="product-box flex justify-content-between">
                <div className="box-img-title flex">
                  <div className="box-img">
                    <img src={`/Audiophile/${props.cartProduct[0].product.image.desktop}`} alt={props.cartProduct[0].name} />
                  </div>
                  <div className="description">
                    <h3 className="title">{formatName(props.cartProduct[0].product.name)}</h3>
                    <p className="price p">$ {formatPrice(props.cartProduct[0].product.price)}</p>
                  </div>
                </div>
                <p className="p quantity">x{props.cartProduct[0].count}</p>
               
              </div>

              <div className="box-item-quantity">
                <p className="label">and {props.cartProduct.length} other item(s)</p>
              </div>

            </div>
            <div className="box-total-price">
              <p className="label">Grand total</p>
              <p className="p cart-title">$ {formatPrice(countPrice(props.cartProduct)+50)}</p>
            </div>

            <Link className = "btn back-to-home" to = "/Audiophile" onClick={removeHidden}>
              Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }


  // document.querySelector("body").classList = "";
  return(
    <>
      {displayMessage ? <MessageThanks />: ''}
      
      <div id="checkout">
        
        <Navbar updateQuantityCategory={props.updateQuantityCategory} removeAll={props.removeAll} productQuantity={props.productQuantity} cartProduct={props.cartProduct} Category = {props.Category}/>


        <div className="container">
          <div className="go-back">
            <Link to="/" className="back">Go back</Link>
          </div>
          <div className="flex justify-content-between">
          {props.cartProduct.length === 0 ? <p className="empty-cart">Your Cart is Currently Empty !!</p> :             <form onSubmit={handleSubmit(onSubmit)}>
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

                    <div className="cash-on-delivery information flex justify-content-between center">
                      <div className="box-img-on-delivery">
                        <img src="/Audiophile/assets/shared/cash.png" alt="" />
                      </div>
                      <div className="description-on-delivery">
                        <p className="p">
                          The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>


                  <div className="box-element">
                    <div className="box-summary">
                      <h2 className="cart-title">Summary</h2>
                      <div className="box-products-quantity ">
                        {props.cartProduct.map((elem,index)=>{
                          return(
                            <div key = {index} className="box-product flex justify-content-between">
                              <div className="box-product-description flex">
                                <div className="product-box-img">
                                  <img src={`/Audiophile/${elem.product.image.desktop}`} alt={elem.product.name} />
                                </div>
                                <div className="product-description">
                                  <h3 className="p title">{formatName(elem.product.name)}</h3>
                                  <p className="p price">$ {formatPrice(elem.product.price)}</p>
                                </div>
                              </div>
                              <p className="quantity">x{elem.count}</p>
                            </div>
                          )
                        })}
                      </div>
                      <div className="total-price-box">
                        <div className="total flex justify-content-between">
                          <h3 className="p title">Total</h3>
                          <p className="p price">$ {formatPrice(countPrice(props.cartProduct))}</p>
                        </div>
                        <div className="total flex justify-content-between">
                          <h3 className="p title">Shipping</h3>
                          <p className="p price">$ 50</p>
                        </div>
                        <div className="total flex justify-content-between">
                          <h3 className="p title">VAT(included)</h3>
                          <p className="p price">$ 1,079</p>
                        </div>
                        <div className="total flex justify-content-between">
                          <h3 className="p title">Grand total</h3>
                          <p className="p price grand-total">$ {formatPrice(countPrice(props.cartProduct)+50)}</p>
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

        <Footer Category = {props.Category}/> 
      </div>
  
    </>
  )
}

export default Checkout;