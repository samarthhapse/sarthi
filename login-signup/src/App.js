import React, { useState } from 'react';
import './App.css';

function App() {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    field: '',
    college: '',
    jobTitle: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit signup data to the server or store it locally
    console.log(signupData);
  };

  return (
    <div className="App">
      <h1>Login/Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={signupData.name} onChange={handleInputChange} required />
        </label><br />
        <label>
          Email:
          <input type="email" name="email" value={signupData.email} onChange={handleInputChange} required />
        </label><br />
        <label>
          Phone:
          <input type="text" name="phone" value={signupData.phone} onChange={handleInputChange} required />
        </label><br />
        <label>
          Expertise:
          <input type="text" name="expertise" value={signupData.expertise} onChange={handleInputChange} required />
        </label><br />
        <label>
          Field:
          <input type="text" name="field" value={signupData.field} onChange={handleInputChange} required />
        </label><br />
        <label>
          College:
          <input type="text" name="college" value={signupData.college} onChange={handleInputChange} required />
        </label><br />
        <label>
          Job Title:
          <input type="text" name="jobTitle" value={signupData.jobTitle} onChange={handleInputChange} required />
        </label><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
