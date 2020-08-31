import React from 'react'
import { FaSearch } from 'react-icons/fa'

import './index.scss'

export const GitHubIcon = () => {
  return (
    <a
      href="https://github.com/snoop2head/yonsei-exchange-program"
      className="github"
      aria-label="GitHub"
    >
      <FaSearch fontSize="large" style={{ color: 'white' }} />
    </a>
  )
}
