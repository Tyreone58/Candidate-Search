import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/candidates" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>Candidates</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;