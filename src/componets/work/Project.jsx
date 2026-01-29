import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "./Project.module.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { work1, work2, work3, work4 } from "../../assets/Images";

function Project() {
  return (
    <section className={css.projectSection} id="projects">
      <Container>
        <div className={css.projectHeader}>
          <p className={css.sectionTag}>PROJECTS</p>
          <h2 className={css.projectTitle}>
            Selected work & real-world builds
          </h2>
          <p className={css.projectSubtitle}>
            A collection of applications and websites I’ve designed and
            developed using modern web technologies.
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 140,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className={css.projectSwiper}
        >
          {/* Example slides – replace images and titles with real projects */}
          <SwiperSlide className={css.projectSlide}>
            <img src={work1} alt="pratishthasportingassociation.com" />
            <div className={css.slideMeta}>
              <Button size="sm" className={css.slideTag}>
                Website
              </Button>
              <h3>Pratishtha Sporting Association</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className={css.projectSlide}>
            <img src={work2} alt="hknfasteners.com" />
            <div className={css.slideMeta}>
              <Button size="sm" className={css.slideTag}>
                Website
              </Button>
              <h3>HKN Fastener</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className={css.projectSlide}>
            <img src={work3} alt="berwalindustries.com" />
            <div className={css.slideMeta}>
              <Button size="sm" className={css.slideTag}>
                Website
              </Button>
              <h3>Berwal Industries</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className={css.projectSlide}>
            <img src={work4} alt="megaMart.com" />
            <div className={css.slideMeta}>
              <Button size="sm" className={css.slideTag}>
                Billing Custom Software
              </Button>
              <h3>Mega Mart</h3>
            </div>
          </SwiperSlide>

          {/* add more slides as you like */}
        </Swiper>
      </Container>
    </section>
  );
}

export default Project;
