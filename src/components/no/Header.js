import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="black-nav">
      <Link to="/" style={{textDecoration: 'none'}}>
        <h4>LIJ</h4>
      </Link>
    </div>
  )
}

export default Header