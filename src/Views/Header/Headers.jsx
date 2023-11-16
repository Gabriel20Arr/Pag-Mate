import React,  { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from "./Headers.module.css"

import imgMenu from "../../Img/menu-expand-svgrepo-com (1).svg"
import imgCart from "../../Img/cart-plus-svgrepo-com (1).svg"
import imgLogin from "./imgLogin/MaterialSymbolsLightAccountCircleOffOutline.png"
import imgOutLogin from "./imgLogin/MaterialSymbolsLightAccountCircleOutline.png"


function Headers() {
  const [ isDropDown, setIsDropDown ] = useState(false);
  // const [ cart, setCart ] = useContext(cartContext);
  
  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  }

  // const quantity = cart.reduce((acc, curr) => {
  //   return acc + curr.Quantity;
  // }, 0)


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
              <NavLink to={"AllProduct"} className={styles.NavLinks}>
                  <span className={styles.span} >
                    Some Product
                  </span>
              </NavLink>

              <NavLink to={"Mates"} className={styles.NavLinks}>
                  <span className={styles.span}>
                    Mates
                  </span>
              </NavLink>

              <NavLink to="Yerbas" className={styles.NavLinks}>
                  <span className={styles.span}>
                    Yerbas
                  </span>
              </NavLink>

              <NavLink to={"Bombillas"} className={styles.NavLinks}>
                  <span className={styles.span}>
                    Bombillas
                  </span>
              </NavLink>

              <NavLink to={"Termos"} className={styles.NavLinks}>                  
                  <span className={styles.span}>
                    Termos
                  </span>
              </NavLink>
                  
              <NavLink to={"Materas"} className={styles.NavLinks}>
                  <span className={styles.span}>
                    Materas
                  </span>
              </NavLink>

              <NavLink to={"Accesorios"} className={styles.NavLinks}>                  
                  <span className={styles.span}>
                    Accesorios
                  </span>
              </NavLink>
              </div>)
            }
            
        </div>
          <NavLink to={"/"} style={{textDecoration: "none", color: 'black'}}>
            <span className={styles.title}> 
                <span className={styles.title_1}> Tu </span>  
                <span className={styles.title_2}> Mate </span>  
            </span>  
          </NavLink>

        <div className={styles.Contenedor}>
        <Link   to={'/login'}>
          <img src={imgLogin} alt='imgLogin' className={styles.imgLogin}/>
        </Link>

        {/* <Link   to={'/registrarse'}>
          <img src={imgOutLogin} alt='imgOutLogin' className={styles.imgLogin2}/>
        </Link> */}

          <div className={styles.containerCarts}>
            <NavLink to={"/ShoppingCart"} style={{textDecoration:"none"}}>

              <div className={styles.countCarts}>
              
                <img src={imgCart} alt={imgCart} className={styles.imgCart}/>
                
                <span className={styles.count}>{9}</span>
              
              </div>
            
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Headers