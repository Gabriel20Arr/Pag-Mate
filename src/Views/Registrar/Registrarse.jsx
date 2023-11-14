import React from 'react'

import Styles from "./Registrarse.module.css"

import { Link } from 'react-router-dom'

export const Registrarse = () => {
  return (
    <div className={Styles.Contenedor}>
        <Link to={"/login"}>
            Login
        </Link>
        <h1>Content registrarse</h1>
    </div>
  )
}
