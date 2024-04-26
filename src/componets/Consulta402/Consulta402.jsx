import React, { useEffect, useState } from "react";
import styles from "./Consulta402.module.css";
import { Consulta } from "../Consulta/Consulta";
import axios from "axios";

export const Consulta402 = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [placa, setPlaca] = useState("");
    const [uf, setUf] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    const [situacaoExigibilidade, setSituacaoExigibilidade] = useState("TODAS");
    const [exibirConsulta, setExibirConsulta] = useState(true); // Novo estado para controlar a exibição da consulta
    console.log("use stattes do input", placa, dataInicio, dataFim, situacaoExigibilidade,uf)
    
    const handleConsultar = async () => {
        try {
            const body = {
                placaVeiculo: placa,
                ufEmplacamentoInformada: uf,
                dataInicioConsulta: dataInicio,
                dataFimConsulta: dataFim,
                situacaoExigibilidade: situacaoExigibilidade
            }
            const headers = {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cG4iOiJSRU5BSU5GIiwiaXNzIjoiZGV2LnJlbmFpbmYiLCJncm91cHMiOlsiUkVOQUlORiJdLCJpYXQiOjE2ODYxNjcyMzksImV4cCI6MjAwMTUyNzIzOSwianRpIjoiNjg5YTFmM2EtNWU5MS00MjhkLWFkOTUtN2RkNzZkMzRhOTM0In0.IiOJWADl_OnzFtsEUC65kW8XL5MtQVUjeUynuj9hnrSaA185UmYqajRSsVPatPfKLqTRldKBNBCNlqasuR3v5jLuIDhhB_8MveX1ZRy3BPbhWPR4bmjQktfYDfuUNbCLfHYkQ2qWaEW7zHnd9go3pP9D0XUAXBqQ4eTaIdrKCVZ85JZkGOAqP2hcYy0LtukXApsGPguM5dq5CqHhPmOgnr4YPX4LX6WVMDoFYKjIeRUHVAB95h0lbRkLQFbhXnLn6qWX__Py4RWHArMfRQiBDXu7Vou5aY4xTqEVaWZRJOF9zt71fFPet7ssHxe87FMRZNW04rW8u8JG0bS141m5sQ', // Replace with your access token
                'Content-Type': 'application/json'
            }
            const url = '/consultar/402';

            const response = await axios.post(url, body, { headers });
            console.log(response.data); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                        <p className={styles.tipoTrasacao}>Tipo Transação: 402 :</p>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Placa:</label>
                                <input type="text" placeholder="Placa" required value={placa} onChange={(e) => setPlaca(e.target.value)} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>UF:</label>
                                <input type="text" placeholder="UF" required value={uf} onChange={(e) => setUf(e.target.value)} />
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
                            <button onClick={handleConsultar}>Consultar</button>
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
