import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <p> CopyRight &cop; 2022</p>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Footer