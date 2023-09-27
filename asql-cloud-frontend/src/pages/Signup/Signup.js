import React, { useState } from 'react';
import './Signup.css'

import { Container, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const handleSignup = async (e) => {
        e.preventDefault();

        // Check if the passwords match
        if (password !== confirmPassword) {
            setPasswordMatchError('Passwords do not match');
            return;
        }

        // Prepare registration data
        const registrationData = {
            name,
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:5000/signup', registrationData);
            if (response.status === 200) {
                setSuccessMessage(response.data.message);
            } else {
                // Display the error message from the backend (e.g., email already registered)
                setSuccessMessage(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
        // Reset the form fields and password match error
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPasswordMatchError('');
    };

    return (
        <div className='Signup'>
            <Container maxWidth="xs"
                sx={{
                    backgroundColor: 'white',
                    paddingRight: '3%',
                    paddingLeft: '3%',
                    paddingTop: '5%',
                    paddingBottom: '5%'
                }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Signup to a new AgensSQL account
                </Typography>
                {successMessage && <Typography variant="h6" align="center">{successMessage}</Typography>}
                <form onSubmit={handleSignup}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="New Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm New Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={passwordMatchError !== ''}
                        helperText={passwordMatchError}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                    >
                        Signup
                    </Button>
                </form>
                <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
                    Already have an account? <Link href="/login">Login</Link>
                </Typography>
            </Container>
        </div>
    );
};

export default Signup;