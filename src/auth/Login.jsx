import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AuthCSS from "../auth/Auth.module.css";
import {Link} from "react-router-dom";
import {
  BsEmojiLaughing,
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsTiktok,
  BsWhatsapp,
} from "react-icons/bs";
function Login() {
  return (
    <Container fluid className={AuthCSS.full}>
      <Row className="justify-content-center px-2">
        <Col sm={12} md={12} lg={6} className="shadow mt-5 text-center">
          <h4 className="mt-4 mb-3 text-uppercase" id={AuthCSS.formTitle}>
            Login To Your Account
          </h4>
          <p>
            welcome back <BsEmojiLaughing />
          </p>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6} className="mt-3">
              <button
                className="btn btn-dark text-light mb-4"
                id={AuthCSS.loginWithBtn}
              >
                Login With Google
                <BsGoogle className="m-2" />
              </button>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className="mt-3">
              <button
                className="btn btn-primary text-light mb-4"
                id={AuthCSS.loginWithBtn}
              >
                Login With Facebook
                <BsFacebook className="m-2" />
              </button>
            </Col>
          </Row>
          <div className="d-flex text-center">
            <div className={AuthCSS.line}></div>
            <p className="px-3">OR</p>
            <div className={AuthCSS.line}></div>
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
          <div className="col-12 mt-3 mb-3">
            <Link
              to="/home"
              className="btn w-100 text-light"
              id={AuthCSS.registerBtn}
            >
              Login
            </Link>
          </div>
          <p>
            Not yet a member?<Link to="/auth/signup">Signup</Link>
          </p>
          <div className="mb-3">
            <BsInstagram className="m-2" />
            <BsFacebook className="m-2" />
            <BsTiktok className="m-2" />
            <BsWhatsapp className="m-2" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
