import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArchivePage from './pages/archive';
import AboutPage from './pages/abouttheclub';
import EventsPage from './pages/hackathoninfo';

function App() {
  return (
    <div className="App">
        <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<EventsPage/>}>
            </Route>
            <Route path="/archive" element={<ArchivePage/>}>
            </Route>
            <Route path="/about" element={<AboutPage/>}>
            </Route>
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
