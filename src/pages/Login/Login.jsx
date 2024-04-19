import React from "react";
import styles from "./Login.module.css";
import { Header } from "../../componets/Header/Header";
import { Footer } from "../../componets/Footer/Footer";
import { Body } from "../../componets/Body/Body";

function Login() {
  return(
    <div  className={styles.containerLogin}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Login;