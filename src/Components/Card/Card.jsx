import React, { useState } from 'react'

import styles from "./Card.module.css"
import { CartContext } from '../../Context/Context'

// import { Productos } from '../../dataProduct'

export const Card = ({id, Title, Img1, Img2, Description, Price, Peso, Altura, Quantity}) => {
  
  const [cart, setCart] = useState(CartContext)

  const addCart = () => {
    setCart((currItems) => {
      // Primero busco si ya esta agregado el item
      const isCurrItems = currItems.find(item => item.id === id)
      // Si esta aumentamos su cantidad
        if(isCurrItems) {
          return currItems.map((item) => {
            if(item.id === id){
              return {...item, Quantity: item.Quantity + 1}
            } else {
              return item;
            }
          })
        } else {
          // sino esta retornamos el item
          return [...currItems, {id, Quantity: 1, Price }];
        }
    })
    
  }

  const removeItem = () => {

    setCart((currItems)=> {
      if(currItems.find((item) => item.id === id)?.Quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if(item.id === id) {
            return {...item, Quantity: item.Quantity - 1}
          } else {
            return item;
          }
        })
      }
    })
  }
  
  return (
     <div className={styles.Container}>
      <div className={styles.Container2}>
     
         <div key={id} className={styles.containerB}>
           <h2 className={styles.span0}>{Title}</h2>
 
           <div className={styles.imagenContainer}>
                  <img
                    src={Img1}
                    alt="Imagen normal"
                    className={`${styles.span1} ${styles.imagen}`}
                  />
                  <img
                    src={Img2}
                    alt="Imagen hover"
                    className={`${styles.span1} ${styles.imagen} ${styles.imagenHover}`}
                  />
            </div>
 
           <button className={styles.btn} onClick={()=> addCart()}>Add carts</button>

           {/* <p className={styles.span2}>{Description}</p> */}
           
           <p>Precio: {Price}</p>

           <p>Cantidad: {Quantity}</p>

           {/* { 
            (Peso) ? <p>Peso: {Peso}Kg</p> 
              : 
            <p>Altura: {Altura} cm</p>
           } */}

 
         </div>

     </div>
    </div>
  )
}
