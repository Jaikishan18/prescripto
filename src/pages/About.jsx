import { Col, Row } from "react-bootstrap";
import about_image from "../assets/about_image.png";
import "../css/about.css";

const About = () => {
  return (
    <section>
      <div className="about_sec">
        <p>
          About <span>US</span>
        </p>
        <Row>
          <Col lg={4}>
            <div className="about_left">
              <img src={about_image} alt="about_image" />
            </div>
          </Col>
          <Col lg={8}>
            <div className="about_right">
              <p>
                Welcome to Prescripto, your trusted partner in managing your
                healthcare needs conveniently and efficiently. At Prescripto, we
                understand the challenges individuals face when it comes to
                scheduling doctor appointments and managing their health records
              </p>
              <p>
                Prescripto is committed to excellence in healthcare technology.
                We continuously strive to enhance our platform, integrating the
                latest advancements to improve user experience and deliver
                superior service. Whether you're booking your first appointment
                or managing ongoing care, Prescripto is here to support you
                every step of the way.
              </p>
              <b>Our Vision</b>
              <p>
                Our vision at Prescripto is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between
                patients and healthcare providers, making it easier for you to
                access the care you need, when you need it.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="choose_sec">
        <p>
          WHY <span>CHOOSE US</span>
        </p>
        <Row>
          <Col lg={4}>
          <div className="choose_content">
            <b>EFFICIENCY</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          </Col>
          <Col lg={4}>
          <div className="choose_content">
            <b>CONVENIENCE: </b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          </Col>
          <Col lg={4}>
          <div className="choose_content">
            <b>PERSONALIZATION:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
