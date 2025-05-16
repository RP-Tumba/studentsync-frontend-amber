import StudentTable from './components/studentTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import './App.css';
import Footer from './components/Footer';
import StudentDetails from './pages/StudentDetails';
import Add from './components/AddStudent';
import Navbar from './components/Navbar';
import Body from './components/landing2';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/all" element={<StudentTable />} />

            <Route path="/add" element={<Add />} />

            <Route path="/home" element={<StudentTable />} />
        <main className="main-content">
          <Body />
          <Routes>
            <Route path="/" element={<StudentTable />} />
            <Route path="/student/:id" element={<StudentDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
