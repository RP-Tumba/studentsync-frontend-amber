import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './pages/StudentList';
import './App.css';
import Footer from './components/Footer';
import Add from './components/AddStudent';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Add />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
