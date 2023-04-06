import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
//Redux
import { store } from './app/store';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container);






//router for paths to different pages
//?add browser router to wrap around App
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
