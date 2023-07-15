import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFirstnameChange = (e) => {
        setFirstname(e.target.value);
    };

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            const response = await fetch("http://localhost:4999/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstname,
                    lastname,
                }),
            });

            if (response.ok) {
                // Sign up successful, perform necessary actions (e.g., redirect)
                console.log("Sign up successful");
            } else {
                // Sign up failed, handle the error (e.g., display error message)
                console.log("Sign up failed");
            }
        } catch (error) {
            // Handle any network or server errors
            console.log("Error:", error);
        }
    };



    const handleSwitchToLogin = () => {
        navigate("/login");
        console.log("Switch to login page");
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstname} onChange={handleFirstnameChange} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastname} onChange={handleLastnameChange} />
            </div>
            <button onClick={handleSignUp}>Sign Up</button>
            <div className="button-container">
                <label>Existing user?</label>
                <button onClick={handleSwitchToLogin}>Login</button>
            </div>
        </div>
    );
};

export default SignUpPage;
