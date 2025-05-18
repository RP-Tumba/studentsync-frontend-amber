import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import './css/navbar.css';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleToggle = () => {
    setIsopen(!isOpen);
    console.log("hello");
  };

  const handleDisappear = () => {
    setIsopen(false);
  };

  // 👇 Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsopen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-right">
          <img src={logo} alt="logo" />
          <div onClick={handleToggle}>
            {!isOpen?<MenuIcon className="menu" />:<CloseIcon className="closed"/>}
            
          </div>
        </div>
        <div className={`nav-left ${isOpen ? 'visible' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" className="home-link" onClick={handleDisappear}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/addstudent" className="add-link" onClick={handleDisappear} >
                Add student
              </NavLink>
            </li>
            <li>
              <NavLink to="/allstudent" className="all-link" onClick={handleDisappear}>
                all students
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
