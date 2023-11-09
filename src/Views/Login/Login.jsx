import React from 'react'
import Styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom';

function Login() {
   const navigate = useNavigate();
  
  const isSubmit = () => {
    navigate("/");
  }
  
  return (
    <div className={Styles.Container}>
        <div className={Styles.ContainerForm}>
            <form>
                <h2>Login</h2>

                <label>Email</label>
                <input placeholder='Enter your Email'></input>

                <label>Password</label>
                <input placeholder='Enter your Password'></input>

                <button onClick={isSubmit}>Enter</button>
            </form>
        </div>

    </div>
  )
}

export default Login