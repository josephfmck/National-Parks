import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
//main layout of all pages
import Layout from './components/Layout';
//route pages
import Home from './components/Home';



//add Routes, start with path "/" and <Layout/> with <Home/> 
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
