import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

export const cartContext = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([])
  const [cart2, setCart2] = useState([])

  useEffect(()=> {
    axios.get("data.json")
      .then((res) => setData(res.data))
  }, [])
    
  return (
    <cartContext.Provider value={{ data, cart2, setCart2 }}>
        {children}
    </cartContext.Provider>
  )
}
