// import React, { useState } from 'react';
// import auth from '../../firebase.init';
// import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import '../styles/signup.css'; // Import your CSS file

// const CreateUser = () => {
//     const [username, setUserName] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth);

//     const handleSubmit = e => {
//         e.preventDefault();
//         console.log(username, name, email, password);
//         createUserWithEmailAndPassword(email, password);
        
//     }

//     return (
//         <div className='signup-container'>
//             <div className='form-container'>
//                 <h2>Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className='input-field'>
//                         <input 
//                             type='text'
//                             placeholder='@username'
//                             onChange={(e) => setUserName(e.target.value)}
//                         />
//                     </div>
//                     <div className='input-field'>
//                         <input 
//                             type='text'
//                             placeholder='Enter Full Name'
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className='input-field'>
//                         <input 
//                             type='email'
//                             placeholder='Email Address'
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className='input-field'>
//                         <input 
//                             type='password'
//                             placeholder='Password'
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type='submit' className='btn'>Sign Up</button>
//                 </form>
//                 <div className='no-account'>
//                     Already have an account? <Link to='/login' className='link'>Login</Link>
//                 </div>
//             </div>
//         </div>
//     );

// }

// export default CreateUser;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate(); // Use the correct hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5011/usersignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });

            const data = await response.json();

            if (data.success) {
                setError(null);
                 navigate('/dashboard'); // Redirect to the host's dashboard or any desired route
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Error connecting to the server');
        }
    };

    return (
        <div>
            <h2>Create a User Account</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;
