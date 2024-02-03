import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';

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
        <div className='signup-container' >
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input type='text'
                        className='display-name'
                        placeholder='@username'
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <input type='text'
                        className='display-make'
                        placeholder='Enter FullName'
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input type='email'
                        className='email'
                        placeholder='Email Address'
                        onChange={(e) => setEmail(e.target.value)} />

                    <input type='password'
                        className='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className='btn-login'>
                        <button type='submit' className='btn'>Sign up</button>
                    </div>
                </form>
                <div>
                    Already have an account?
                    <Link
                        to='/login'>login</Link>
                </div>
            </div>
        </div>
    );

}

export default CreateUser;