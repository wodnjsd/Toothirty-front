import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/all" className="button is-dark">
              Categories
            </Link>
            <Link to="/login" className="button is-light">
              Login
            </Link>
            <Link to='/create' className="button is-primary">
              Create
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default NavBar