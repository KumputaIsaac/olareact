import Back from "../../components/back/Back";
import Result from "../../components/result/Result";
import "./passcode.css";

export default function Passcode({ lan }) {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
	};
	return (
		<>
			{lan ? (
				<div class="passcode">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Change your passcode</p>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Old code" />
						</div>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="New password" />
						</div>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Confirm New Password" />
						</div>
						<div onClick={showresult} class="continue">
							Continue
						</div>
						<div class="chatadmin">
							If you cant Remember your Passcode, Please talk to an admin
						</div>
					</div>
				</div>
			) : (
				<div class="passcode">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Yi koodu iwọle rẹ pada</p>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Koodu atijo" />
						</div>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Koodu tuntun" />
						</div>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Jẹrisi koodu tuntun" />
						</div>
						<div onClick={showresult} class="continue">
							Yi koodu
						</div>
						<div class="chatadmin">
							Ti o ko ba le Ranti koodu iwọle rẹ, Jọwọ sọrọ si abojuto kan
						</div>
					</div>
				</div>
			)}

			<Result passcode />
		</>
	);
}
