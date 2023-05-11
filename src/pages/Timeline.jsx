import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AllCSS from "./All.module.css";
import MaleFriends from "../assets/images/male-friends-min.jpg";
import {HiMail} from "react-icons/hi";
import {Link} from "react-router-dom";
function Timeline() {
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
          <img
            src={MaleFriends}
            alt="male friends having fun"
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
            <h1>Write Captivating Quotes To Reach Millions Of People</h1>
            <p>
              Millions of people with similar interest are already on the
              platform writing to touch, inspire and bless souls around the
              continent.
            </p>
            <Link
              to="/auth/login"
              className="btn mt-2"
              id={AllCSS.btnWriteQuote}
            >
              Start Writing
              <HiMail className="m-2" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Timeline;
