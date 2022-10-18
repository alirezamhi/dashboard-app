import React, { createContext } from "react";
import { useTheme } from "../../Hooks/useTheme";
import Style from "./Header.module.css"

export default function HeadrThem() {
    const [theme, toggle] = useTheme();
    console.log(theme);
    return (
        <div>
            {theme === "dark" ? <button className={Style.sun} onClick={toggle}><i className="bi bi-brightness-high"></i></button> : <button className={Style.moon} onClick={toggle}><i className="bi bi-moon"></i></button>}
        </div>
    );
}