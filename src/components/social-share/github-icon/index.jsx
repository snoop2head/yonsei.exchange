import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import './index.scss'

export const GitHubIcon = () => {
  return (
    <a
      href="https://github.com/snoop2head/yonsei-exchange-program"
      className="github"
      aria-label="GitHub"
    >
      <AiOutlineSearch fontSize="large" color="secondary" />
    </a>
  )
}
