import { Card, Container, Row, Col } from "react-bootstrap";
import css from "./Advantages.module.css";
import {
  Advantage1,
  Advantage2,
  Advantage3,
  Advantage4,
} from "../../assets/Images";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Advantages() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  const promises = [
    {
      Image: Advantage1,
      Title: "Transparent Process",
      Discrb:
        "Our process is open, predictable, and designed so you always know what’s happening next.",
    },
    {
      Image: Advantage2,
      Title: "Cost-Effective Delivery",
      Discrb:
        "We focus on lean, efficient builds that respect your budget without cutting corners.",
    },
    {
      Image: Advantage3,
      Title: "Client-Centric Collaboration",
      Discrb:
        "We listen first, then build. Every decision is made to move your business forward.",
    },
    {
      Image: Advantage4,
      Title: "Expertise & Innovation",
      Discrb:
        "We stay ahead of the curve, blending solid engineering with modern design and tooling.",
    },
  ];

  return (
    <section className={css.advantagesSection}>
      <Container>
        <div
          className={css.advantagesHeader}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p className={css.badge}>WHY PARTNER WITH US</p>
          <h2>Advantages of working with WebZova.</h2>
          <p className={css.lead}>
            A focused team, a clear process, and a commitment to building
            reliable digital products — from first idea to launch.
          </p>
        </div>

        <Row className={`g-4 ${css.advantagesRow}`}>
          {promises.map((p, key) => (
            <Col xs={12} sm={6} md={6} lg={3} key={p.Title}>
              <Card
                className={`h-100 text-center ${css.advantageCard}`}
                data-aos="fade-up"
                data-aos-delay={150 * (key + 1)} // nice stagger
              >
                <div className={css.iconRing}>
                  <Card.Img
                    variant="top"
                    src={p.Image}
                    alt={p.Title}
                    className={css.advantageIcon}
                  />
                </div>
                <Card.Body>
                  <Card.Title className={css.advantageTitle}>
                    {p.Title}
                  </Card.Title>
                  <Card.Text className={css.advantageText}>
                    {p.Discrb}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Advantages;
