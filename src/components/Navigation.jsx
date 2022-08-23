import { Link } from "react-router-dom";

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