import React from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import WorkoutPage from './components/WorkoutPage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PricePage from './components/PricePage';
import Login from './components/Login';
import About from './components/About';
import DarkThemeToggle from './components/DarkThemeToggle'; // Import the DarkThemeToggle component
function App() {
  return (
    <Router>
      <div>
        
        <HamburgerMenu />
        <Navbar />
        
        <div className="title">fitness</div>
        
        

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pricing" element={<PricePage />} />
          <Route path='/about' element={<About/>}/>
        </Routes>

        <DarkThemeToggle /> {/* Include the DarkThemeToggle button */}
      </div>
    </Router>
  );
}

export default App;
