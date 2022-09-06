import "./CheckoutProduct.css"
import React from 'react';
import { useStateValue } from './StateProvider';


// eslint-disable-next-line no-undef
export default function CheckoutProduct({ id, image, title, price, rating, flippedProps})  {

    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className='checkoutProduct' {...flippedProps}>
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>
                    <strong>{title}</strong>
                </p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill(<p>&#11088;</p>)}
                </div>
                <button onClick={removeFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}
