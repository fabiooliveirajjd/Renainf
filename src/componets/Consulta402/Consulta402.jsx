import React, { useEffect, useState } from "react";
import styles from "./Consulta402.module.css";
import { ComponenteConsulta } from "../ComponenteConsulta/ComponenteConsulta";

export const Consulta402 = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [placa, setPlaca] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    const [situacaoExigibilidade, setSituacaoExigibilidade] = useState("TODAS");

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const handleVoltar = () => {
        setComponenteAtivo(<ComponenteConsulta setComponenteAtivo={setComponenteAtivo} />);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Painel de Controle Renainf</h1>

            <div className={styles.areaServidor}>
                <p>Servidor :	ICOM</p>
                <p> Start UP Time: {currentDate.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}  </p>
            </div>
            <div className={styles.areaTransacao}>
                <p> Tipo Transação: 402 :</p>
                <label className={styles.labelPlaca}>
                    Placa:
                    <input className={styles.inputPlaca} type="text" placeholder="Placa" required value={placa} onChange={(e) => setPlaca(e.target.value)} />
                </label >
                <label className={styles.labelDataInicio}>
                    Data Início Consulta:
                    <input className={styles.inputPlaca}  type="text" placeholder="AAAAMMDD" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
                </label>
                <label className={styles.labelDataFim}>
                    Data Fim Consulta:
                    <input className={styles.inputPlaca}  type="text" placeholder="AAAAMMDD" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
                </label>
                <label className={styles.labelSituacao}>
                    Situação Exigibilidade:
                    <input className={styles.inputPlaca}  type="text" value={situacaoExigibilidade} onChange={(e) => setSituacaoExigibilidade(e.target.value)} />
                </label>
                <div className={styles.botoes} >
                    <button onClick={() => console.log("Consultar")}>Consultar</button>
                    <button onClick={handleVoltar}>Voltar</button>
                </div>
            </div>
        </div>
    );
}   