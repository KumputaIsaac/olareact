import "./language.css";
import Back from "../../components/back/Back";
import Result2 from "../../components/result/Result2";

export default function Language({ setlan, lan }) {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
		setlan(false);
		if (lan === false) {
			setlan(!lan);
		}
	};

	return (
		<div>
			<div class="verifyy">
				<div class="verifycenter">
					<Back />
					<p class="verifythis">Change language</p>
					<p class="verificationcode"></p>
					<div class="yoruba">
						<img onClick={showresult} src="../images/Group 1466.png" alt="" />
						<img onClick={showresult} src="../images/Group 1468.png" alt="" />
					</div>
				</div>
			</div>
			<Result2 lan={lan} language />
		</div>
	);
}
