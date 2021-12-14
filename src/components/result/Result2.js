import "./result2.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Result2({ Choosepolling, language, lan }) {
	const [icon, seticon] = useState("");

	useEffect(() => {
		Choosepolling
			? seticon(
					lan ? "Polling Unit Changed Successfully" : "Oti  yipada Ẹka Idibo re"
			  )
			: console.log("nothing");
		language
			? seticon(lan ? "Ede Ti Yi pada" : "Language Changed")
			: console.log("nothing");
	}, [Choosepolling, language, lan]);

	const cancel = () => {
		let cover = document.querySelector(".cover");
		cover.classList.add("none");
	};
	return (
		<div>
			{lan ? (
				<div class="cover none passcode">
					<div class="content">
						<div onClick={cancel} class="cancel">
							<img src="../images/v5.png" alt="" />
						</div>
						<div class="change">
							<p>{icon}</p>
							<p>You have successfully changed your Language</p>
							<img src="../images/Frame.png" alt="" />
							<div class="cancelcontinue">
								<div class="can">
									<Link to="/">CONTINUE</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div class="cover none passcode">
					<div class="content">
						<div onClick={cancel} class="cancel">
							<img src="../images/v5.png" alt="" />
						</div>
						<div class="change">
							<p>{icon}</p>
							<p>O ti yi ẹyọ idibo rẹ pada ni aṣeyọri</p>
							<img src="../images/Frame.png" alt="" />
							<div class="cancelcontinue">
								<div class="can">
									<Link to="/">TESIWAJU</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
