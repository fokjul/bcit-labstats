import React from 'react';
import './CartPageSubTotal.scss'

const CartPageSubTotal = ({offeringsInCart, subtotal}) => {

  return (
    <div className='cartPage__offerings-subtotal'>
      <p className="heading5">{`${offeringsInCart.length} ${offeringsInCart.length > 1 ? "courses" : "course"}`}</p>
      <div className='cartPage__offerings-subtotal-amount'>
        <p className="heading5">Sub-total</p>
        <h5>{subtotal ? `$${subtotal}` : ''}</h5>
      </div>
    </div>
  )
}

export default CartPageSubTotal

