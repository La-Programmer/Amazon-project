import React, { useState } from 'react'
import './Home.css'
import Product from './Product'
import { randomInt } from 'mathjs'
import { useTransition, animated } from 'react-spring'

function Home() {

  const [index, setIndex] = useState(0);

  const images = ['https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg', 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhZGdldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60']

  const transition = useTransition(index, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    delay: 2000,
    config: {duration: 2000},
    onRest: (a, b, item) => {
      if (item === index) {
        setIndex(ind => (ind + 1) % images.length)
      }}
  });



  return (
    <div className='home'>
        <div className='home__container'>
        {/* {transition((style,index) =>(
          <animated.div style = {{...style,
            width: '80%',
            zIndex: '-1',
            marginBottom: '-150px',
            position: 'absolute',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
          }}> 
            <img src={images[index]} alt=''/>
          </animated.div> 
        ))} */}

          <img src={images[1]} alt='' className='home__image'/>

          <div className='home__row'>
            <Product id={randomInt(0, 1)}
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
            <Product id={randomInt(2, 4)}
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
          </div>
    

          <div className='home__row'>
          <Product id={randomInt(5, 8)}
            title="Samsung Smart watch"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
            <Product id={randomInt(9, 11)}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
            <Product id={randomInt(12, 14)}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
          </div>

          <div className='home__row'>
            <Product id={randomInt(15, 18)}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
          </div>
        </div>
    </div>
  )
}

export default Home