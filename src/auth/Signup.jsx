import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import AuthCSS from "../auth/Auth.module.css";
import {Link} from "react-router-dom";
import {SignupSchema} from "../schemas/SignupSchema";
import {
  BsEmojiLaughing,
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsTiktok,
  BsWhatsapp,
} from "react-icons/bs";
import {useFormik} from "formik";
function Signup() {
  const {values, handleBlur, handleSubmit, handleChange} = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: SignupSchema,
  });
  console.log(useFormik);
  return (
    <Container fluid className={AuthCSS.full}>
      <Row className="justify-content-center px-2">
        <Col sm={12} md={12} lg={6} className="shadow mt-5 text-center">
          <h4 className="mt-4 mb-3 text-uppercase" id={AuthCSS.formTitle}>
            Signup To Become A Member
          </h4>
          <p>
            You're Few Steps Away To Join <BsEmojiLaughing />
          </p>
          <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
            <input
              type="password"
              id=""
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
            <input
              type="password"
              id="confirm_password"
              placeholder="Confirm Password"
              className="form-control"
            />
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
            Already a member?<Link to="/auth/login">Login</Link>
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

export default Signup;
