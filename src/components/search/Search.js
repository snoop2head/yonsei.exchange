import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { navigate } from 'gatsby'

const Search = ({ value, onChange, location }) => {
  const handlePress = e => {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  const handleBlur = e => {
    if (location.search !== `?query=${value.trim()}`)
      navigate(`?query=${value.trim()}`)
  }

  return (
    <div>
      <div>
        <AiOutlineSearch />
        <input
          placeholder={'검색어를 입력해주세요.'}
          value={value}
          onChange={onChange}
          onKeyPress={handlePress}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

export default Search
