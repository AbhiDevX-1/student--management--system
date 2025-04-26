import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-white text-decoration-none">
            <h1>Student Management System</h1>
          </Link>
          <nav>
            <Link to="/" className="btn btn-outline-light me-2">Home</Link>
            <Link to="/students" className="btn btn-outline-light me-2">Students</Link>
            <Link to="/add-student" className="btn btn-primary">Add Student</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;