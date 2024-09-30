import { Col, Row } from "react-bootstrap";
import group_profiles from "../../assets/group_profiles.png";
import header_img from "../../assets/header_img.png";
import arrow_icon from "../../assets/arrow_icon.svg"
import "./Header.css";

const Header = () => {
  return (
    <section>
      <Row>
        <Col lg={12}>
          <div className="header">
            <Row>
              <Col lg={6}>
                <div className="header_left">
                  <p>Book Appointment With Trusted Doctors</p>
                  <div>
                    <img src={group_profiles} alt="group_profile_picture" />
                    <p>
                      Simply browse through our extensive list of trusted
                      doctors, schedule your appointment hassle-free.
                    </p>
                  </div>
                  <a href="#speciality">
                        <p>Book Appointemnt</p>
                        <img src={arrow_icon} alt="arrow_icon"/>
                    </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className="header_right">
                  <img src={header_img} alt="header_image" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Header;
