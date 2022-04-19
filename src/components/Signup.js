import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState();
    const { signup } = useUserAuth() || {};
    const navigate = useNavigate();
    const handleSignup = async (e) =>{
        e.preventDefault();
        setErr("");
        try {
            await signup(email, password);
            navigate("/preference")
        } catch (err) {
            setErr(err.message)
        }
    }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {err && <Alert variant="danger">{err}</Alert>}
        <Form data-testid="signup-form" onSubmit={handleSignup}>
          <Form.Group data-testid="signup-basic-email" className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={ (e) => setEmail(e.target.value) }/>
          </Form.Group>

          <Form.Group data-testid="signup-basic-password" className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={ (e) => setPassword(e.target.value) }/>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button data-testid="signup-button" variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link data-testid = "link-to-login" to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;