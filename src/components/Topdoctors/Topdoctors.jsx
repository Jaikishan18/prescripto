import { useNavigate } from 'react-router-dom'
import './Topdoctors.css'
import { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'


const Topdoctors = () => {

  const navigate = useNavigate()
  const {doctors} = useContext(Appcontext)
  
  return (
    <div className='doctors_section'>
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className='doctor_content'>
            {doctors.slice(0,10).map((items,idx)=>(
                <div key={idx} className='doctor_inner_content' onClick={()=>navigate(`/appointment/${items._id}`)}>
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
        <button onClick={()=>{navigate("/doctors");window.scrollTo(0,0)}}>more</button>


    </div>
  )
}

export default Topdoctors