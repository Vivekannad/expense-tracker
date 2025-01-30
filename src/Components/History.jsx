import React from 'react'

const History = ({text, money, type}) => {
  return (
    <div
      className='history-section'
      // Add a border to the right side of the component
      // based on the type of the transaction
      style={{
        borderRight: `${type === "expense" ? "3px solid red" : "3px solid green"}`,
      }}
    >
      {/* Display the description of the transaction */}
      <p>{text}</p>
      {/* Display the amount of the transaction */}
      <p className="money">${money}</p>
    </div>
  );
};

export default History