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
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          {/* Tag */}
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
            PROJECTS
          </p>

          {/* Title with Gradient Accent */}
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Selected work & real-world <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              builds
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-xl text-lg text-slate-400">
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
