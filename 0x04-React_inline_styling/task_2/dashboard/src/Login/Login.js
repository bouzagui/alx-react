import React from "react";
import { css, StyleSheet } from 'aphrodite';

export default function Login() {
    const styles = StyleSheet.create({
        AppBody: {
            fontSize: '1rem',
            padding: '2em',
            borderBottom: '3px solid #e0354b',
            height: '45%',
        },
        formInput: {
            margin: '10px',
        },
    });

    return (
        <React.Fragment>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form className={css(styles.formInput)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" />
                    <button>OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}
