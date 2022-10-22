import React from 'react'
import '../Css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Redux/StateProvider';
import { getBasketTotal } from '../Redux/reducer';
import {useNavigate} from 'react-router-dom'

function Subtotal() {
    const navigate = useNavigate();
    const [{basket}] = useStateValue();
    

    return (<>

        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>&#8377;{value}</strong>
                        </p>
                        <small className='subtotal_gift' >
                            <input type="checkbox" /> this order contains a gift
                        </small>
                    </>
                )}
                decimalScale  = {2}
                value = {getBasketTotal(basket)}
                displayType = {'text'}
                thousandSeparator = {true}
                prefix = {''}
             />
             <button onClick={e => navigate('/payment')}>Procced to cheak Out</button>
        </div>
        </>
    )
}

export default Subtotal