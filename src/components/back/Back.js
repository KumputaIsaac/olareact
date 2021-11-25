import React from "react";
import { useHistory } from "react-router-dom";

export default function Back() {
	let history = useHistory();
	return (
		<div onClick={() => history.goBack()} class="iconback">
			<img src="../images/v6.png" alt="" />
			<p>Back</p>
		</div>
	);
}
