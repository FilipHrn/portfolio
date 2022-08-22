import './sass/styles.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import selfie from './images/picture-of-me.jpg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

import About from './components/About';
import Education from './components/Education';
import WorkExp from './components/WorkExp';

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
        
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <Link to="/education">Education</Link>
            </li>

            <li>
              <Link to="/work-experience">Work Experience</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={ <About /> }  />
          <Route path="/education" element={ <Education /> } />
          <Route path="/work-experience" element={ <WorkExp /> } />
        </Routes>

      </div>
    </Router>
  );
}

export default App;