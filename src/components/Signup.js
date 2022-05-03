import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useUserAuth } from "../context/UserAuthContext";
import SmartHikeHeaderBar from "./SmartHikeHeaderBar";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [err, setErr] = useState();
  const { signup } = useUserAuth() || {};
  const navigate = useNavigate();

  const handleSignup = async (e) =>{
    e.preventDefault();
    setErr("");
    try {
      await signup(email, password);
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
                Sign Up!
              </Typography>
              {err}
              <form className='login-form' noValidate autoComplete='off'>
                <TextField type='email' label='Email' variant='outlined' fullWidth value={email}
                  onChange={(e) => setEmail(e.target.value)} className="small-margin-below" />
                <TextField label='First Name' variant='outlined' fullWidth value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} className="small-margin-below" />
                <TextField label='Last Name' variant='outlined' fullWidth value={lastName}
                  onChange={(e) => setLastName(e.target.value)} className="small-margin-below" />
                <TextField label='Password' type='password' variant='outlined' fullWidth value={password}
                  onChange={(e) => setPassword(e.target.value)} className="small-margin-below" />
                <TextField label='Contact Number' variant='outlined' fullWidth value={number}
                            onChange={(e) => setNumber(e.target.value)} className="small-margin-below" />
                <TextField label='Country' variant='outlined' fullWidth value={country}
                  onChange={(e) => setCountry(e.target.value)} className="small-margin-below" />
                <TextField label='Zip Code' variant='outlined' fullWidth value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)} className="small-margin-below" />
                <Button variant="outlined" onClick={handleSignup} className="small-margin-below">Register</Button>
                <Button variant="outlined" onClick={() => navigate(-1)} className="small-margin-below">Back</Button>
              </form>
            </Paper>
          </Container>
      </div>
    </>
  );
};

export default Signup;