import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    navigate("/dashboard");
    console.log("Login:", email, password);
  };

  const handleSwitchToSignUp = () => {
    navigate("/signup");
    console.log("Switch to sign up pages");
  };

  return (
    <div className="container">
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
      <div className="button-container">
        <label>New user?</label>
        <button onClick={handleSwitchToSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
