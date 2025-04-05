import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryCards from './components/CategoryCards';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <CategoryCards />
      </div>
    </Router>
  );
}

export default App;
