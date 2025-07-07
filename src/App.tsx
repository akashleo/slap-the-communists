import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SelectionPage from './components/SelectionPage';
import SlapPage from './components/SlapPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select" element={<SelectionPage />} />
          <Route path="/slap/:leaderId" element={<SlapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;