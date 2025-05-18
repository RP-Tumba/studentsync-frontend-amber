import style from './Body.module.css';
import Galleries from './landingPage';
import heart from '../assets/body/heart.png';
// import frame from '../assets/body/frame.png';
import vector from '../assets/body/vector.png';
import Bodyy from './body';

const Body = () => {
  return (
    <div>
      <Bodyy />
      <div className={style.bdy}>
        <center>
          <strong>
            {' '}
            <span className={style.clt}>Vibrant Culture</span>
          </strong>
          <br></br>
          <h2 className={style.mngnt}>The Gym College Students Management</h2>
          <br></br>
          <br></br>
          <div className={style.secondBody}>
            <div className={style.one}>
              <h2>
                <img src={heart} width={50} height={30}></img> Digital transformation
              </h2>
              <br></br>
              <label>
                Digital transformation empowers students with tools and skills that extend beyond
                technical proficiency, fostering a learning environment where ethical digital
                citizenship and proper online conduct become the bedrock of their future success in
                an increasingly connected world
              </label>
            </div>
            <div className={style.two}>
              <h2>
                <img src={vector} width={50} height={30}></img> Disciplined and Productive
              </h2>
              <br></br>
              <p>
                Discipline in time, as well as discipline in all matters and possessions. Organized
                and able to manage their agenda/activities so that all their time can be valuable
                and beneficial
              </p>
            </div>
            <div className={style.three}>
              <h2>{/* <img src={frame} width={50} height={30}></img> Race Towards Goodness */}</h2>
              <br></br>
              <p>
                Competing and striving in goodness. Having speed and accuracy in doing good deeds.
                Trained to act swiftly in matters, completing tasks quickly and efficiently
              </p>
            </div>
          </div>
        </center>
      </div>
      <Galleries />
    </div>
  );
};

export default Body;
