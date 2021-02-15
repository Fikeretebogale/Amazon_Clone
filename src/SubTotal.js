import React from 'react'
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format'

const SubTotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'/> This order contain a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                // value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />    
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default SubTotal
