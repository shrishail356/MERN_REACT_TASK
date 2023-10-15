import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users)); 
  }, []);

  const handleDomainClick = (domain) => {
    window.open('https://' + domain, '_blank');
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="table-responsive">
      <h1 className="text-center">Dummy Data</h1>
      <br></br>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  style={{ maxWidth: '50px', borderRadius: '50%' }}
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>
                <a href={`mailto:${user.email}`} onClick={(e) => e.preventDefault()}>
                  {user.email}
                </a>
              </td>
              <td>{user.username}</td>
              <td>
                <a
                  href={`https://${user.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.domain}
                </a>
              </td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
