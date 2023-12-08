import React from 'react'

const RectangleCard = ({ text, type }) => {
  return (
    <h2 className={`${type}-card`}><div className='rectangle'></div>{text}</h2>
  )
}

export default RectangleCard