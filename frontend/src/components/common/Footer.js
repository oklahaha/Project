import React from 'react';
import "../../css/styles.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>CopyRight © {year}</p>
        </footer>
    )
}
