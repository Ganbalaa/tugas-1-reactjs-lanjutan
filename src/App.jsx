import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="container sticky-top bg-white">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/book" className="nav-link px-2 text-body-secondary">Book</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link px-2 text-body-secondary">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2026 NF Academy</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;