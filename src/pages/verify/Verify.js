import "./verify.css";
import { Link } from "react-router-dom";
import Back from "../../components/back/Back";

export default function Verify({ lan }) {
	return (
		<>
			{lan ? (
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
			) : (
				<div class="verifyy">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Jẹrisi pe iwọ ni eyi</p>
						<p class="verificationcode">
							A ti ṣeto koodu ijẹrisi si nọmba foonu iforukọsilẹ rẹ. A nilo lati
							rii daju pe iwọ n yi ẹyọ idibo rẹ pada
						</p>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Kodu afimo" />
						</div>
						<Link to="/passcode">
							<div class="continue">Tesiwaju</div>
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
