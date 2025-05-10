import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Task Board</h1>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/create-task" className="nav-link">Create Task</Link>
        <Link to="/tasks" className="nav-link">Tasks</Link>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 