import React from 'react'

import styles from "./AllProduct.module.css"
import { Productos } from "../../dataProduct"

export const AllProduct = () => {

  // Función para reorganizar aleatoriamente un array
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  // Combina todos los objetos de los arrays de productos en un solo array
  const dataProduct = [].concat(...Productos);

  // Reorganiza aleatoriamente los productos
  const dataProductViews = shuffleArray(dataProduct).splice(0, 12);

  
  // console.log(dataProduct);

  return (
    <div id='AllProduct' className={styles.Container}>
      <div className={styles.Container2}>
     
       {dataProductViews.map((producto, index) => (
         <div key={index} className={styles.ContainerP}>
           <h2 className={styles.span0}>{producto.Title}</h2>
 
           <div className={styles.imagenContainer}>
                  <img
                    src={producto.Img1}
                    alt="Imagen normal"
                    className={`${styles.span1} ${styles.imagen}`}
                  />
                  <img
                    src={producto.Img2}
                    alt="Imagen hover"
                    className={`${styles.span1} ${styles.imagen} ${styles.imagenHover}`}
                  />
            </div>
 
           <p className={styles.span2}>{producto.Description}</p>
           
           <p>Precio: {producto.Price}</p>
           
           { 
            (producto.Peso) ? <p>Peso: {producto.Peso}Kg</p> 
              : 
            <p>Altura: {producto.Altura} cm</p>
           }
 
         </div>
      ))}

     </div>
    </div>
  )
}