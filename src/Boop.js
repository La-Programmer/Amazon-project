import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'

const Boop = ({ style, scale = 1, timing = 500, children}) => {
    //use a state to track the trigger state
    const [isBooped, setIsBooped] = useState(false);

    //define the style
    const styles = useSpring({ 
        ...style,
        transform: isBooped 
        ? `scale(${scale})` 
        : `scale(1)`,
        boxShadow: isBooped
        ? '5px 5px 8px rgba(50, 50, 80, 0.5)'
        : '0px 0px 0px rgba(0, 0, 0, 0.5)',
        config: {
            tension: 100,
            friction: 10
        }
    })


    const trigger = () => {
        setIsBooped(true);
    }

    const safety = () => {
        setIsBooped(false);
    };

    return(
        <animated.span onMouseEnter={trigger} onMouseLeave={safety} style={styles}>
            {children}
        </animated.span>
    )

}

export default Boop