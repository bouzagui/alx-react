import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";

export default function Footer() {
    return (
        <>
            <footer className="App-footer">
                Copyright {getFullYear()} - {getFooterCopy()}
            </footer>
        </>
    )
}
