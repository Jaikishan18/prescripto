import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import '../css/myappointment.css'

const Myappointments = () => {
  const { doctors } = useContext(Appcontext);
  return (
    <div className="myappointment_sec">
      <p>My appointments</p>
      {doctors.slice(0, 3).map((items, idx) => (
        <div key={idx} className="myappointment">
          <div>
          <img src={items.image} />
          </div>
          <div>
             <p>{items.name}</p>
             <p>{items.speciality}</p>
             <p>{items.address.line1}</p>
             <p>{items.address.line2}</p>
              
          </div>
          <div>
            <button>Pay Online</button>
            <button>Cancel appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Myappointments;
