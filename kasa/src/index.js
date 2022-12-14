import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Annonces from './data/Annonces.json';
import { Home } from './pages/Home/Home';
import { Details } from './pages/Details/Details';
import { Annonce } from './pages/Annonce/Annonce';
import { Error } from './components/Error/Error';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home annonces={Annonces} />} />
        <Route exact path="/details" element={<Details />} />
        <Route
          exact
          path="/annonces/:annonceId"
          element={<Annonce annonces={Annonces} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
