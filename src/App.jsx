import { useState } from "react"
import About from "./Component/About/About"
import Campus from "./Component/Campus/Campus"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Hero from "./Component/Hero/Hero"
import Navabar from "./Component/Navbar/Navabar"
import Programs from "./Component/Programs/Programs"
import Testimonials from "./Component/Testimonials/Testimonials"
import Title from "./Component/Title/Title"
import VideoPlayer from "./Component/VideoPlayer/VideoPlayer"


const App = () => {
   
  const[playState,setPlayState] = useState(false);

  return (
    <div>
      <Navabar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our Program' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says '/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in touch '/>
      <Contact/>
      <Footer/>

      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
     
   
    </div>
  )
}

export default App
