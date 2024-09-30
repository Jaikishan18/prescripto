import { Row, Col } from "react-bootstrap";
import appointment_img from "../../assets/appointment_img.png";
import './Banner.css'
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className="banner_section">
      <Row>
        <Col lg={7}>
          <div className="banner_left">
            <div>
              <p>Book Appointment</p>
              <p>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>navigate("/login")}>Create account</button>
          </div>
        </Col>
        <Col lg={5}>
          <div className="banner_right">
            <img src={appointment_img} alt="appointment_image" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
