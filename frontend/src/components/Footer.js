import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white p-3 mt-5">
      <div className="container text-center">
        <p>Student Management System &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;