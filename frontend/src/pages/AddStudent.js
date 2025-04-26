import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentForm from '../components/StudentForm';
import { createStudent } from '../api';

function AddStudent() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createStudent(formData);
      toast.success('Student added successfully');
      setTimeout(() => {
        navigate('/students');
      }, 2000);
    } catch (error) {
      console.error('Error adding student:', error);
      toast.error('Failed to add student');
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3>Add New Student</h3>
            </div>
            <div className="card-body">
              <StudentForm onSubmit={handleSubmit} buttonText="Add Student" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;