import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));





//router for paths to different pages
//?add browser router to wrap around App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
