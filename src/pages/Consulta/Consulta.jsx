import React from "react";
import styles from "./Consulta.module.css";
import { HeaderConsulta } from "../../componets/HeaderConsulta/HeaderConsulta";
import { BodyConsulta } from "../../componets/BodyConsulta/BodyConsulta";

function Consulta() {
    return (
        <div className={styles.container}>
            <div className={styles.areaContainer}>
                <HeaderConsulta />
                <BodyConsulta />
            </div>
        </div>
    );
}

export default Consulta;