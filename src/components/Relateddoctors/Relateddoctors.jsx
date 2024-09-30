import { useContext, useEffect, useState } from "react"
import { Appcontext } from "../../context/Appcontext"
import { useNavigate } from "react-router-dom";
import './Relateddoctors.css'


const Relateddoctors = (props) => {

    // console.log("props",props)

    const {speciality,docId} = props;
    const navigate = useNavigate();


    const {doctors} = useContext(Appcontext)
    const [relDoc,setRelDoc] = useState([])

    const relatedDoctorsData = async()=>{

        if(doctors.length > 0 && speciality){
            const docData = doctors.filter((data)=>data.speciality === speciality && data._id !== docId)
            console.log('docData',docData);
            
            setRelDoc(docData)
        }
      
    }

    useEffect(()=>{
        relatedDoctorsData()
    },[relDoc,speciality])
    

  return (
    <div className="related_doc">
        <h1>Related Doctors</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className='doctor_content'>
            {relDoc.slice(0,5).map((items,idx)=>(
                <div key={idx} className='doctor_inner_content' onClick={()=>{navigate(`/appointment/${items._id}`);scrollTo(0,0)}}>
                    <img src={items.image} loading='lazy'/>
                    <div className='doctor_text_content'> 
                     <div>
                        <div style={{width:'0.5rem',height:'0.5rem',borderRadius:'999px',background:'#22C55E'}}></div>
                        <p>Available</p>
                     </div>
                    <p>{items.name}</p>
                    <p>{items.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Relateddoctors