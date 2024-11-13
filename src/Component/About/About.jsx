/* eslint-disable react/prop-types */
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img } alt="" className="about-img" />
                <img src={play_icon } alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nuturing Tomorrow&apos;s Leaders Today</h2>
                <p>The best things about university life include the vibrant, diverse community that fosters personal and academic growth. You’ll find endless opportunities to explore new interests and make lifelong connections through clubs, organizations, and social events. Academically, universities offer a wealth of resources, from world-class libraries to knowledgeable faculty who inspire and support. Flexible class schedules and a variety of courses let you tailor your studies to your passions, while career services and internships prepare you for the future. The university experience also builds independence, time management, and critical thinking skills, setting you up for success both professionally and personally.</p>
                <p>Beyond academics, our university fosters an inclusive and dynamic campus culture. Students from different backgrounds come together, creating a community rich in perspectives and experiences. This diversity is celebrated through various cultural events, clubs, and activities that encourage students to connect, learn, and share. 
                    The sense of belonging on campus makes it easy to feel at home and stay motivated.</p>
                
            </div>
        </div>
    )
}

export default About