import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <h2 className="text-2xl font-extrabold">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-semibold  border-2 border-green-500 px-3 py-2 rounded-md"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-semibold  border-2 border-green-500 px-3 py-2 rounded-md"
                    : ""
                }
                to="/books"
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-semibold  border-2 border-green-500 px-3 py-2 rounded-md"
                    : ""
                }
                to="/page"
              >
                Page to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 rounded-xl outline-none">
          <button className="btn btn-sm md:btn-md bg-[#23BE0A] text-white text-xs md:text-sm">
            Sign In
          </button>
          <button className="btn btn-sm md:btn-md bg-[#59C6D2] text-white text-xs md:text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
