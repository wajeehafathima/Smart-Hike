import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";
import SmartHikeHeaderBar from "./SmartHikeHeaderBar";

const ForgotPassword = () => {
    const [email, setEmail] = useState();
    const [err, setErr] = useState();
    const { resetPassword } = useUserAuth();
    const [message, setMessage] = useState('');
    const handleLogin = async (e) =>{
      e.preventDefault();
      setErr("");
      try {
          await resetPassword(email);
          setMessage('Check your inbox for further instructions');
      } catch (err) {
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
                        <h2>Forgot Password?</h2>
                    </Typography>
                    <form className='login-form' noValidate autoComplete='off'>
                      {err}
                      <TextField type='email' label='Email' variant='outlined' fullWidth value={email}
                            onChange={(e) => setEmail(e.target.value)} className="small-margin-below" />
                      <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit" onSubmit={handleLogin}>
                          Reset Password
                        </Button>
                      </div>
                      <br />
                      <div className="p-4 box mt-3 text-center">
                        <Link to="/login">Login</Link>
                      </div>
                      <br />
                      <div className="p-4 box mt-3 text-center">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                      </div>
                    </form>
                    {err}
                </Paper>
            </Container>
        </div>      
    </>
  );
};

export default ForgotPassword;