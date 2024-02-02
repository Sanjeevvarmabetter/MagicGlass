// Login.js
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Import your CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false); // Track if form is submitted
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true); // Set form submitted to true
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='main'>
            <div className='card-container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='email' 
                        className='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type='password' 
                        className='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className='btn'>Login</button>
                </form>
            </div>
            {submitted && ( // Render card with username and password if form is submitted
                <div className='card'>
                    <h3>Entered Details:</h3>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Password:</strong> {password}</p>
                </div>
            )}
            {error && <div className='error-message'>{error.message}</div>}

            <div className='no-account'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;
