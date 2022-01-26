import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArchivePage from './pages/archive';
import AboutPage from './pages/about';
import EventsPage from './pages/events';

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
