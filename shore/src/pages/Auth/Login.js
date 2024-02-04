// // Login.js
// import React, { useState } from 'react';
// import auth from '../../firebase.init';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import '../styles/login.css'; // Import your CSS file for styling

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [submitted, setSubmitted] = useState(false); // Track if form is submitted
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);

//     const handleSubmit = e => {
//         e.preventDefault();
//         setSubmitted(true); // Set form submitted to true
//         signInWithEmailAndPassword(email, password);
//     }

//     return (
//         <div className='main'>
//             <div className='loginpage'>
//                 <div className='card-container'>
//                     <h2>Login</h2>
//                     <form className='form' onSubmit={handleSubmit}>
//                         <input
//                             type='email'
//                             className='email'
//                             placeholder='Email Address'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <input
//                             type='password'
//                             className='password'
//                             placeholder='Password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <button type='submit' className='btn'>Login</button>
//                     </form>
//                 </div>
//                 {error && <div className='error-message'>{error.message}</div>}

//                 <div className='no-account'>
//                     Don't have an account? <Link to='/signup'>Sign Up</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); // Use the correct hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5011/userlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <br/>
      <br/>
      <br/>
      <a href='/'>Home</a>
    </div>
  );
};

export default Login;

