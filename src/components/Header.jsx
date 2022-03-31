import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login / Criar Login</Link>
      </nav>
    </div>
  )
}

export default Header