import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import About from './About';
import Education from './Education';
import WorkExp from './WorkExp';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={ <About /> }  />
        <Route path="/education" element={ <Education /> } />
        <Route path="/work-experience" element={ <WorkExp /> } />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes