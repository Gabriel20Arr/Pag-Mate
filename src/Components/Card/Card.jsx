import React, { useContext, useState } from 'react'

import styles from "./Card.module.css"
// import { cartContext } from '../../Context/DataContext'

import { Productos } from "../../dataProduct"

export const Card = ({ id, Title, Img1, Img2, Description, Price, Peso, Altura, Quantity }) => {
  // const { data, card, setCard } = useContext(cartContext)

  const addCart = () => {
    // setData((currItems) => {
    //   // Primero busco si ya esta agregado el item
    //   const isCurrItems = currItems.find(item => item.id === id)
    //   // Si esta aumentamos su cantidad
    //     if(isCurrItems) {
    //       return currItems.map((item) => {
    //         if(item.id === id){
    //           return {...item, Quantity: item.Quantity + 1}
    //         } else {
    //           return item;
    //         }
    //       })
    //     } else {
    //       // sino esta retornamos el item
    //       return [...currItems, {id, Quantity: 1, Price }];
    //     }
    // })

    console.log("Holas");
  }

  // const removeItem = () => {

  //   setData((currItems)=> {
  //     if(currItems.find((item) => item.id === id)?.Quantity === 1) {
  //       return currItems.filter((item) => item.id !== id);
  //     } else {
  //       return currItems.map((item) => {
  //         if(item.id === id) {
  //           return {...item, Quantity: item.Quantity - 1}
  //         } else {
  //           return item;
  //         }
  //       })
  //     }
  //   })
  // }
  
  return Productos.map((product)=>{
      return (
          <div key={product.id} className={styles.Container}>
          <div className={styles.Container2}>
        
            <div className={styles.containerB}>
              <h2 className={styles.span0}>{product.Title}</h2>
    
              <div className={styles.imagenContainer}>
                      <img
                        src={product.Img1}
                        alt="Imagen normal"
                        className={`${styles.span1} ${styles.imagen}`}
                      />
                      <img
                        src={product.Img2}
                        alt="Imagen hover"
                        className={`${styles.span1} ${styles.imagen} ${styles.imagenHover}`}
                      />
                </div>
    
              <button className={styles.btn} onClick={addCart}>Add carts</button>

              {/* <p className={styles.span2}>{product.Description}</p> */}
              
              <p>Precio: {product.Price}</p>

              <p>Cantidad: {product.Quantity}</p>

              {/* { 
                (Peso) ? <p>Peso: {product.Peso}Kg</p> 
                  : 
                <p>Altura: {product.Altura} cm</p>
              } */}

    
            </div>

        </div>
        </div>)
    })

    
}
