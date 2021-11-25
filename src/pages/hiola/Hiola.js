import "./Hiola.css";

export default function Hiola() {
	return (
		<div>
			<div class="container">
				<div class="welcome">
					<p>Hi Ola Adedamola</p>
					<p>
						Welcome to the Web Based <br />
						Voting System
					</p>
				</div>

				<div class="verifyy">
					<div class="verifycenter">
						<p class="verifythis">Verify this is you</p>
						<p class="verificationcode">
							A Verification code has been set to your register phone number. We
							need to verify its you changing your polling unit
						</p>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Verification code" />
						</div>
						<div class="continue">Continue</div>
					</div>
				</div>

				<div class="everyvoter">
					If you forget your passcode, Kindly see the INEC officials with
					appropraite <br />
					documents to reset password
				</div>
			</div>
		</div>
	);
}
