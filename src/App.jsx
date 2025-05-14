import StudentTable from "./components/studentTable";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import './App.css';
import Footer from './components/Footer';
import StudentDetails from './pages/StudentDetails';



const App = () => {
  return (
    <Router>
      <div className="app-container">

        <main className="main-content">

          <Routes>
            <Route path="/" element={<StudentDetails />} />
            
          </Routes>

        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
