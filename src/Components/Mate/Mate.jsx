import React,{ useState } from 'react'

import styles from "./Mate.module.css"
import { Productos }  from "../../dataProduct"

export const Mate = () => {
  const [rotate, setRotate] = useState(false)

  const toggleRotate = () => {
    // setRotate(!rotate)
    alert('HOLA MUNDO')
  }
  
  const dataMate = Productos[1];

  return (
    <div className={styles.Cmate}> 
    {/* // <div className={`${styles.Cmate} ${rotate ? styles.rotacion : ""}`}  onclick={toggleRotate}>  */}
      <div className={styles.Cmate2}>
       {/* <button onClick={toggleRotate}>HOLA</button> */}
       {dataMate.map((producto, index) => (
         <div key={index} className={styles.container} onclick={toggleRotate}>
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
            
 
           {/* <p className={styles.span2}>{producto.Description}</p> */}
           
           <p>Precio: {producto.Price}</p>
        
           { 
            (producto.Peso) ? <p>Peso: {producto.Peso}Kg</p> 
              : 
            <p>Altura: {producto.Altura} cm</p>
           }
         </div>
      ))}
     </div>

     {/* <div className={styles.Rotate}>

       <p className={styles.RContent}>{Productos[1].Description}</p>
     
     </div> */}


    </div>
  )
}
