import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <form>
                    <Row >
                      <Col size={12} sm={2} md={12} lg={12} className="px-1 wrap">
                        <h1 className="mx-5 my-3" style={{ overflow: 'auto' }}><i className="fa-regular fa-envelope"></i> <a href="mailto:dev.ashimkr@gmail.com" style={{ textDecoration: 'none', color: "inherit" }}> dev.ashimkr@gmail.com</a></h1>
                      </Col>
                      <Col size={12} sm={2} md={12} lg={12} className="px-1">
                        <h1 className="mx-5 my-3" style={{ overflow: 'auto' }}><i className="fa-solid fa-phone"></i> <a href="tel:8789437620" style={{ textDecoration: 'none', color: "inherit" }}> +91 8789437620</a></h1>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
