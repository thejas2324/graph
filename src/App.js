import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import PlotGraph from './Components/PlotGraph';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Graph Plotter</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/plot-graph">Plot Graph</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mt-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plot-graph" element={<PlotGraph />} />
        </Routes>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p>&copy; 2024 Graph Plotter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
