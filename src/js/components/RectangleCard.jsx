import React from 'react'

const RectangleCard = ({ text, type }) => {
  return (
    <h1 className={`${type}-card`}><div className='rectangle'></div>{text}</h1>
  )
}

export default RectangleCard