import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AuthCSS from "../auth/Auth.module.css";
import {Link} from "react-router-dom";
import {BsFacebook, BsGoogle} from "react-icons/bs";
function Login() {
  return (
    <Container fluid className={AuthCSS.full}>
      <Row className="justify-content-center">
        <Col sm={12} md={12} lg={6} className="mt-5 text-center px-5">
          <h4 className="mt-4 mb-3">Login To Your Account</h4>
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-3"
              id={AuthCSS.loginBtns}
            >
              <button className="btn btn-primary text-light">
                Login With Facebook <BsFacebook className="m-2" />
              </button>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-3"
              id={AuthCSS.loginBtns}
            >
              <button className="btn btn-dark text-light">
                Login With Google &nbsp; <BsGoogle className="m-2" />
              </button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
              <input
                type="text"
                id=""
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
              <input
                type="text"
                id=""
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="col-12 mt-3">
              <input type="checkbox" id="" />
              <strong className="text-primary">Forgotten your password?</strong>
            </div>
            <div className="col-12 mt-3 mb-3">
              <Link
                to="/home"
                className="btn w-100 text-light"
                id={AuthCSS.registerBtn}
              >
                Register
              </Link>
            </div>
            <p>
              Not yet a member?<Link to="/auth/signup">Signup</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
