import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end my-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashim-kumar-410085214/" target="blank"><img src={navIcon1} alt="" /></a>
              {/* <a href="#" target="blank"><img src={navIcon2} alt="" /></a> */}
              <a href="https://github.com/AshimKr" target="blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Build with &#10084; by Ashim Kr Mondal</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
