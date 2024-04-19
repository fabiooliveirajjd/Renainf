import React from "react";
import styles from "./HeaderConsulta.module.css";
import Prf from "./../../assets/header.png";
import { useNavigate } from 'react-router-dom';

export const HeaderConsulta = () => {
    const navigate = useNavigate();

    function handleLogout() {
        navigate('/');
    }

    return (
        <>
            <div className={styles.container}>
                <img src={Prf} alt="Logo PRF" />
                <button className={styles.btn} onClick={() => handleLogout()}>Sair</button>
            </div>
          
        </>
    );
}
