import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DPA from './pages/DPA';
import Emails from './pages/Emails';
import Fandango from './pages/Fandango';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/DPA' element={<DPA />} /> {/* Use element prop to render component */}
        <Route path='/' element={<App />} /> {/* Use element prop to render component */}
        <Route path='/Emails' element={<Emails />} /> {/* Use element prop to render component */}
        <Route path='/Fandango' element={<Fandango />} /> {/* Use element prop to render component */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
