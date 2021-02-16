import React from 'react'
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'

const SubTotal = () => {
    const [{ basket }, disPatch] = useStateValue();
    const getBasketTotal = (basket) => 
        basket?.reduce((amount, item) => item.price + amount, 0);
      
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong> {value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'/> This order contain a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />    
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default SubTotal
