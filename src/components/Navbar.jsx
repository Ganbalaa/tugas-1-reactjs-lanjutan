import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <NavLink to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
          <i className="fa-solid fa-book-open fs-4 text-primary me-2"></i>
          <span className="fs-4 fw-bold text-primary">Ganbook</span>
        </NavLink>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link px-2 text-primary fw-bold" : "nav-link px-2 text-dark"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/book" className={({ isActive }) => isActive ? "nav-link px-2 text-primary fw-bold" : "nav-link px-2 text-dark"}>
            Book
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" className={({ isActive }) => isActive ? "nav-link px-2 text-primary fw-bold" : "nav-link px-2 text-dark"}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link px-2 text-primary fw-bold" : "nav-link px-2 text-dark"}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Register</button>
      </div>
    </header>
  );
}