import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AllCSS from "./All.module.css";
import Excited from "../assets/images/exciting-min.jpg";
import {BiMessageEdit} from "react-icons/bi";
import {MdOutlineConnectWithoutContact} from "react-icons/md";
import {BiHappyAlt} from "react-icons/bi";
import {Link} from "react-router-dom";
function Main() {
  return (
    <Container className={AllCSS.excitedContainer}>
      <Row className="justify-content-center">
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="mt-5 px-4"
          data-aos="slide-right"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <h1>The Perfect Platform To Keep You Going & Empowered</h1>
          <p>
            To keep going is one of the hardest things to do in the journey of
            life but with the right people with positive influence and vibes you
            can always do.
          </p>
          <Link to="/auth/login" className="btn mt-2" id={AllCSS.btnWriteQuote}>
            Start Writing Quotes
          </Link>
          <Row>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="mt-2"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <BiMessageEdit className="mt-3" id={AllCSS.mainIcons} />
              <p id={AllCSS.miniHeader}>
                <strong>Write Quotes</strong>
              </p>
              <p className={AllCSS.small}>
                Become a quote writer motivating million people.
              </p>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="mt-3"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <MdOutlineConnectWithoutContact id={AllCSS.mainIcons} />
              <p id={AllCSS.miniHeader}>
                <strong>Be Connected</strong>
              </p>
              <p className={AllCSS.small}>
                Connect with people around the world.
              </p>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="mt-3"
              data-aos="slide-up"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              <BiHappyAlt id={AllCSS.mainIcons} />
              <p id={AllCSS.miniHeader}>
                <strong>Stay Happy</strong>
              </p>
              <p className={AllCSS.small}>
                Explores quotes to keep you happy always.
              </p>
            </Col>
          </Row>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="mt-5 px-4"
          data-aos="slide-left"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          <img
            src={Excited}
            alt="excited ladies"
            className="img-fluid"
            id={AllCSS.mainImg}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
