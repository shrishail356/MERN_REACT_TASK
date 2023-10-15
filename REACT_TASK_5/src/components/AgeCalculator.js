import React, { useState } from 'react';
import './AgeCalculator.css'; // Import the CSS file for styling

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateArray = birthDate.split('-');
    const dob = new Date(birthDateArray[0], birthDateArray[1] - 1, birthDateArray[2]);
    const now = new Date();

    const diff = now - dob;
    const ageDate = new Date(diff);

    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  };

  return (
    <div className="age-calculator-container">
      <h1 className="title">Age Calculator</h1>
      <p className="label">Enter your date of birth:</p>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="date-input"
      />
      <button onClick={calculateAge} className="calculate-button">
        Calculate Age
      </button>
      {age !== null && <p className="result">You are {age} years old.</p>}
    </div>
  );
}

export default AgeCalculator;
