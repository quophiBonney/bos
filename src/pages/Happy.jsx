import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AllCSS from "./All.module.css";
import {BiHappyAlt} from "react-icons/bi";
import HappyGirl from "../assets/images/happy-min.jpg";
import {Link} from "react-router-dom";
function Happy() {
  return (
    <Container className={AllCSS.excitedContainer}>
      <Row className="justify-content-center">
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="mt-5 px-4"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <img
            src={HappyGirl}
            alt="friends spending moment of laughter"
            className="img-fluid"
            id={AllCSS.timelineImg}
          />
        </Col>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="mt-5 px-4"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className={AllCSS.space}>
            <h1>You Can Be Happy All Day Long</h1>
            <p>
              Connecting with people gives you the opportunity to land jobs,
              learn and explore how diverse others are as well as making friends
              for a brighter tomorrow.
            </p>
            <Link
              to="/auth/login"
              className="btn mt-2"
              id={AllCSS.btnWriteQuote}
            >
              Connect With Others
              <BiHappyAlt className="m-2" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Happy;
