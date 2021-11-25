import "./verify.css";
import { Link } from "react-router-dom";
import Back from "../../components/back/Back";

export default function Verify() {
	return (
		<>
			<div class="verifyy">
				<div class="verifycenter">
					<Back />
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
					<Link to="/passcode">
						<div class="continue">Continue</div>
					</Link>
				</div>
			</div>
		</>
	);
}
