import "./Home.css";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/trainer.jpg";
import image3 from "../assets/images/5.jpg";
import image4 from "../assets/images/6.jpg";
import image5 from "../assets/images/b1.jpg";
import image6 from "../assets/images/210.jpg";
import image7 from "../assets/images/b2.jpg";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SnoozeRoundedIcon from "@mui/icons-material/SnoozeRounded";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
const HomePage = () => {

  const navigate = useNavigate();
  return (
    <>

  

               <div className="top-bar">
      <div className="top-left">
        <h3>Students management platform</h3> 
        <h2>STUDENTSYNC <br />
        MANAGEMENT WEB APP
        </h2>
        <p>Students for Academic Year 2025/2026</p>
          

          <div className="top-btn">
            <button className="learn-more">Learn more</button>
            <button className="all-student" onClick={()=>navigate("/allstudent")}>All students</button>
          </div>
      </div>
      <div className="top-right">
        <div>
          <img src={image1} alt="" className="image1"/>
        </div>
         <div className="top-images">
             <img src={image2} alt="" className="images"/>
             <img src={image3} alt="" className="images"/>
             <img src={image4} alt=""  className="images"/>
         </div>
      </div>
         
        
                </div>


                <div className="middle-content">
                  <p>Vibrant Culture</p>
                  <h4>The Gym College Students management</h4>
                  <div className="middle-cards">
                        <div className="middle-card" id="card1">
                          <h3> <span id="icon1"><VolunteerActivismIcon className="icon1" /></span>
                           Digital Transformation</h3>
                            <p>
                                Digital transformation empowers students with tools and skills
                                that extend beyond technical proficiency, fostering a learning
                                environment where ethical digital citizenship and proper online
                                conduct become the bedrock of their future success in an
                                increasingly connected world.
                              </p>
                        </div>

                        <div className="middle-card" id="card2">
                          
                                        <h3><span id="icon2"><SnoozeRoundedIcon className="icon2"/></span>  Discipline and productive</h3>
                  
                                        <p>
                                            Discipline in time, as well as discipline in all matters and
                                            possessions. Organized and able to manage their agenda/activities
                                            so that all their time can be valuable and beneficial.
                                          </p>
                        </div>

                        <div className="middle-card">
                          
                                        <h3><span id="icon3"> <DirectionsRunRoundedIcon className="icon3"/></span> Race towards goodness</h3>
                  
                                        <p>
                                          Competing and striving in goodness. Having speed and accuracy in
                                          doing good deeds. Trained to act swiftly in matters, completing
                                          tasks quickly and efficiently.
                                        </p>
                        </div>
                  </div>
                </div>


                <div className="bottom-content">
                       <p>Gallery</p>
          <h4>The Gym College Student Lifestyle</h4>

                      <ul className="bottom-link">
                        <li>all </li>
                        <li>Foundations period</li>
                        <li>Sports Culture</li>
                        <li>Project Phase</li>
                      
                      </ul>

                      <div className="bottom-images">
                        <img src={image5} alt=""  className="bottom-image"/>
                        <img src={image6} alt=""  className="bottom-image"/>
                        <img src={image7} alt=""  className="bottom-image"/>
                      </div>
                      <p id="bottom-p">More pictures <NavigateNextIcon/></p>
                </div>
   
    
    
    </>
  );
};
export default HomePage