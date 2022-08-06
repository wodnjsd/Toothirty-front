import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-active">
      <div className="navbar-start">
        <div className="navbar-item">
          <Link to="/" className="logo">
            2:30

          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <Link to="/all" className="button is-ghost">
          Categories
        </Link>
        <Link to='/survey' className="button is-ghost">
          Survey
        </Link>
        <Link to="/login" className="button is-ghost">
          Login
        </Link>
        <Link to='/create' className="button is-ghost">
          Create
        </Link>
      </div>

    </div>


  </nav>
}

export default NavBar