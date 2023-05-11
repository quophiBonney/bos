import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import AllCSS from "./All.module.css";
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
function Social() {
  const [users, setUsers] = useState(0);
  const [quote, setQuotes] = useState(0);
  const [year, setYears] = useState(0);
  //Active Users Counter
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(users => {
        if (users < 1000) {
          return users + 1;
        } else {
          clearInterval(interval);
          return users;
        }
      });
    }, 0);
    return () => clearInterval(interval);
  }, []);
  //Quotes Counter
  useEffect(() => {
    const interval = setInterval(() => {
      setQuotes(quote => {
        if (quote < 2000) {
          return quote + 1;
        } else {
          clearInterval(interval);
          return quote;
        }
      });
    }, 0);
    return () => clearInterval(interval);
  }, []);

  //Years Counter
  useEffect(() => {
    const interval = setInterval(() => {
      setYears(year => {
        if (year < 10) {
          return year + 1;
        } else {
          clearInterval(interval);
          return year;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Container className={AllCSS.excitedContainer}>
      <Row className="justify-content-center">
        <Col
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 px-4 text-center"
          data-aos="fade-in"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          <center>
            <div className={AllCSS.line}></div>
          </center>
          <h2 className="mt-3" id={AllCSS.number}>
            {users}+
          </h2>
          <h4 className={AllCSS.caption}>Active Users</h4>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 px-4 text-center"
          data-aos="fade-in"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          <center>
            <div className={AllCSS.line}></div>
          </center>
          <h2 className="mt-3" id={AllCSS.number}>
            {quote}+
          </h2>
          <h4 className={AllCSS.caption}>Quotes Published</h4>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 px-4 text-center"
          data-aos="fade-out"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          <center>
            <div className={AllCSS.line}></div>
          </center>
          <h2 className="mt-3" id={AllCSS.number}>
            {year}
          </h2>
          <h4 className={AllCSS.caption}>Years Of Existence</h4>
        </Col>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="text-light text-center mt-5 mb-5"
          >
            <BsFacebook className={AllCSS.socialIcons} />
            <BsLinkedin className={AllCSS.socialIcons} />
            <BsInstagram className={AllCSS.socialIcons} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Social;
