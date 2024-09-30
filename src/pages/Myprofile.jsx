import { useState } from "react";
import { assets } from "../assets/assets";
import { Row, Col } from "react-bootstrap";
import upload_area from "../assets/upload_area.png";
import "../css/myprofile.css";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edward123@gmail.com",
    phone: "1234567890",
    address: {
      line1: "washington",
      line2: "USA",
    },
    gender: "not selected",
    dob: "22.06.2000",
  });

  const [edit, setEdit] = useState(false);
  const [popup,setPopup] = useState(false)

  const handleSave = () =>{
    setEdit(false)
    setPopup(true)
    setTimeout(() => {
      setPopup(false)
    }, 3000);
  }

  return (
    <div>
      <Row>
        <Col lg={5}>
          <div className="myprofile_page">
            <img src={upload_area} alt="upload" />
            {edit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            ) : (
              <p>{userData.name}</p>
            )}
            <hr className="profile_highlight"></hr>

            <div className="myprofile_contact">
              <p>CONTACT INFORMATION</p>
              <div>
                <p>Email id :</p>
                <p>{userData.email}</p>
                <p>Phone :</p>
                {edit ? (
                  <input
                    type="text"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <p>{userData.phone}</p>
                )}
                <p>Address</p>
                {edit ? (
                  <input
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: {...prev.address,line1:e.target.value},
                      }))
                    }
                  />
                ) : (
                  <p>{userData.address.line1}</p>
                )}
              </div>
              <p>BASIC INFORMATION</p>
              <div>
                <p>Gender :</p>
                {edit ? (
                  <select
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p>{userData.gender}</p>
                )}
                <p>Birthday :</p>
                {edit ? (
                  <input
                    type="date"
                    value={userData.dob}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        dob: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <p>{userData.dob}</p>
                )}
              </div>
              <div className="myprofile_buttons">
                {edit ? (
                  <button
                  onClick={handleSave}
                >
                  Save Information
                </button>
                ) : (
                   <button
                   onClick={() => setEdit(true)}
                 >
                   Edit
                 </button>
                )}
              </div>
            </div>
            {
              popup && (
                <div className="popup_suc">
                <p>Profile updated successfully!</p>
              </div>
              )
            }
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Myprofile;
