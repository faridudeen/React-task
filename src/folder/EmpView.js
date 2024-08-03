import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 
export const Empview = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      employeeName: 'Ajith Kumar',
      mobileNumber: '9876543210',
      location: 'Kovilpatti',
      qualifications: [
        { id: 1, qualification: 'HSC ABCD SCHOOL', percentage: '76%' },
        { id: 2, qualification: 'ABCD COLLAGE OF ENG', percentage: '80%' },
      ],
    },
    {
      id: 5,
      employeeName: 'Naveen',
      mobileNumber: '8765432768',
      location: 'Kovilpatti',
      qualifications: [],
    },
    {
      id: 6,
      employeeName: 'Prasath',
      mobileNumber: '98765439876',
      location: 'Kovilpatti',
      qualifications: [],
    },
  ]);

  const handleAddEmployee = () => {
    // Implement logic to add a new employee
  };

  const handleDeleteEmployee = (employeeId) => {
    setEmployees(employees.filter((employee) => employee.id !== employeeId));
  };

  const handleAddQualification = (employeeId) => {
    // Implement logic to add a new qualification for the employee
  };

  const handleDeleteQualification = (employeeId, qualificationId) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === employeeId
          ? {
              ...employee,
              qualifications: employee.qualifications.filter(
                (qualification) => qualification.id !== qualificationId
              ),
            }
          : employee
      )
    );
  };

  return (
    <div className='containerTable'>
        <div className='head'>
      <h2>Employee View</h2>
      </div>



      <table className=' tableStyle'>
        <thead >
          <tr className='tableBox'>
            <th >SNo</th>
            <th>Employee Name</th>
            <th>Mobile Number</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className='tableBox'>
              <td>{employee.id}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.mobileNumber}</td>
              <td>{employee.location}</td>
              <td>
                <button onClick={() => handleDeleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <button onClick={handleAddEmployee}>Add New</button>
      <div className='head'>
      <h3>Qualifications</h3>
      </div>


      {employees.map((employee) => (
        <div key={employee.id}>
          <h4>{employee.employeeName}</h4>
          <table className='tableStyle'>
            <thead className='tableBox'>
              <tr>
                <th>S.No</th>
                <th>Qualifications</th>
                <th>Presentage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.qualifications.map((qualification) => (
                <tr key={qualification.id}>
                  <td>{qualification.id}</td>
                  <td>{qualification.qualification}</td>
                  <td>{qualification.percentage}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleDeleteQualification(
                          employee.id,
                          qualification.id
                        )
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => handleAddQualification(employee.id)}>
            Add Qualification
          </button>
         
        </div>
        
      ))}
       <div>
          <Link to="/Register"><h1>New Register</h1></Link>
          </div>
    </div>
  );
};


