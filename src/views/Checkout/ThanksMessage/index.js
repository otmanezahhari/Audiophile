import {  formatName, formatPrice, countPrice} from "components/Healpers";
import {Link} from "react-router-dom";


 function MessageThanks({cartProduct}){
  const removeHidden = () =>{
    document.querySelector("body").classList = "";
  }
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
                  <img src={`/Audiophile/${cartProduct[0].image.desktop}`} alt={cartProduct[0].name} />
                </div>
                <div className="description">
                  <h3 className="title">{formatName(cartProduct[0].name)}</h3>
                  <p className="price p">$ {formatPrice(cartProduct[0].price)}</p>
                </div>
              </div>
              <p className="p quantity">x{cartProduct[0].count}</p>
             
            </div>

            <div className="box-item-quantity">
              <p className="label">and {cartProduct.length} other item(s)</p>
            </div>

          </div>
          <div className="box-total-price">
            <p className="label">Grand total</p>
            <p className="p cart-title">$ {formatPrice(countPrice(cartProduct)+50+countPrice(cartProduct)*20/100)}</p>
          </div>

          <Link className = "btn back-to-home" to = "/Audiophile" onClick={removeHidden}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MessageThanks;