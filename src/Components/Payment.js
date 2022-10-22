
import React, { useState, useEffect } from 'react'
import '../Css/Payment.css'
import { useStateValue } from '../Redux/StateProvider'
import CheakOutProduct from './CheakOutProduct';
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Redux/reducer';
import axios from '../axios';






function Payment() {
    // const express = require('express');

    // const app = express();
    // app.use(function (request, response,) {
    //     response.header('Access-Control-Allow-Origin: * ');
    //     response.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    //     response.header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
    // })

   
  


    const navigate = useNavigate();

    const [{ basket, user }, dispatch] = useStateValue();

    const [succeeded, setSucceeded] = useState(false);
    const [proccessing, setProccessing] = useState('')

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [clientSecret, setClientSecrets] = useState(true);
    const [disabled, setDisable] = useState(true)

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method:'get',
                url: `/payment/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecrets(response.data.clientSecret)
        }; 
        getClientSecret();
    }, [basket]);

    console.log('THE CLIENT SECRET >>>>>>', clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProccessing(true);

    

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_Method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null)
            setProccessing(false)

            navigate.raplce('/orders')
        })
    }

    const handleChange = event => {
        setDisable(event.empty);
        setError(event.error ? event.error.message : '');
    }

    return (
        <div className='payment'>
            <div className='payment_container'>

                <h1>
                    Cheakout {<Link to='/cheak'> {basket.length} items</Link>}
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='Payment_address'>
                        <p>{user?.email}</p>
                        <p>2nd Floor, Adhiraj Nakshatra</p>
                        <p>Chakan , pune 410501</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review item and Delivery</h3>
                    </div>
                    <div className='Payment_item'>
                        {basket.map(item => (
                            <CheakOutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/* strip magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='price_con'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Ordar Total: &#8377;{value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={proccessing || disabled || succeeded}>
                                    <span> {proccessing ? <p>Proccessing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment