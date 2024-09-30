import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import verified_icon from "../assets/verified_icon.svg";
import info_icon from "../assets/info_icon.svg";
import "../css/appointment.css";
import { Col, Row } from "react-bootstrap";
import Relateddoctors from "../components/Relateddoctors/Relateddoctors";

const Appointment = () => {
  const navigate = useNavigate()
  const { docId } = useParams();
  const { doctors } = useContext(Appcontext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docslot, setDocslot] = useState([]);
  const [slotindex, setSlotindex] = useState(0);
  const [slottime, setSlottime] = useState("");

  const fetchData = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    //  console.log("docInfo",docInfo)
    setDocInfo(docInfo);
  };

  const getAvailableSlot = async () => {
    let today = new Date();
    let allTimeSlots = [];
    for (let i = 0; i < 7; i++) {
      //getting date with index

      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // console.log(currentDate,"currentDate");
      //setting end time of the date

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 0 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 60);
      }
      allTimeSlots.push(timeSlots);
    }
    //setting hours
    setDocslot(allTimeSlots);
  };
  useEffect(() => {
    fetchData();
  }, [docId]);

  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="appointment_sec">
        <Row>
          <Col lg={3}>
            <div className="doc_image">
              <img src={docInfo.image} alt={docInfo.name} />
            </div>
          </Col>
          <Col lg={9}>
            <div className="doc_info">
              <div>
                <p>{docInfo.name}</p>
                <img src={verified_icon} />
              </div>
              <div>
                <p>MBBS - General physician</p>
                <button>{docInfo.experience}</button>
              </div>
              <div>
                <p>
                  About
                  <img src={info_icon} />
                </p>
                <p>{docInfo.about}</p>
              </div>
              <p>
                Appointment fee: <span>${docInfo.fees}</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <div className="booking_sec">
              <p>Booking slots</p>
              <div className="day_slot">
                {docslot.length > 0 &&
                  docslot.map((items, idx) => {
                    // console.log("items", items);
                    return (
                      <div
                        key={idx}
                        onClick={() => setSlotindex(idx)}
                        className={
                          slotindex === idx
                            ? "bg-primary text-white"
                            : "bg-white text-black"
                        }
                      >
                        <p>
                          {items[0] && daysOfWeek[items[0].datetime.getDay()]}
                        </p>
                        <p>{items[0] && items[0].datetime.getDate()}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="time_slot">
                {docslot.length &&
                  docslot[slotindex].map((items, idx) => (
                    <p key={idx} onClick={()=>setSlottime(idx)} className={slottime === idx ? "bg-primary text-white" : "bg-white text-black"}>{items.time}</p>
                  ))}
              </div>
              <button onClick={()=> navigate("/myappointments")}>Book an appointment</button>
            </div>
          </Col>
        </Row>
        <Relateddoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  );
};
export default Appointment;
