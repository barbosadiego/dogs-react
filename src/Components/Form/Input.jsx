import React from 'react'
import './Input.css'

const Input = ({label, type, name}) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={name} className='input-label'>{label}</label>
      <input id={name} name={name} className='input-input' type={type}/>
      <p className='input-error'>Error</p>
    </div>
  )
}

export default Input
