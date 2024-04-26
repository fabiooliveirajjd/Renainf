import React, { useState, useEffect } from 'react';
import styles from "./Body.module.css";
import logo from "./../../assets/logoPRF.png";
import TextField from '@mui/material/TextField';
import mockUser from '../../../mockUsers.json';
import { useNavigate } from 'react-router-dom';


export const Body = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        const user = mockUser.find(user => user.username === username);
        if (user && user.password === password) {
            alert('Logado com sucesso');
            navigate('/consulta', {state: {username: user}});
        } else {
            alert('Usuário ou senha inválidos');

        }

    }

    console.log(username, password);

    return (
        <div className={styles.containerBody}>
            <img src={logo} alt="" className={styles.logoPrf} />
            <p className={styles.titulo}> Registro Nacional de  <br />Infrações de  Trânsito</p>
            <div className={styles.card}>
                <div className={styles.areaConteudoCard}
                onKeyPress={(event) => {
                    if(event.key === 'Enter') {
                        handleLogin();
                    }
                }}>
                    <p className={styles.textTituloCard}>Login</p>
                    <p className={styles.subTitulo}>Informe seus dados para acessar</p>
                    <div className={styles.areaInput}>
                        <TextField id="outlined-basic" label="Usuário (CPF somente números)" variant="outlined" className={styles.inputUsername} style={{ marginBottom: '20px' }}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField id="outlined-password-input" label="Senha" type='password' className={styles.inputPassword}
                            onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <button className={styles.button} onClick={() => handleLogin()}>Entrar</button>
                    <a href="https://suporte.prf.gov.br/portal/auth" className={styles.link}>Fale Conosco</a>
                </div>
            </div>

        </div>
    );
}