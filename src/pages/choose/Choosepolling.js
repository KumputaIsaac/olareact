import Result2 from "../../components/result/Result2";
import "./choosepolling.css";

export default function Choosepolling({ lan }) {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
	};
	return (
		<div>
			{lan ? (
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
			) : (
				<div class="verifyy">
					<div class="verifycenter">
						<div class="iconback">
							<img src="../images/v6.png" alt="" />
							<p>Back</p>
						</div>
						<p class="verifythis">Yan ẹyọ idibo</p>
						<p class="verificationcode">
							Ti o ko ba ri ẹyọ idibo ti o fẹ,
							<br /> Jọwọ sọrọ si abojuto kan
						</p>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Yan ẹyọ idibo" />
						</div>
						<div onClick={showresult} class="continue">
							Yan ẹyọ idibo
						</div>
					</div>
				</div>
			)}

			<Result2 lan={lan} Choosepolling />
		</div>
	);
}
