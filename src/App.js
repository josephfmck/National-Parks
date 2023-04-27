//*Routing Pages
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//*route pages
import Home from './pages/Home';
import Park from './pages/Park';


//add Routes, start with path "/" and <Layout/> with <Home/> 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/park/:parkCode" element={<Park/>} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
