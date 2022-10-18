import React from "react";
import Style from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={Style.title_container}>
		<div className={Style.spinner}>
			<svg className={Style.svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<circle cx="50" cy="50" r="46" />
			</svg>
		</div>
		<h1 className={Style.title}>چند لحظه منتظر بمانید</h1>
	</div>
    )
}

export default Loading;