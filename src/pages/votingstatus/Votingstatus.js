import Back from "../../components/back/Back";
import Result from "../../components/result/Result";
import "./votingstatus.css";

export default function Votingstatus({ lan }) {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
	};
	return (
		<div>
			{lan ? (
				<div class="passcode">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Your Voting Status</p>
						<div class="pictureid">
							<img src="../images/image3.png" alt="" />
							<div class="userid">
								<p>User ID</p>
								<p>293828-UYDG</p>
							</div>
						</div>
						<div class="docno">
							<div class="hiddenshape"></div>
							<div class="thetalk">
								<div class="number left">
									<p>Document Number</p>
									<p>4837281</p>
								</div>
								<div class="number right">
									<p>Mobile Number</p>
									<p>+234 806 276 4370</p>
								</div>
								<div class="number left">
									<p>Last Login</p>
									<p>25th, April 2020</p>
								</div>
								<div class="number right">
									<p>Status</p>
									<p>Verified to vote</p>
								</div>
							</div>
						</div>
						<div class="currentupdate">
							<div class="hiddenshape2"></div>
							<div class="currentpollingunit">
								<p>Current Polling Unit</p>
								<p>Shitta Local Govt Office, Surulere</p>
							</div>
							<div id="option1" onClick={showresult} class="updatepollingunit">
								Update polling unit
							</div>
						</div>
					</div>
				</div>
			) : (
				<div class="passcode">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Ipo Idibo rẹ</p>
						<div class="pictureid">
							<img src="../images/image3.png" alt="" />
							<div class="userid">
								<p>User ID</p>
								<p>293828-UYDG</p>
							</div>
						</div>
						<div class="docno">
							<div class="hiddenshape"></div>
							<div class="thetalk">
								<div class="number left">
									<p>Document Number</p>
									<p>4837281</p>
								</div>
								<div class="number right">
									<p>Mobile Number</p>
									<p>+234 806 276 4370</p>
								</div>
								<div class="number left">
									<p>Last Login</p>
									<p>25th, April 2020</p>
								</div>
								<div class="number right">
									<p>Status</p>
									<p>Verified to vote</p>
								</div>
							</div>
						</div>
						<div class="currentupdate">
							<div class="hiddenshape2"></div>
							<div class="currentpollingunit">
								<p>Ipo Idibo lọwọlọwọ</p>
								<p>Shitta Local Govt Office, Surulere</p>
							</div>
							<div id="option1" onClick={showresult} class="updatepollingunit">
								Yi ipo Idibore
							</div>
						</div>
					</div>
				</div>
			)}

			<Result votingstatus lan={lan} />
		</div>
	);
}
