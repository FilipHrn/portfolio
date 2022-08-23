import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation() {
  return (
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
  )
}
export default Navigation