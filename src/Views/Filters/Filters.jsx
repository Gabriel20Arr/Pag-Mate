import React, { useState } from 'react'
import Styles from "./Filters.module.css"

import  { Productos }  from "../../dataProduct"

const Filters = () => {
    const [ products, setProducts] = useState(Productos)
    
    const AllProduct = products.concat(...products)
    
    const onClick = () => {
        console.log(
            'test:', 
            AllProduct[8]
        );

        // return AllProduct.map((p) => {
        //         return p.Price > 3000
        // })
    }
    
  return (
    <div className={Styles.Container} >
        <span id='' className={Styles.Title}>Filters</span>
        <div className={Styles.ContainerP}>

            {/* Price */}
            <select className={Styles.Propiedades}>
                <option selected disabled>Price</option>
                <option value="MayorAMenor">Mayor a Menor</option>
                <option value="MenorAMayor">Menor a Mayor</option>

                    {/* <div className={Styles.BoxPropiedades}>
                        <span onClick={onClick} className={Styles.items}>Mayor a menor</span>
                        <span onClick={onClick} className={Styles.items}>Menor a Mayor</span>
                    </div> */}
            </select>

            {/* Origin */}
            <select className={Styles.Propiedades}>
                <option selected disabled value="">Origin</option>
                <option value="Argentina">Argentina</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Brazil">Brazil</option>
            </select>

            {/* <span className={Styles.Propiedades}>
                <span>Origin</span>
                    <div className={Styles.BoxPropiedades}>
                        <span onClick={onClick} className={Styles.items}>Argentina</span>
                        <span onClick={onClick} className={Styles.items}>Brazil</span>
                        <span onClick={onClick} className={Styles.items}>Uruguay</span>
                    </div>
            </span> */}
        </div>
    </div>
  )
}

export default Filters