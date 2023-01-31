import React from 'react';
//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


import './App.css';



//add Routes, start with path "/" and <Layout/> with <Home/> 
function App() {
  return (
    <Container className="p-3">
      <Card>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      </Card>
    </Container>
  );
}

export default App;
