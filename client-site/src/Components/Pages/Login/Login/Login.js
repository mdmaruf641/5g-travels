import React from "react";
import "./Login.css";
import { Button, Container, Form } from "react-bootstrap";
import google from "../../../../images/google.png";
import { Link } from "react-router-dom";
import useAuth from "./../../../../Hooks/UseAuth.js";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const {
    signInUsingGoogle,
    signInUsingEmail,
    emailHandle,
    passwordHandle,
    error,
    setError,
  } = useAuth();

  // for redirect
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";
  // google sign in
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInUsingGoogle()
      .then((result) => {
        history.push(redirectUrl);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Container>
        <div className="form-inner">
          <h1>Please Login</h1>

          {/* email login items */}
          <Form onSubmit={signInUsingEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onBlur={emailHandle}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onBlur={passwordHandle}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="text-danger">{error}</div>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>

          {/* Google Sign in item */}
          <button className="google-btn mt-3" onClick={handleGoogleLogin}>
            <span>
              <img src={google} alt="" />
            </span>
            Sign in With Google
          </button>
          <p>
            Need an Account? Please{" "}
            <Link className="signUp-link" to="/signUp">
              Sign Up
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
