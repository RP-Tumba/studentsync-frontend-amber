import style from './Body.module.css';
import laugh from '../assets/body/laugh.jpg';
import sports from '../assets/body/sports.jpg';
import remember from '../assets/body/remember.jpg';
import Body from './body';

const Galleries = () => {
  return (
    <div className={style.all}>
      <Body />
      <center>
        <strong>
          <span className={style.spn}>Gallery</span>
        </strong>
        <br></br>
        <h4 className={style.hInB}>The Gym College Students LifeStyle</h4>
        <br></br>
        <br></br>
        <div className={style.linkGym}>
          <a href="">All</a>
          <a href="">Foundation Period</a>
          <a href="">Sports Culture</a>
          <a href="">Project Phase</a>
        </div>
        <br></br>
        <br></br>
        <div className={style.imgy}>
          <div>
            <img src={laugh} width={350} height={200}></img>{' '}
          </div>
          <div>
            <img src={sports} width={350} height={200}></img>{' '}
          </div>
          <div>
            <img src={remember} width={350} height={200}></img>{' '}
          </div>
        </div>
      </center>
    </div>
  );
};

export default Galleries;
