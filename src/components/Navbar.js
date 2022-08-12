import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from '../img/Logo.svg'

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

  return <section className="navs">
    <div className="nav-item">
      <Link to="/" className="logo">
        <Logo />

      </Link>
    </div>
    <div className="nav-main">
      <Link to='/' className="nav-item">
        About Us
      </Link>
      <Link to='/all' className="nav-item">
        Categories
      </Link>
      <Link to="/" className="nav-item">
        News
      </Link>
      <Link to='/survey' className="nav-item">
        Survey
      </Link>
    </div>
    <div className="nav-end">
      <button className="login">
        {!loggedIn && <Link to="/login">
          Login
        </Link>}
      </button>

      {loggedIn && <button className='login'>
        <Link to="/"
          onClick={logOut}>
          Logout
        </Link>
      </button>}

      {(localStorage.getItem('token')) &&
        <button>
          <Link to='/create' className="nav-item">
            Create
          </Link>
        </button>}

    </div>
  </section>

}

export default NavBar