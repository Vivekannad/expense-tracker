import React from 'react'

const Section = ({text , balance , color}) => {
  return (
    <div className='section'>
        <p>{text}</p>
        <p style={{"color" : color }}>${balance}</p>
    </div>
  )
}

export default Section