import "./language.css";
import Back from "../../components/back/Back";
import Result from "../../components/result/Result";

export default function Language() {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
	};
	return (
		<div>
			<div class="verifyy">
				<div class="verifycenter">
					<Back />
					<p class="verifythis">Change language</p>
					<p class="verificationcode"></p>
					<div class="yoruba">
						<img onClick={showresult} src="../images/Group 1467.png" alt="" />
						<img onClick={showresult} src="../images/Group 1468.png" alt="" />
						<img onClick={showresult} src="../images/Group 1466.png" alt="" />
					</div>
				</div>
			</div>
			<Result />
		</div>
	);
}
