import { Row, Col } from "react-bootstrap";
import contact_image from "../../assets/contact_image.png";
import "./Info.css";

const Info = () => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <div className="contact_sec">
            <p>
              CONTACT <span>US</span>
            </p>
            <Row>
              <Col lg={4}>
                <div className="contact_image">
                  <img src={contact_image} alt="contct_image" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="contact_content">
                  <b>OUR OFFICE</b>
                  <div>
                    <p>00000 Willms Station</p>
                    <p>Suite 000, Washington, USA</p>
                  </div>
                  <div>
                    <p>Tel: (000) 000-0000</p>
                    <p>Email: prescripto@gmail.com</p>
                  </div>
                  <b>CAREERS AT PRESCRIPTO</b>
                  <p>Learn more about our teams and job openings.</p>
                  <button>Explore Jobs</button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
