import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AllCSS from "./All.module.css";
import {MdOutlineConnectWithoutContact} from "react-icons/md";
import MixedFriends from "../assets/images/mixed-friends-min.jpg";
import {Link} from "react-router-dom";
function Connect() {
  return (
    <Container className={AllCSS.excitedContainer}>
      <Row className="justify-content-center">
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="mt-5 px-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className={AllCSS.space}>
            <h1>Network With People Of Diversity Around Our World</h1>
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
              <MdOutlineConnectWithoutContact className="m-2" />
            </Link>
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="mt-5 px-4"
          data-aos="zoom-out"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          <img
            src={MixedFriends}
            alt="friends spending moment of laughter"
            className="img-fluid"
            id={AllCSS.timelineImg}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Connect;
