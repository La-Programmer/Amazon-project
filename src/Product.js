import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"
import Boop from './Boop'
import { useMediaQuery } from '@mui/material';

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

    const style = {};

    const st = {};

    const st1 = {
        margin: '2rem 13%',
        width: '70%',
        maxHeight: 'auto',
    }

    const style1 = {
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

    const style2 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        width: '79%',
        maxHeight: '400px',
        backgroundColor: 'white', 
        zIndex: '1'
}

    const matches = useMediaQuery( '(max-width: 768px)')

    if (matches === true) {
        for (const item in style2) {
            style[item] = style2[item];
        }
        for (const item in st1) {
            st[item] = st1[item];
        }

    } else {
        for (const item in style1) {
            style[item] = style1[item];
            st[item] = style1[item];
        }
    }

    console.log(matches)

    return (
        <Boop style={st} scale={1.025} timing={500}>
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