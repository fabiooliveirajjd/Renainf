import React from "react";

import styles from "./BodyConsulta.module.css";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Consulta } from "../../componets/Consulta/Consulta";
import { CadastroReenvio } from "../CadastroReenvio/CadastroReenvio";
import List from '@mui/material/List';
import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import ComponenteInicial from "../ComponenteInicial/ComponenteInicial";

export const BodyConsulta = () => {
    const [open, setOpen] = React.useState(false);
    const [isConsultaOpen, setIsConsultaOpen] = React.useState(false);
    const [isCadastroOpen, setIsCadastroOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleConsultaClick = () => {
        setIsConsultaOpen(!isConsultaOpen);
        setIsCadastroOpen(false);
    };

    const handleCadastroClick = () => {
        setIsCadastroOpen(!isCadastroOpen);
        setIsConsultaOpen(false);
    }

    return (
        <div className={styles.container}>
            <div>
                <section className={styles.section}>
                    <div className={styles.menu}>
                        Menu
                    </div>
                    <ListItemButton className={styles.listItemButton}>
                        <Folder className={styles.iconRenainf} />
                        <span className={styles.renainf}>RENAINF</span>
                    </ListItemButton>
                    <div className="container">
                        <ListItemButton onClick={handleClick} className={styles.listItemButton}>
                            {open ? <FolderOpen className={styles.iconTv} /> : <Folder className={styles.iconTv} />}
                            <span className={styles.tv}>Transações de Envio</span>
                            {open ? <ExpandLess className={styles.iconTv} /> : <ExpandMore className={styles.iconTv} />}
                        </ListItemButton>
                    </div>
                    <div className="container">
                        <div className="container">
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={handleConsultaClick} className={styles.listItemButton}>
                                        <ListItemIcon>
                                            {isConsultaOpen ? <FolderOpen className={styles.icon} /> : <Folder className={styles.icon} />}
                                        </ListItemIcon>
                                        <span className={styles.tr}>Consultas</span>
                                    </ListItemButton>
                                    <ListItemButton onClick={handleCadastroClick} className={styles.listItemButton}>
                                        <ListItemIcon>
                                            {isCadastroOpen ? <FolderOpen className={styles.icon} /> : <Folder className={styles.icon} />}
                                        </ListItemIcon>
                                        <span className={styles.tr}>Cadastro Reenvio</span>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </div>
                    </div>
                </section>
            </div>
            {isConsultaOpen ? <Consulta /> : isCadastroOpen ? <CadastroReenvio /> : <ComponenteInicial />}
        </div>
    );
}