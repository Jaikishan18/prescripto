import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import "../css/doctor.css";

const Doctors = () => {
  const { doctors } = useContext(Appcontext);
  const [filterdoc, setFilterdoc] = useState([]);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { speciality } = useParams();

  const applyFilter = () => {
    if (speciality) {
      const filterData = doctors.filter((val) => val.speciality === speciality);
      setFilterdoc(filterData);
    } else {
      setFilterdoc(doctors);
    }
  };

  const handleClick = (value) => {
    setActive(value);
    if (speciality === value) {
      navigate("/doctors");
    } else {
      navigate(`/doctors/${value}`);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div className="dcotor_container">
        <div className="doctor_spec_text">
          <p
            onClick={() => handleClick("General physician")}
            className={active === "General physician" ? "active_text_tag" : ""}
          >
            General physician
          </p>
          <p
            onClick={() => handleClick("Gynecologist")}
            className={active === "Gynecologist" ? "active_text_tag" : ""}
          >
            Gynecologist
          </p>
          <p
            onClick={() => handleClick("Dermatologist")}
            className={active === "Dermatologist" ? "active_text_tag" : ""}
          >
            Dermatologist
          </p>
          <p
            onClick={() => handleClick("Pediatricians")}
            className={active === "Pediatricians" ? "active_text_tag" : ""}
          >
            Pediatricians
          </p>
          <p
            onClick={() => handleClick("Neurologist")}
            className={active === "Neurologist" ? "active_text_tag" : ""}
          >
            Neurologist
          </p>
          <p
            onClick={() => handleClick("Gastroenterologist")}
            className={active === "Gastroenterologist" ? "active_text_tag" : ""}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="doctor_content">
          {filterdoc.map((items, idx) => (
            <div
              key={idx}
              className="doctor_inner_content"
              onClick={() => navigate(`/appointment/${items._id}`)}
            >
              <img src={items.image} />
              <div className="doctor_text_content">
                <div>
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "999px",
                      background: "#22C55E",
                    }}
                  ></div>
                  <p>Available</p>
                </div>
                <p>{items.name}</p>
                <p>{items.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
