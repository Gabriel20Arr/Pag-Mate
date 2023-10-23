import React,  { useState } from 'react'

import styles from "./Headers.module.css"

import imgMenu from "../../Img/menu-expand-svgrepo-com (1).svg"
// import imgMenuClose from "../../Img/menu-collapsed-svgrepo-com.svg"
// import imgMenuClose2 from "../../Img/turn-off-backup-svgrepo-com (1).svg"
import imgCart from "../../Img/cart-plus-svgrepo-com (1).svg"

function Headers() {
  const [ isDropDown, setIsDropDown ] = useState(false);

  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  }
   
  return (
    <div className={styles.headersContainer}>
        <div className={styles.dropdown}>
            {!isDropDown ? (
              <img
                src={imgMenu}
                alt={imgMenu}
                onClick={toggleDropDown}
                className={`${styles.imgMenu} ${styles.rotate}`}
              />
               ) : (
              <img
                src={imgMenu}
                alt={imgMenu}
                onClick={toggleDropDown}
                className={`${styles.imgMenu} ${styles.rotate2}`}
              />
            )}

            { isDropDown && (
              <div className={`${styles.content_dropdown} ${styles.openAnimation}`}>
                  <span className={styles.span}>All Product</span>
                  <span className={styles.span}>Mates</span>
                  <span className={styles.span}>Bombillas</span>
                  <span className={styles.span}>Termos</span>
                  <span className={styles.span}>Materas</span>
                  <span className={styles.span}>Accesorios</span>
                  <span className={styles.span}>Yerbas</span>
              </div>)
            }
            
        </div>
            
        <span className={styles.title}> 
            <span className={styles.title_1}> Tu </span>  
            <span className={styles.title_2}> Mate </span>  
        </span>
            
        <img src={imgCart} alt={imgCart} className={styles.imgCart}/>
    </div>
  )
}

export default Headers