import React from "react";

//include images into your bundle
import { Print } from "./list.js";
//create your first component
export function Home() {
	return (
		<div>
			<h1>To Do list!</h1>

			<ul>
				<Print />
			</ul>
		</div>
	);
}
