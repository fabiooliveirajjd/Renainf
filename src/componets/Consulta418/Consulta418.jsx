import React, { useEffect, useState } from "react";
import styles from "./Consulta418.module.css";
import { Consulta } from "../Consulta/Consulta";

export const Consulta418 = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [placa, setPlaca] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    const [situacaoExigibilidade, setSituacaoExigibilidade] = useState("TODAS");
    const [exibirConsulta, setExibirConsulta] = useState(true); // Novo estado para controlar a exibição da consulta

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const handleVoltar = () => {
        setExibirConsulta(false); // Quando o botão "Voltar" for clicado, ocultar a consulta
    };

    return (
        <div className={styles.container}>
            {exibirConsulta ? ( // Renderizar a consulta somente se exibirConsulta for true
                <>
                    <h1 className={styles.titulo}>Painel de Controle Renainf</h1>

                    <div className={styles.areaServidor}>
                        <p>Servidor : ICOM</p>
                        <p>Start UP Time: {currentDate.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                    </div>

                    <div className={styles.areaTransacao}>
                        <p className={styles.tipoTrasacao}>Tipo Transação: 418 :</p>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Placa:</label>
                                <input type="text" placeholder="Placa" required value={placa} onChange={(e) => setPlaca(e.target.value)} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Data Início Consulta: </label>
                                <input type="text" placeholder="Data Início Consulta" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Data Fim Consulta:</label>
                                <input type="text" placeholder="Data Fim Consulta" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Situação Exigibilidade :</label>
                                <input type="text" placeholder="Situação Exigibilidade" value={situacaoExigibilidade} onChange={(e) => setSituacaoExigibilidade(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.botoes}>
                            <button>Consultar</button>
                            <button onClick={handleVoltar}>Voltar</button>
                        </div>
                    </div>
                </>
            ) : (
                <Consulta />
            )}
        </div>
    );
};
