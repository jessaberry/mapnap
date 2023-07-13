import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Sign up:", email, password);
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
      <button onClick={handleSignUp}>Sign Up</button>
      <div className="button-container">
        <label>Existing user?</label>
        <button onClick={handleSwitchToLogin}>Login</button>
      </div>
    </div>
  );
};

export default SignUpPage;
