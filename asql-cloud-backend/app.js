const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const PORT = process.env.PORT || 5000;
const app = express();


app.use(bodyParser.json());
app.use(cors());


const registeredUsers = [{
    name: 'Admin',
    email: 'admin@mail.com',
    password: '123'
}]
// Define your routes here

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email === registeredUsers[0].email) {
            console.log("Email exists")
        }
        else {
            return res.status(401).json({ message: 'Invalid email' });
        }
        if (password === registeredUsers[0].password) {
            console.log("Password exists")
        }
        else {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ username: registeredUsers[0].email }, 'your_secret_key');
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' })
    }

})

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log(name)
    console.log(email)
    console.log(password)
    //     const isEmailRegistered = registeredUsers.some((user) => user.email === email);

    //     if (isEmailRegistered) {
    //         return res.status(400).json({ message: 'Email is already registered' });
    //     }

    // For demo purposes, store the user in the registeredUsers array (replace with database logic)
    registeredUsers.push({ name, email, password });

    // Respond with a success message
    res.json({ message: 'Registration successful' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});