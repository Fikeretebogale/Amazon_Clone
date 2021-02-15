import React from 'react'
import './Checkout.css'
import SubTotal from'./SubTotal'

const Checkout = () => {
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <h3>Hello</h3>
          <h2 className="checkout__title">Your shopping cart</h2>
        </div>
        <div className="checkout__right">
          {/* <h1>SubTotal</h1> */}
          <SubTotal />
        </div>
      </div>
    );
}

export default Checkout
