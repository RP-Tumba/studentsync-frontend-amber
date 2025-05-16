
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import './App.css';
import Footer from './components/Footer';
import StudentDetails from './pages/StudentDetails';
import Addstudent from './components/AddStudent';
import Navbar from './components/Navbar';
import Body from './components/landing2';
import StudentTable from './components/studentTable';
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/student/:id" element={<StudentDetails />} />
            <Route path="/allstudent" element={<StudentTable />} />
            <Route path="/addstudent" element={<Addstudent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
};

export default App;
