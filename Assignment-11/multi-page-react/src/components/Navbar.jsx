import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Multi-Page App</h1>

        <div className="space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold border-b-2 border-white pb-1"
                : "hover:text-gray-200 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold border-b-2 border-white pb-1"
                : "hover:text-gray-200 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "font-semibold border-b-2 border-white pb-1"
                : "hover:text-gray-200 transition"
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
