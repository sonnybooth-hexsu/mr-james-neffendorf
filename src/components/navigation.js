import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <Link to="/">
      James Neffendorf
    </Link>
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/">
          About
        </Link>
      </li>
      <li>
        <Link to="/">
          Research Interests
        </Link>
      </li>
      <li>
        <Link to="/">
        Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
