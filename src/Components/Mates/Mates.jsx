import React from 'react';

import styles from './Mates.module.css';

// import { Productos } from '../../dataProduct';
import { Mate } from '../Mate/Mate';

const Mates = () => {
  return (
    <div className={styles.Container}>

      {/* {Productos.map((producto, index) => (
        <Mate key={index} producto={producto} />
      ))} */}
    
     <Mate  className={styles.Cmate}/>
    </div>
  );
};

export default Mates;