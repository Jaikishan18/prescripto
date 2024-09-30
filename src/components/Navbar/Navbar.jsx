import { Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useRef, useState } from "react";
import profile_pic from "../../assets/profile_pic.png";
import dropdown_icon from "../../assets/dropdown_icon.svg";
import cross_icon from "../../assets/cross_icon.png"

const Navbar = ({token,setToken}) => {
  // const [token, setToken] = useState(false);

  const menuRef = useRef()

  const openMenu = ()=>{
    menuRef.current.style.right = "0px"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }

  const navigate = useNavigate();
  return (
    <section>
      <Row>
        <Col lg={12}>
          <div className="navbar_sec">
            <img src={logo} alt="logo" onClick={()=>navigate("/")} />
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="nav_ham_icon"
            onClick={openMenu}
          >
            <path
              fill="currentColor"
              d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
            ></path>
          </svg>
            <ul ref={menuRef}>
              <img src={cross_icon} onClick={closeMenu} className="cross_icon"/>
              <NavLink to="/">
                <li>HOME</li>
                <hr></hr>
              </NavLink>
              <NavLink to="/doctors">
                <li>ALL DOCTORS</li>
                <hr></hr>
              </NavLink>
              <NavLink to="about">
                <li>ABOUT</li>
                <hr></hr>
              </NavLink>
              <NavLink to="contact">
                <li>CONTACT</li>
                <hr></hr>
              </NavLink>
            </ul>
            <div className="nav_button">
              {token ? (
                <div className="login">
                  <img src={profile_pic} />
                  <img src={dropdown_icon} />
                  <div className="drowdown_content">
                    <div>
                      <p onClick={()=>navigate("/myprofile")}>My Profile</p>
                      <p onClick={()=>navigate("/myappointments")}>My Appointments</p>
                      <p onClick={()=>setToken(false)}>Logout</p>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={() => navigate("/login")}>
                  Create Account
                </button>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Navbar;
