import React, { useEffect, useState } from "react";
import styles from "./ComponenteConsulta.module.css";
import { Consulta402 } from "../Consulta402/Consulta402";


export const ComponenteConsulta = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [componenteAtivo, setComponenteAtivo] = useState(null);


    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Painel de Controle Renainf</h1>

            <div className={styles.areaServidor}>
                <p>Servidor :	ICOM</p>
                <p> Start UP Time: {currentDate.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}  </p>
            </div>
            <div className={styles.areaTransacao}>
                <p> Transações de Consulta Disponíveis :</p>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >401</td>
                            <td className={styles.tdR}>Consulta Infração</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>402</td>
                            <td className={styles.tdR}>Consulta Infrações por Placa</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>403</td>
                            <td className={styles.tdR}>Consulta Infrações por Condutor / Proprietário</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>404</td>
                            <td className={styles.tdR}>Consulta Pagamentos de Infração</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>405</td>
                            <td className={styles.tdR}>Consulta Ocorrências de Infração</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>407</td>
                            <td className={styles.tdR}>Consulta Extrator Infrações Condutor</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>409</td>
                            <td className={styles.tdR}>Consulta Notificações de Penalidades Canceladas</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>418</td>
                            <td className={styles.tdR}>Informa o Real Infrator</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>433</td>
                            <td className={styles.tdR}>Consulta Situação Veículo no SNE</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>435</td>
                            <td className={styles.tdR}>Consulta Infrações Pontuadas* / Advertências por escrito</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        <tr>
                            <td>959</td>
                            <td className={styles.tdR}>Consulta Principal Condutor</td>
                            <td><a href="https://www.google.com/" style={{ cursor: 'pointer' }}>Executar</a></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}