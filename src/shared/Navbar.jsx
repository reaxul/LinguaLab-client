import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/classes"}>Classes</Link>
      </li>
      <li>
        <Link to={"/instructors"}>Instructors</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
          <img src="WevName.png" className="w-36 md:w-56" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ? (
                      user.photoURL
                    ) : (
                      <FaRegUserCircle></FaRegUserCircle>
                    )
                  }
                  title={user?.displayName}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">Active</span>
                </a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button
              style={{ backgroundColor: "#1D424F", color: "white" }}
              className="btn "
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
