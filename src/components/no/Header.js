import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
 
  return (
    <div className="black-nav">
      <Link to="/" style={{textDecoration: 'none'}}>
        {
          location.pathname === '/' ? <h4>LIJ</h4> : <h4>About</h4>
        }
      </Link>
    </div>
  )
}

export default Header