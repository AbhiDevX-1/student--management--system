import React, { useState, useEffect } from 'react';

function StudentForm({ student, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enrollmentNo: '',
    course: '',
    active: true,
    dateOfBirth: ''
  });

  useEffect(() => {
    if (student) {
      // Convert dateOfBirth to yyyy-mm-dd string if it exists
      const dob = student.dateOfBirth
        ? new Date(student.dateOfBirth).toISOString().split('T')[0]
        : '';
      setFormData({ ...student, dateOfBirth: dob });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="enrollmentNo" className="form-label">Enrollment Number</label>
        <input
          type="text"
          className="form-control"
          id="enrollmentNo"
          name="enrollmentNo"
          value={formData.enrollmentNo}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="course" className="form-label">Course</label>
        <input
          type="text"
          className="form-control"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="active"
          name="active"
          checked={formData.active}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="active">Active</label>
      </div>

      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
        <input
          type="date"
          className="form-control"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">{buttonText || 'Submit'}</button>
    </form>
  );
}

export default StudentForm;
