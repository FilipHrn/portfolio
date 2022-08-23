import { motion } from 'framer-motion';

function Education() {
  return(
    <motion.div
      initial={{ opactity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ul>
        <li>
          <ul>
            <li>
              Front-End Developer, Noroff School of Technology &amp; Digital Media
            </li>

            <li>
              2018-2022, Higher Education, 2 years
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              2012-2016, Medier og Kommunikasjon, Bergeland Videregående Skole
            </li>

            <li>
              High School, 3 years
            </li>
          </ul>
        </li>
      </ul>
    </motion.div>
  )
}

export default Education