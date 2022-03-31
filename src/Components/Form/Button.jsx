import React from 'react'
import './Button.css'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className='button-button'>
      {children}
    </button>
  )
}

export default Button
