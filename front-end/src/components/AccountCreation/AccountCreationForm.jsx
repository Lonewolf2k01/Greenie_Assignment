import React, { useState } from 'react';
import "./acc.css";
import axios from "axios"

const AccountCreationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();

        // const formData = new FormData();
        // formData.append('username', username);
        // formData.append('email', email);
        // formData.append('password', password);
        // formData.append('phoneNo', phoneNo);

        axios.post("http://localhost:5001/user/createUser", { username, email, password, phoneNo },
            {
                headers: {
                    "Content-type": "application/json"
                }
            }
        ).then((data) => console.log(data));

    };

    return (
        <div className="account-creation-form">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNo"
                        name="phoneNo"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default AccountCreationForm;
