import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Flipper, Flipped } from 'react-flip-toolkit'

function Payment() {
    // eslint-disable-next-line no-unused-vars
    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout({basket?.length} items)
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>

                <div className="payment__address">
                    <p>{user?.email}</p>
                    {/* ASK FOR USER ADDRESS IN THE FORM AND RENDER IT HERE */}
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>

            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                </div>

                <Flipper flipKey={basket} className="payment__items">
                    {basket.map(item => (
                        <Flipped key={item.id} flipId={item.id}>
                        { flippedProps => <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        key={item.title}
                        flippedProps={flippedProps}
                    />}
                    </Flipped>
                    ))}
                </Flipper>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>

                <div className="payment__details"></div>
            </div>


        </div>
    </div>
  )
}

export default Payment