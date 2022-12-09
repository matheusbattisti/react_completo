import { Link } from "react-router-dom";

// 12 - link ativo
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="contact">Contatos</Link> */}
      {/*  */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contatos
      </NavLink>
    </div>
  );
};

export default Navbar;
