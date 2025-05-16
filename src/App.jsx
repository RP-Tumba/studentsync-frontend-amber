import StudentTable from './components/studentTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import './App.css';
import Footer from './components/Footer';
import StudentDetails from './pages/StudentDetails';
import Body from './components/landing2';

const App = () => {
  return (
    <Router>
      <div className="app-container">
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
