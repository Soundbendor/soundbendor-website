import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Navigation,
  Footer,
  Home,
  About,
  Team,
  Projects,
  Publications,
  Articles,
  Article,
  News,
  Events,
  Event,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/publications" element={<Publications />}>
        <Route path="" element={<Articles />} />
        <Route path=":articleSlug" element={<Article />} />
      </Route>
      <Route path="/News" element={<News />}>
        <Route path="" element={<Events />} />
        <Route path=":eventSlug" element={<Event />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);

/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
