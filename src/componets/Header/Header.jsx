import React from "react";
import styles from "./Header.module.css";
import Prf from "./../../assets/prf.png";

export const Header = () => {

    return (
            <header className={styles.containerHeader}>
                <img src={Prf} alt=""  className={styles.logoPrf}/>
                <p >RENAINF</p>
            </header>    
        
    );
}