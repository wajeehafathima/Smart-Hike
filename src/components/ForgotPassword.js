import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import '../css/PreferenceCSS.scss';

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
      <div className="p-4 box">
        <h1 className="center">Forgot Password</h1>
        {err && <Alert variant="danger">{err}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={ handleLogin }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={ (e) => setEmail(e.target.value) }/>
          </Form.Group>
          <br />
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Reset Password
            </Button>
          </div>
          <br />
          <div className="p-4 box mt-3 text-center">
            <Link to="/">Login</Link>
          </div>
          <br />
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </Form>
      </div>
      
    </>
  );
};

export default ForgotPassword;