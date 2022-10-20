import React from "react";
import { useTheme } from "../../../../hooks/useTheme";
import Style from "../../../Header/Header.module.css"

export function Theme() {
    const [theme, toggle] = useTheme();
    console.log(theme);
    return (
        <div>
            {theme === "dark" ? <button className={Style.sun} onClick={toggle}><i className="bi bi-brightness-high"></i></button> : <button className={Style.moon} onClick={toggle}><i className="bi bi-moon"></i></button>}
        </div>
    );
}