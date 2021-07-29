

function CashOnDelivery(){
  return(
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
  )
}

export default CashOnDelivery;