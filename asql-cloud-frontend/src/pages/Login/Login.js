import React, { useState } from 'react';
import './Login.css'

import { Container, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';

const Login = () => {
    // Function to handle login submission
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token); // Store the token in localStorage

            // Redirect to the landing page
            window.location.href = '/landing'; // Replace with your landing page route
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className='Login'>
            <p>{error}</p>
            <Container maxWidth="xs"
                sx={{
                    backgroundColor: 'white',
                    paddingRight: '3%',
                    paddingLeft: '3%',
                    paddingTop: '5%',
                    paddingBottom: '5%'
                }}>
                <Typography variant="h6" align="center" gutterBottom>
                    Login to your AgensSQL account
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                    >
                        Login
                    </Button>
                </form>
                <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
                    New to AgensSQL?{' '}
                    <Link href="/signup">Sign up here</Link>
                </Typography>
            </Container>
        </div>
    );
};

export default Login;