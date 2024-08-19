import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to use createRoot
import Home from './js/component/Home'; // Adjust the path to Home.jsx
import './styles/index.css'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
