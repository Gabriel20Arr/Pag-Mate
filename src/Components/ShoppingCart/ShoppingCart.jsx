import React from 'react'
import styles from "./ShoppingCart.module.css"

export const ShoppingCart = () => {
  return (
      <div className={styles.container}>
            <button onClick={()=> alert("Saliendo")} className={styles.link}>Volver</button>
        <div className={styles.container2}>
          <h1 className="mt-5 mb-5 text-center"style={{fontSize:"50px"}}>Carrito de compras</h1>
          <div className="container">

            {/* {() ? ()} */}
              {/* <div className={style.carrito02}>
                El carrito está vacío.{" "}
                <Link href={"/home"}>Haz click para comenzar a comprar</Link>
              </div> */}

              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Name</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>
                          <img
                            src={"https://media.istockphoto.com/id/1047013656/es/foto/mate-hierba-mate-con-%C3%A1rboles-en-el-fondo.jpg?s=612x612&w=0&k=20&c=gBa5rZ1JZCfG4X7TQWbLDfPzD4gwz3B6_jaFQRAzHAA="}
                            alt="imagen"
                            width={50}
                            a
                            height={50}
                          />
                          &nbsp;
                        </td>
                        <td>
                          <span>Mate Torpedo</span>
                        </td>
                        <td>
                          <select
                            defaultValue={1}
                            onChange={(event) => alert("Cambiando Quantity")
                            }
                          >
                            <option> {1} </option>
                          </select>
                        </td>
                        <td>2200</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => alert("Cancelar")}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={"https://media.istockphoto.com/id/1047013656/es/foto/mate-hierba-mate-con-%C3%A1rboles-en-el-fondo.jpg?s=612x612&w=0&k=20&c=gBa5rZ1JZCfG4X7TQWbLDfPzD4gwz3B6_jaFQRAzHAA="}
                            alt="imagen"
                            width={50}
                            a
                            height={50}
                          />
                          &nbsp;
                        </td>
                        <td>
                          <span>Mate Torpedo</span>
                        </td>
                        <td>
                          <select
                            defaultValue={1}
                            onChange={(event) => alert("Cambiando Quantity")
                            }
                          >
                            <option> {1} </option>
                          </select>
                        </td>
                        <td>2200</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => alert("Cancelar")}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={"https://media.istockphoto.com/id/1047013656/es/foto/mate-hierba-mate-con-%C3%A1rboles-en-el-fondo.jpg?s=612x612&w=0&k=20&c=gBa5rZ1JZCfG4X7TQWbLDfPzD4gwz3B6_jaFQRAzHAA="}
                            alt="imagen"
                            width={50}
                            a
                            height={50}
                          />
                          &nbsp;
                        </td>
                        <td>
                          <span>Mate Torpedo</span>
                        </td>
                        <td>
                          <select
                            defaultValue={1}
                            onChange={(event) => alert("Cambiando Quantity")
                            }
                          >
                            <option> {1} </option>
                          </select>
                        </td>
                        <td>2200</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => alert("Cancelar")}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={"https://media.istockphoto.com/id/1047013656/es/foto/mate-hierba-mate-con-%C3%A1rboles-en-el-fondo.jpg?s=612x612&w=0&k=20&c=gBa5rZ1JZCfG4X7TQWbLDfPzD4gwz3B6_jaFQRAzHAA="}
                            alt="imagen"
                            width={50}
                            a
                            height={50}
                          />
                          &nbsp;
                        </td>
                        <td>
                          <span>Mate Torpedo</span>
                        </td>
                        <td>
                          <select
                            defaultValue={1}
                            onChange={(event) => alert("Cambiando Quantity")
                            }
                          >
                            <option> {1} </option>
                          </select>
                        </td>
                        <td>2200</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => alert("Cancelar")}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={"https://media.istockphoto.com/id/1047013656/es/foto/mate-hierba-mate-con-%C3%A1rboles-en-el-fondo.jpg?s=612x612&w=0&k=20&c=gBa5rZ1JZCfG4X7TQWbLDfPzD4gwz3B6_jaFQRAzHAA="}
                            alt="imagen"
                            width={50}
                            a
                            height={50}
                          />
                          &nbsp;
                        </td>
                        <td>
                          <span>Mate Torpedo</span>
                        </td>
                        <td>
                          <select
                            defaultValue={1}
                            onChange={(event) => alert("Cambiando Quantity")
                            }
                          >
                            <option> {1} </option>
                          </select>
                        </td>
                        <td>2200</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => alert("Cancelar")}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                  </tbody>
                </table>

                {/* <div>
                  Subtotal: ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : ${" "}
                  {cartItems.reduce((a, c) => a + c.quantity * c.precio, 0)}
                </div> */}

                <div class="d-grid gap-2 col-6 mx-auto" >
                  <button
                    class="btn btn-outline-primary btn-lg w-100" 
                    type="button"
                    id="buttomPagar"
                    onClick={() => alert('Comprando')}
                    style={{fontSize: '25px', fontWeight: 'bolder'}}
                  >
                    Comprar
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}
