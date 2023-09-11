import React from "react";
// import { Form, Button } from "react-bootstrap";
import "boxicons";
import "./auth.css";
{
  /* <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script> */
}

const SignInPage = () => {
  return (
    // <div className="container" style={styles.container}>
    <div className="containerauth">
      <div className="wrapper">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgotpassword">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

{
  /* <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
    </Button>
  </Form> */
}
