import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import AuthCSS from "../auth/Auth.module.css";
import {Link} from "react-router-dom";
function Signup() {
  return (
    <Container className={AuthCSS.full}>
      <Row className="justify-content-center">
        <Col sm={12} md={12} lg={6} className="mt-5 text-center px-5">
          <h4 className="mt-4 mb-3">Create Your Account</h4>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
              <input
                type="text"
                id=""
                placeholder="First Name"
                className="form-control"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
              <input
                type="text"
                id=""
                placeholder="Last Name"
                className="form-control"
              />
            </div>
            <div className="col-12 mt-3">
              <input
                type="email"
                id=""
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="col-12 mt-3">
              <input
                type="password"
                id=""
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="col-12 mt-3">
              <input type="checkbox" id="" />
              &nbsp; I agree to the
              <strong className="text-primary"> Terms of Service</strong> and
              &nbsp;
              <strong className="text-primary">Privacy Statement</strong>
            </div>
            <div className="col-12 mt-3">
              <input type="checkbox" id="" />
              &nbsp; Send me updates via email, unsubscribe anytime, anyday.
            </div>
            <div className="col-12 mt-3 mb-3">
              <input
                type="submit"
                id={AuthCSS.registerBtn}
                value="Register"
                className="btn text-light w-100"
              />
            </div>
            <p>
              Already a member?
              <Link to="/auth/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
