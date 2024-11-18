import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { css, StyleSheet} from 'aphrodite';

export default function Header() {
    const styles = StyleSheet.create({
        AppHeader: {
            fontSize: '1.4rem',
            color: '#e0354b',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '3px solid #e0354b',
            paddingTop: '200px',
        },
        AppHeaderimg: {
            width: '200px',
            height: '200px',
        },
    })
    return (
        <header className={css(styles.AppHeader)}>
            <img src={logo} className={css(styles.AppHeaderimg)} alt="logo" />
            <h1>School dashboard</h1>
        </header>
    );
}
