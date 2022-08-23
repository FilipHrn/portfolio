import './sass/styles.scss';

import {
  BrowserRouter as Router
} from "react-router-dom";

import selfie from './images/picture-of-me.jpg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

import Navigation from './components/Navigation';
import AnimatedRoutes from './components/AnimatedRoutes';



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Router>
      <div>
        <Image src={selfie} fluid />
        <Button>Projects</Button>
        
        <Navigation />

        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;