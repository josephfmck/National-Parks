//* bootstrap components 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


import './index.scss';



//add Routes, start with path "/" and <Layout/> with <Home/> 
function Home() {
  return (
    <Container className="p-3">
      <Card>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      </Card>
    </Container>
  );
}

export default Home;
