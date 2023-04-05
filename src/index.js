import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery/Gallery';
import Main from './components/Main/Main';
import Active from './components/Active/Active';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gallery />
    <Main />
    <Active />
  </React.StrictMode>
);

