import React from 'react'

const History = ({text , money , type}) => {
  return (
    <div className='history-section'
     style={{"borderRight" : `${type === "expense" ? "3px solid red " : "3px solid green"}`}}
     >
        <p>{text}</p>
        <p className="money">${money}</p>
    </div>
  )
}

export default History