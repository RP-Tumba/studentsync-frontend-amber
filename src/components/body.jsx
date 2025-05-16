import style from './body1.module.css';
import people from '../assets/body/people.png';

const Bodyy = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.intro}>
          <h2>Students managements platform</h2>
          <h1>STUDENTSYNC MANAGEMENT WEB APP</h1>
          <h2 style={{ color: '#d97706' }}>Students for academic year 2025/2026</h2>
          <div className={style.Nav}>
            <button className={style.but1}>Learn More</button>
            <button className={style.but2}>All Students</button>
          </div>
        </div>
        <div className={style.photo}>
          <img src={people} />
        </div>
      </div>
    </>
  );
};

export default Bodyy;
//hello
