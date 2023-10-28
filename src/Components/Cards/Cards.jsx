import React from 'react'

import styles from "./Cards.module.css"

import { Productos } from '../../dataProduct'
import { Card } from '../Card/Card'

const Cards = () => {

  // const ProductosData = [].concat(...Productos).slice(0, 6)
  
  return (
    <div className={styles.Container2}>
        {Productos[2].map((index, id) => {
            return <Card key={index.id} {...index} />;
        })}
    </div>
  )
}

export default Cards;