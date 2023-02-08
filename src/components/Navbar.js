import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../img/Logo.svg";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useLocation();

  function getToken() {
    if (!localStorage.getItem("token")) return false;
    else return true;
  }

  React.useEffect(() => {
    setLoggedIn(getToken());
  }, [navigate]);

  async function logOut() {
    localStorage.clear();
  }

  const links = [
    {
      name: "About Us",
      route: "/",
    },
    {
      name: "Categories",
      route: "/all",
    },
    {
      name: "News",
      route: "/",
    },
    {
      name: "Survey",
      route: "/survey",
    }
  ];

  const [sidebar, setSidebar] = useState(false);

  const toggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav>
      <div className="bg-slate-50 flex justify-between items-center first-line:gap-10 px-5 py-3">
        <div className="nav-item">
          <Link to="/" className="logo">
            <Logo />
          </Link>
        </div>
        <div className="hidden md:flex font-inter text-sm justify-center gap-10 lg:gap-20">
          {links.map((link) => (
            <Link key={link.name} to={link.route} className="text-gray-800">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex gap-4">
          <div className="flex justify-center items-center border py-2 px-5">
            {!loggedIn && <Link to="/login" className="text-black text-sm">Login</Link>}

            {loggedIn && (
              <Link to="/" className="text-black text-sm" onClick={logOut}>
                Logout
              </Link>
            )}
          </div>
          <div>
            {localStorage.getItem("token") && (
              <div className="flex justify-center items-center bg-black border py-2 px-5">
                <Link to="/create" className="text-sm text-white hover:text-amber-400">Create</Link>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          {!sidebar ? (
            <FaBars onClick={toggle} />
          ) : (
            <IoClose onClick={toggle} />
          )}
        </div>
      </div>

      {sidebar ? (
        <div className="fixed w-3/5 h-full right-0 z-20 bg-slate-100">
          <div className="flex flex-col pt-10 items-center font-inter text-md gap-20 text-gray-800">
            {links.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.route}
                  className="text-gray-600"
                  onClick={toggle}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;
