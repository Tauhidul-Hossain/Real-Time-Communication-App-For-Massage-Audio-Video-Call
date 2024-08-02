import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
// import "./styles.css";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/api/auth/register", {
        firstName,
        email,
        password,
      });
      console.log(response.data); // Handle registration
    } catch (error) {
      console.error("Error during sign up", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUp;
