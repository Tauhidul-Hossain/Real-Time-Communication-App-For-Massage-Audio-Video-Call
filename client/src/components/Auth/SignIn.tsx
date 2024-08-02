import React, { useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import {
  ChromeReaderMode as GoogleIcon,
  Facebook as FacebookIcon,
  Apple as AppleIcon,
} from "@material-ui/icons";
import axios from "axios";
// import "./styles.css";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log(response.data); // Handle authentication
    } catch (error) {
      console.error("Error during sign in", error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <Button startIcon={<GoogleIcon />}>Continue with Google</Button>
        <Button startIcon={<FacebookIcon />}>Continue with Facebook</Button>
        <Button startIcon={<AppleIcon />}>Continue with Apple</Button>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name="rememberMe" />}
          label="Remember Me"
        />
        <Button onClick={handleSignIn}>Sign In</Button>
      </div>
    </div>
  );
};

export default SignIn;
