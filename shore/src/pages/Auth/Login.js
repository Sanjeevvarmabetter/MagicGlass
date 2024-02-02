import React, { useState } from 'react';
import auth from '../../firebase.init';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [errorMessage,setError] = useState('');
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
        console.log(user);
    }

    if (error){
        console.log(error.message)
    }

    if (loading){
        console.log("loading....")
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='main'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input type='email' 
                    className='email'
                    placeholder='Email Address'
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' 
                    className='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}/>
                    <div className='btn-login'>
                        <button type='submit' className='btn'>Login</button>
                    </div>
                </form>
            </div>
            <hr></hr>
            <div>
                    Don't have an account?
                    <Link
                    to='/signup'>signup</Link>
                </div>
        </div>
    );
}

export default Login;