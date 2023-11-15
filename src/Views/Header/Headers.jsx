import React,  { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from "./Headers.module.css"

import imgMenu from "../../Img/menu-expand-svgrepo-com (1).svg"
import imgCart from "../../Img/cart-plus-svgrepo-com (1).svg"


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

              <div className={styles.NavLinks2}>
                <div className={styles.imgL}>
                  <NavLink to={"login"} className={styles.imgLoginn}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.imgL} width="28" height="28" viewBox="0 0 24 24">
                      <path fill="#aaaaa" d="M12 21v-2h7V5h-7V3h9v18h-9Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z"/>
                    </svg>
                  </NavLink>  
                </div>

                <div className={styles.imgL2}>
                  <NavLink to={"registrarse"} className={styles.imgLoginn2}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.imgL} width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="#aaaaaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M23.992 6H6v36h18"/><path d="m25 33l-9-9l9-9m17 8.992H16"/></g></svg>      
                  </NavLink>
                </div>
              </div>

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
        <Link to={'/login'}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.imgLogin} viewBox="0 0 24 24">
            <path fill="#aaaaa" d="M12 21v-2h7V5h-7V3h9v18h-9Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z"/>
          </svg>
        </Link>

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 48 48">
            <g fill="none" stroke="#aaaaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M23.992 6H6v36h18"/><path d="m25 33l-9-9l9-9m17 8.992H16"/></g>
          </svg> */}
          

          <div className={styles.containerCarts}>
            <NavLink to={"/ShoppingCart"}>
            <div className={styles.countCarts}>
            <img src={imgCart} alt={imgCart} className={styles.imgCart}/>
              <span className={styles.countCarts2}>{0}</span>
            </div>
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Headers