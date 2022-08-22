import './sass/styles.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>

            <li>
              <Link to="/"></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={}  />
          <Route path="/" element={} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
