import React, {useState} from 'react'

import styles from "./Mate.module.css"
import { Productos } from "../../dataProduct"

export const Mate = () => {
  const [openImg, setOpenImg] = useState(false);
  
  const  toggleImg = () => {
    setOpenImg(!openImg)
  }

  return (
    <div className={styles.Cmate}>
     <div className={styles.Cmate2}>
    
      {Productos.map((producto, index) => (
        <div key={index} className={styles.container}>
          <h2 className={styles.span0}>{producto.Title}</h2>

          <img 
            src={openImg ? producto.Img2 : producto.Img1}
            // src={'https://mercadoshops.ml/matesur/img/categorias/cat-mates.jpg'}
            alt='imgs' 
            className={styles.span1}
            onMouseEnter={toggleImg}
            onMouseLeave={toggleImg}
          />

          <p className={styles.span2}>{producto.Description}</p>
          
          <p>Precio: {producto.Price}</p>
          
          <p>Peso: {producto.Peso}Kg</p>

        </div>
      ))}

     </div>
    </div>
  )
}
