import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryCards from './components/CategoryCards';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <CategoryCards />
        <SearchBar />
      </div>
    </Router>
  );
}

export default App;
