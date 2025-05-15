import style from './AddStudent.module.css';

const Add = () => {
  return (
    <>
      <div className={style.flex}>
        <div className={style.head}>
          {' '}
          <div className="text">
            <h2>
              <img />
              STUDENTSYNC
            </h2>
            <h3>Add student</h3>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.one}>
            <label>
              First Name
              <br />
            </label>
            <input type="text" />
          </div>
          <div className={style.two}>
            <label>
              Last Name
              <br />
            </label>
            <input type="text" />
          </div>
          <div className={style.three}>
            <label>
              Date of Birth
              <br />
            </label>
            <input type="date" />
          </div>
          <div className={style.four}>
            <label>
              Student ID
              <br />
            </label>
            <input type="text" />
          </div>
          <div className={style.five}>
            <label>
              Email
              <br />
            </label>
            <input type="email" />
          </div>
          <div className={style.six}>
            <label>
              Contact Number
              <br />
            </label>
            <input type="phone" />
          </div>
          <div className={style.seven}>
            <label>
              Enrollment Date
              <br />
            </label>
            <input type="date" />
          </div>
          <div className={style.butto}>
            <button className={style.add}>Add</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
