import React from 'react'

const Section = ({text , balance}) => {
  return (
    <div className='section'>
        <p>{text}</p>
        <p>${balance}</p>
    </div>
  )
}

export default Section