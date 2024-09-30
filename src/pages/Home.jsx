import Header from "../components/Header/Header"
import Specialitymenu from "../components/Speciality/Specialitymenu"
import Topdoctors from "../components/Topdoctors/Topdoctors"
import Banner from "../components/Banner/Banner"

const Home = () => {
  return (
    <div>
       <Header/>
       <Specialitymenu/>
       <Topdoctors/>   
       <Banner/>
    </div>
  )
}

export default Home