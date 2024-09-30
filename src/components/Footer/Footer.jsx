import { Col, Row } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col lg={6}>
          <div className="footer_one">
            <img src={logo} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Col>
        <Col lg={3}>
          <div className="footer_two">
            <p>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
          </div>
        </Col>
        <Col lg={3}>
          <div className="footer_three">
            <p>GET IN TOUCH</p>
            <ul>
                <li>+0-000-000-000</li>
                <li>tesst@gmail.com</li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="footer_rights">
        <hr></hr>
        <p>Copyright 2024 @ Jaikishan - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
