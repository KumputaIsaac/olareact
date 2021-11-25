import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./result.css";

export default function Result({ page, passcode, votingstatus }) {
	const cancel = () => {
		let cover = document.querySelector(".cover");
		cover.classList.add("none");
	};

	// const [icon, seticon] = useState("");
	const [icon, seticon] = useState({
		picture: "",
		link: "",
	});

	useEffect(() => {
		page
			? seticon({
					picture: "./images//i1.png",
					link: "verify",
			  })
			: console.log("nothing");
		passcode
			? seticon({
					picture: "./images/Frame.png",
					link: "",
			  })
			: console.log("nothing");
		votingstatus
			? seticon({
					picture: "./images/v8.png",
					link: "verifyingbupdating",
			  })
			: console.log("nothing");
	}, [page, passcode, votingstatus]);

	const history = useHistory();

	const routeChange = () => {
		history.push(icon.link);
	};

	return (
		<div>
			<div class="cover none" id="cover">
				<div class="content">
					<div id="cancel" onClick={cancel} class="cancel">
						<img src="./images/v5.png" alt="" />
					</div>
					<div class="change">
						<p>Change Passcode</p>
						<p>
							Changing your passcode will mean you’ll be setting a new passcode.
							This New Passcode will be used to log into your account
						</p>
						<img src={icon.picture} alt="" />
						<div class="cancelcontinue">
							<div class="can">CANCEL</div>

							<div onClick={routeChange} class="can">
								CONTINUE
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
