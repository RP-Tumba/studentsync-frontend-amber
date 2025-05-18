import style from './Nav.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav>
        <div className={style.header}>
          <div className={style.head1}>STUDENTSYNC</div>
          <div className={style.head2}>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
          <div className={style.head3}>
            <Link to="/add">
              <button>Add Student</button>
            </Link>
          </div>
          <div className={style.head4}>
            <Link to="/All">
              <button>All Student</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
