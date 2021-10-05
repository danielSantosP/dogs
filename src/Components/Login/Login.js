import React from 'react'
import { Outlet } from 'react-router'
import styles from './Login.module.css'
const Login = () => {
  return (
    <div className={styles.login}>
    <Outlet />
    </div>
  )
}

export default Login
