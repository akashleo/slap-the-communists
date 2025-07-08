import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SelectionPage from './components/SelectionPage';
import SlapPage from './components/SlapPage';
import CreatorSection from './components/CreatorSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select" element={<SelectionPage />} />
          <Route path="/slap/:leaderId" element={<SlapPage />} />
          <Route path="/creator" element={<CreatorSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;