import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentForm from '../components/StudentForm';
import { getStudentById, updateStudent } from '../api';

function EditStudent() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentById(id);
        setStudent(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student:', error);
        toast.error('Failed to fetch student details');
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await updateStudent(id, formData);
      toast.success('Student updated successfully');
      setTimeout(() => {
        navigate('/students');
      }, 2000);
    } catch (error) {
      console.error('Error updating student:', error);
      toast.error('Failed to update student');
    }
  };

  if (loading) {
    return <div className="container mt-5 text-center"><h2>Loading...</h2></div>;
  }

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h3>Edit Student</h3>
            </div>
            <div className="card-body">
              {student ? (
                <StudentForm 
                  student={student} 
                  onSubmit={handleSubmit} 
                  buttonText="Update Student" 
                />
              ) : (
                <div className="alert alert-danger">Student not found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;