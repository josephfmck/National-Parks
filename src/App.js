//*Routing Pages
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//*route pages
import Home from './pages/Home';
import Park from './pages/Park';

//! old pages
// import Home from './components/Home';
// import ParkPage from './components/ParkPage';



//add Routes, start with path "/" and <Layout/> with <Home/> 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/park/:parkCode" element={<Park/>} /> */}
          <Route path="/park" element={<Park/>} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
