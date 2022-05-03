import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";
import '../css/LoginCSS.scss';
import SmartHikeHeaderBar from "./SmartHikeHeaderBar";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState();
  const { login, googleSignIn } = useUserAuth() || {};
  const navigate = useNavigate();
  var sha256 = require('js-sha256').sha256;

  const settingError = () => {
    setErr("Incorrect Login credentials");
  }

  const validateLoginDetails = (loginDetails) => {
    if (loginDetails.email.length == 0 || loginDetails.password.length == 0) {
      return false;
    }
    return true;
  }

  const handleLogin = async (e) =>{
    e.preventDefault();
    const loginFormData = { email: email, password: password };
    setErr("");
    if (!validateLoginDetails(loginFormData)) {
      setErr("Please enter a valid email/password");
    } 
    else {
      try {
        await login(email, password);
        navigate("/")
      } 
      catch (err) {
        settingError();
      }
    }
  }

  const handleGoogleSignIn = async (e) =>{
    e.preventDefault();
    setErr("");
    try {
        await googleSignIn();
        navigate("/")
    } 
    catch (err) {
        setErr(err.message)
    }
  }

  return (
    <>
      <div>
        <SmartHikeHeaderBar />
            <Container>
                <Paper elevation={2} className='login-paper' >
                    <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <h2>Login</h2>
                    </Typography>
                    <form className='login-form' noValidate autoComplete='off'>
                        <TextField type='email' label='Email' variant='outlined' fullWidth value={email}
                            onChange={(e) => setEmail(e.target.value)} className="small-margin-below" />
                        <TextField label='Password' type='password' variant='outlined' fullWidth value={password}
                            onChange={(e) => setPassword(e.target.value)} className="small-margin-below" />
                        <Button variant="outlined" onClick={handleLogin} className="small-margin-below">Login</Button>
                        <Button variant="outlined" onClick={() => navigate("/signup")} className="small-margin-below">Register</Button>
                        <br></br>
                        <Link to="/forgotPassword">Forgot Password</Link>
                        <br></br>
                        <br></br>
                        <GoogleButton data-testid="google-login-button" onClick={handleGoogleSignIn}/>
                    </form>
                    {err}
                </Paper>
            </Container>
        </div>      
    </>
  );
};

export default Login;