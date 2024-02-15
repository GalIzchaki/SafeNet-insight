import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";
//import { useNavigate } from "react-router-dom";

const Login = () => {
  //   const navigate = useNavigate();

  //   const handleLogin = () => {
  //     navigate("/Home");
  //   };

  return (
    <div className={styles.loginpagecontainer}>
      {/* <h2>Login</h2> */}
      {/* <label className="form-label">Username:</label> */}
      {/* <input
        type="text"
        className="forminput"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}
      {/* <label className="form-label">Password:</label> */}
      {/* <input
        type="password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> */}
      {/* <button className="submit-button" onClick={handleLogin}>
          Login
        </button> */}
      <div className={styles.createClasses}>
        <form className={styles.submit} onSubmit={(e) => handleAdding(e)}>
          <div>
            <label>User Name:</label>
          </div>
          <div>
            <input
              type="text"
              required
              className={styles.input}
            />
          </div>
          <label>Password:</label>
          <div>
            <input
              type="password"
              required
              className={styles.input}
            />
          </div>
          <Link href="/MyClass" className={styles.addbuttom}>Login</Link>
        </form>
      </div>
      
      {/* <Link href="/MyClass" className={styles.submitbutton}>
        Login
      </Link> */}
    </div>
  );
  
};

export default Login;
