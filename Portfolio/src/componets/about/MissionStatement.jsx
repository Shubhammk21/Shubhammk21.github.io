import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import css from "./AboutUs.module.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import {
  MissionImage1,
  MissionImage2,
  MissionImage3,
} from "../../assets/Images";

function MissionStatement() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={css.missionSection}>
      <Container fluid className={css.missionStatement}>
        <div className={css.inner}>
          <Row className={css.missionRow}>
            {/* Left Side: Stats Cards */}
            <Col md={5} lg={4}>
              <Stack gap={4} className={css.achievement}>
                <div data-aos="fade-up" className={css.statCard}>
                  <div className={css.icon}>
                    <Image src={MissionImage1} fluid alt="Mission Image 1" />
                  </div>
                  <div className={css.content}>
                    <div className={css.number}>
                      <h5 className={css.metallicText}>50</h5>
                      <span className={css.electricAccent}>+</span>
                    </div>
                    <p>Projects Completed</p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className={css.statCard}
                >
                  <div className={css.icon}>
                    <Image src={MissionImage2} fluid alt="Mission Image 2" />
                  </div>
                  <div className={css.content}>
                    <div className={css.number}>
                      <h5 className={css.metallicText}>100</h5>
                      <span className={css.electricAccent}>%</span>
                    </div>
                    <p>Customer Satisfaction</p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className={css.statCard}
                >
                  <div className={css.icon}>
                    <Image src={MissionImage3} fluid alt="Mission Image 3" />
                  </div>
                  <div className={css.content}>
                    <div className={css.number}>
                      <h5 className={css.metallicText}>2</h5>
                      <span className={css.electricAccent}>+</span>
                    </div>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </Stack>
            </Col>

            {/* Right Side: Text Content */}
            <Col md={7} data-aos="fade-right">
              <p className={css.kicker}>ABOUT WEBZOVA</p>
              <h1>We build digital products that actually get used.</h1>
              <p className={css.lead}>
                WebZova is a small, focused team that designs and builds web,
                mobile, and custom software for businesses that want more than
                just a nice UI. We care about performance, reliability, and the
                details that make products feel professional.
              </p>
              <Col data-aos="fade-left">
                <div className={css.heroCard}>
                  <p className={css.heroStatLabel}>What we focus on</p>
                  <ul>
                    <li>High-performance web & mobile apps</li>
                    <li>Custom business software & tools</li>
                    <li>Clean, modern interfaces</li>
                    <li>Long-term partnerships, not one-off builds</li>
                  </ul>
                </div>
              </Col>
            </Col>
          </Row>
          <div
            className={css.sectionConnector}
            data-aos="fade-up"
            data-aos-delay="420"
          >
            <span className={css.connectorLine} />
            <span className={css.connectorText}>
              Next: why teams partner with WebZova
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MissionStatement;
