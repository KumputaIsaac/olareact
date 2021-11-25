import Result2 from "../../components/result/Result2";
import "./choosepolling.css";

export default function Choosepolling() {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
	};
	return (
		<div>
			<div class="verifyy">
				<div class="verifycenter">
					<div class="iconback">
						<img src="../images/v6.png" alt="" />
						<p>Back</p>
					</div>
					<p class="verifythis">Choose polling unit</p>
					<p class="verificationcode">
						If you cant find your desired polling unit,
						<br /> Please talk to an admin
					</p>
					<div class="input">
						<div class="icon">
							<img src="../images/v7.png" alt="" />
						</div>
						<input type="text" placeholder="Choose new polling unit" />
					</div>
					<div onClick={showresult} class="continue">
						Change Polling Unit
					</div>
				</div>
			</div>
			<Result2 Choosepolling />
		</div>
	);
}
