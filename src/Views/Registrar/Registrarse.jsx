import React from 'react'
import { Link } from 'react-router-dom'

export const Registrarse = () => {
  return (
    <div>
        <Link to={"/login"}>
            Login
        </Link>
        <h1>Content registrarse</h1>
    </div>
  )
}
