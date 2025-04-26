import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Student Management System</h1>
        <p className="lead">
          A comprehensive system to manage student records using the MERN stack.
        </p>
        <hr className="my-4" />
        <p>
          This application allows you to add, view, edit, and delete student records.
        </p>
        <Link to="/students" className="btn btn-primary btn-lg me-2">
          View Students
        </Link>
        <Link to="/add-student" className="btn btn-success btn-lg">
          Add New Student
        </Link>
      </div>
    </div>
  );
}

export default Home;