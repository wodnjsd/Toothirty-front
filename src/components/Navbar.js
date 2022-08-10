import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const NavBar = () => {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const navigate = useLocation()

  function getToken() {
    if (!localStorage.getItem('token')) return false
    else return true

  }

  React.useEffect(() => {
    setLoggedIn(getToken())
  }, [navigate])

  async function logOut() {
    localStorage.clear()
  }

  return <nav className="navbar" role="navigation" aria-label="main navigation">
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
        {!loggedIn && <Link to="/login" className="button is-ghost">
          Login
        </Link>}
        {loggedIn && <Link to="/" className="button is-ghost"
          onClick={logOut}>
          Logout
        </Link>}
        {(localStorage.getItem('token')) &&
          <Link to='/create' className="button is-ghost">
            Create
          </Link>}
      </div>

    </div>

  </nav>

}

export default NavBar