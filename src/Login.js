import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';

function Login() {

    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const [email, setEmail] = useState('');

    // eslint-disable-next-line no-unused-vars
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/');
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created a new user with email and password
            if (auth) {
                navigate('/');
            }
        })
        .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <div>
                <Link to='/'>
                    <img className="login__logo" alt='amazon logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
                </Link>
            </div>
                <div className='login__container'>
                    <h1 className='login__title'>
                        Sign in
                    </h1>
                    <form>

                            <h5>E-mail</h5>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                            <h5>Password</h5>
                            <input type='password' name='password' value= { password } className='login__password' onChange={e => 
                                setPassword(e.target.value)
                            }/>

                        <button onClick={signIn}>
                            Sign in
                        </button>

                    </form>

                    <p>
                        By signing in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
                    </p>

                    <button className='login__registerButton' onClick={register}>
                        Create your Amazon account
                    </button>
                </div>
        </div>
    )
}

export default Login