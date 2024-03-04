import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, ProgressBar, Row } from "react-bootstrap";

export const Skills = () => {

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2 className="">My Skills</h2>
              <br></br>



              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-brands fa-react" style={{color: "#74C0FC"}}></i> &nbsp;
                      <span>React JS <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={85} label={"85%"} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-brands fa-node-js" style={{color: "#05ff2f"}}></i> &nbsp;
                      <span>Node Js <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={75} label={"75%"} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                    <i class="fa-brands fa-html5" style={{ color: "#c9332e" }}></i> &nbsp;
                      <span>Express Js <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={75} label={"75%"} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-solid fa-database" style={{color: "#2354a9"}}></i> &nbsp;
                      <span>MongoDB <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={70} label={"70%"} />
                </Col>
              </Row>


              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-solid fa-server" style={{color: "#c03962"}}></i> &nbsp;
                      <span>SQL <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={65} label={"65%"} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-brands fa-js" style={{ color: "#fcba03" }}></i> &nbsp;
                      <span>JavaScript <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={85} label={"85%"} />
                </Col>
              </Row>


              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-brands fa-python" style={{color: "#74C0FC"}}></i> &nbsp;
                      <span>Python <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={55} label={"55%"} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-brands fa-java"></i> &nbsp;
                      <span>Java <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={50} label={"50%"} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                    <i class="fa-brands fa-html5" style={{ color: "#c9332e" }}></i> &nbsp;
                      <span>HTML <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={70} label={"70%"} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5 class="bar info text-start w-25 m-auto">
                  <i class="fa-brands fa-css3-alt" style={{ color: "#147bbc" }}></i> &nbsp;
                      <span>CSS3 <span class="addhtml"></span></span>
                  </h5>
                </Col>
                <Col>
                  <ProgressBar variant="success" now={70} label={"70%"} />
                </Col>
              </Row>







              {/* <div className=" owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="skill" />
                  <h5>React Js</h5>
                </div> */}



              {/* <div className="item">
                  <img src={meter2} alt="skill" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill" />
                  <h5>Web Development</h5>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>


      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  )
}
