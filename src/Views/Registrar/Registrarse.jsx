import React from 'react'

import Styles from "./Registrarse.module.css"

import { Link, useNavigate } from 'react-router-dom'

export const Registrarse = () => {
  const navigate = useNavigate()

  const isSubmit = () => {
    navigate("/")
  }
  
  return (
    <div className={Styles.Container}>
      <div className={Styles.ContainerForm}>
        <form>
            <h2>Registrarse</h2>

            <label>Email</label>
            <input placeholder='Enter your Email'></input>

            <label>Password</label>
            <input placeholder='Enter your Password'></input>

            <Link to={'/login'} className={Styles.Registrar}>
              <span >You do have an account?</span>
            </Link>
            
            <button onClick={isSubmit}>Enter</button>
        </form>
    </div>
    </div>
  )
}
