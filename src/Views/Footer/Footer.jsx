import React from 'react'

import { Link} from "react-router-dom"

import styles from "./Footer.module.css"


const Footer = () => {
  return (
    <div className={styles.Conteiner}>
      <p> © Copyright Tu Mate - 2023 </p>

      <p> 
        Creado por <Link to={"https://portfolio-gabriel20arr.vercel.app/"}
          className={styles.G_A}
        > 
          🔗G.A 
        </Link>
      </p>

      <p> Todos los derechos reservados </p>
    </div>
  )
}

export default Footer