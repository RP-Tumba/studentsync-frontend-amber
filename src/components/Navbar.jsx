import style from './navbar.module.css';

const Navbar = () => {
  return <nav className={style.nav}>
    
      <h2>STUDENTSYNC</h2>
      <div className={style.all}>
      <a href='' className={style.one}>Home</a>
      <a href='' className={style.two}>Add student</a>
      <a href='' className={style.three}>All students</a>
      </div>
    
  </nav>;
  
};

export default Navbar;
