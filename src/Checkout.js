import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import { Flipped, Flipper} from 'react-flip-toolkit';

function Checkout() {

    // eslint-disable-next-line no-unused-vars
    const [{basket, user}, dispatch] = useStateValue();

    console.log(basket.length);

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>

                <Flipper flipKey={basket} spring='gentle'>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                        {basket.map((item) => (
                            <Flipped key={item.id} flipId='item'>
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

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout