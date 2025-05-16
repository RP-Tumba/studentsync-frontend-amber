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
const HomePage = () => {
  return (
    <div className="home">
      <div className="topDiv">
        <div className="left">
          <h4>Student management platform</h4>
          <h1>
            STUDENTSYNC <br /> MANAGEMENT WEB APP
          </h1>
          <p>students for the accademic Year 2025/2026</p>
          <div className="buttons">
            <button>learn more</button>
            <button id="all-btn">all students</button>
          </div>
        </div>
        <div className="imagesDiv">
          <img className="topImage" src={image1} alt="" />
          <div className="images">
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
      <div className="secondPart">
        <div className="head">
          <p>vibrant culture</p>
          <h2>The Gym College Student management</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="head">
              <div>
                <VolunteerActivismIcon className="icon" />
              </div>
              <h3>Digital Transformation</h3>
            </div>
            <p>
              Digital transformation empowers students with tools and skills
              that extend beyond technical proficiency, fostering a learning
              environment where ethical digital citizenship and proper online
              conduct become the bedrock of their future success in an
              increasingly connected world.
            </p>
          </div>
          <div className="card" id="displined-card">
            <div className="head">
              <div>
                <SnoozeRoundedIcon id="icon-displine"/>
              </div>
              <h3>Discipline and productive</h3>
            </div>
            <p>
              Discipline in time, as well as discipline in all matters and
              possessions. Organized and able to manage their agenda/activities
              so that all their time can be valuable and beneficial.
            </p>
          </div>
          <div className="card">
            <div className="head">
              <div>
                <DirectionsRunRoundedIcon
                  style={{ color: "rgb(126, 71, 4)" }}
                />
              </div>
              <h3>Race towards goodness</h3>
            </div>
            <p>
              Competing and striving in goodness. Having speed and accuracy in
              doing good deeds. Trained to act swiftly in matters, completing
              tasks quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="bottomPart">
        <div className="head">
          <p>Gallery</p>
          <h3>The Gym College Student Lifestyle</h3>
        </div>
        <div className="bottom-part-nav">
                 <div className="nav">
            <p className="active">All</p>
            <p>Foundations period</p>
            <p>Sports Culture</p>
            <p>Project Phase</p>
          </div>
        </div>
           

        <div className="images">
          <div className="image">
            <img src={image5} alt="" />
            <p>lorem ipsum</p>
          </div>
          <div className="sportImageContainer">
            <img src={image6} alt=""  className="sportImage"/>
            <p className="sportData">Sport Culture</p>
          </div>
          <div className="image">
            <img src={image7} alt="" />
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage