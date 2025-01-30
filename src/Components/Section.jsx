import React from 'react'

const Section = ({ text, balance, color }) => {
  return (
    <div className='section'>
      {/* Display the section label */}
      <p>{text}</p>
      {/* Display the balance with the specified color */}
      <p style={{ color: color }}>${balance}</p>
    </div>
  );
}

export default Section;

