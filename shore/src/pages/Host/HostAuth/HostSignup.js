// Signup.js

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
            const response = await fetch('http://localhost:5009/signupHost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });

            const data = await response.json();

            if (data.success) {
                setError(null);
                 navigate('/hostDashboard'); // Redirect to the host's dashboard or any desired route
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Error connecting to the server');
        }
    };

    return (
        <div>
            <h2>Create a Host Account</h2>
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
            <p>Already have an account? <a href="/loginHost">Login here</a></p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;
