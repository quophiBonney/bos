import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Excited from "../../src/assets/images/exciting-min.jpg";
import {EffectCoverflow, Pagination, Navigation} from "swiper";
import {Container, Row, Col} from "react-bootstrap";
import HomeCSS from "./Home.module.css";
function Categories() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} className="text-dark mt-5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            autoplay={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{el: ".swiper-pagination", clickable: true}}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={{EffectCoverflow, Pagination, Navigation}}
          >
            <SwiperSlide className="m-2">
              <img
                src={Excited}
                className="img-fluid img-responsive"
                alt="excited"
                id={HomeCSS.categoriesImg}
              />
            </SwiperSlide>
            <SwiperSlide className="m-2">
              <img
                src={Excited}
                className="img-fluid img-responsive"
                alt="excited"
                id={HomeCSS.categoriesImg}
              />
            </SwiperSlide>
            <SwiperSlide className="m-2">
              <img
                src={Excited}
                className="img-fluid img-responsive"
                alt="excited"
                id={HomeCSS.categoriesImg}
              />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
