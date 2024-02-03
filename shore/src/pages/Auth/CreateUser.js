import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import '../styles/signup.css'; // Import your CSS file

const CreateUser = () => {
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, name, email, password);
        createUserWithEmailAndPassword(email, password);
        
    }

    return (
        <div className='signup-container'>
            <div className='form-container'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <input 
                            type='text'
                            placeholder='@username'
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text'
                            placeholder='Enter Full Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='input-field'>
                        <input 
                            type='email'
                            placeholder='Email Address'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='input-field'>
                        <input 
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn'>Sign Up</button>
                </form>
                <div className='no-account'>
                    Already have an account? <Link to='/login' className='link'>Login</Link>
                </div>
            </div>
        </div>
    );

}

export default CreateUser;
