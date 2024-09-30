import { Col, Row } from "react-bootstrap";
import {specialityData} from "../../assets/assets"
import { Link } from "react-router-dom";
import './Specialitymenu.css'

const Specialitymenu = () => {
  return (
    <div id="speciality">
      <Row>
        <Col lg={12}>
          <div className="speciality_content">
            <h1>Find by Speciality</h1>
            <p>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
            <div className="speciality_image">
              {specialityData.map((items, idx) => (
                <Link to={`/doctors/${items.speciality}`} key={idx} className="speciality_tag">
                  <img src={items.image} />
                  <p>{items.speciality}</p>
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Specialitymenu;

