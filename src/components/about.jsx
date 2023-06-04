
import '../style/about.css'  
import Pic2 from '../assets/me.png'
import EmailIcon from '@mui/icons-material/Email';



    function About(){
        return (
        <div className='about'>
                <div className="section-header"> </div>
                <div className="section-title">/about me </div>
                
                <div className="about-content">
                <div className="about-description">
                    <p> I am currently a Computer Science student at Hassiba Ben Bouali University,
                        learning full-stack development & mobile.</p>
                        <br></br>
                    <p> Outside of university, Im interested in following the developments of science.
                        I also enjoy making art.</p>
                    
                </div>
                <div className="about-image">
                    <img src={Pic2} alt="" />
                </div>
                </div>
                <a
                href="mailto:mansournourinfo@gmail.com
                "
                className="about-contact"
                    >
                <EmailIcon></EmailIcon>
                {"  " + "Say hi!"}
            </a>
        </div>
        );
    }

export default About 
    


