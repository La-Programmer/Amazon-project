import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"
import Boop from './Boop'

function Product({id, title, image, price, rating}) {

    // eslint-disable-next-line no-unused-vars
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    };

    const style = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: '20px',
            padding: '20px',
            width: '100%',
            maxHeight: '400px',
            backgroundColor: 'white', 
            zIndex: '1'
    }

    return (
        <Boop style={style} scale={1.025} timing={500}>
            <div style={style}className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
 
                <div className="product__rating">
                    {Array(rating).fill(<span>&#11088;</span>)}
                </div>
            </div>

            <img src={image} alt=''/>

            <button onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
        </Boop>
    )
}

export default Product