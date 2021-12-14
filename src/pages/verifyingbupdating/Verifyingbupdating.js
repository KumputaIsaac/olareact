import Back from "../../components/back/Back";
import { Link } from "react-router-dom";
import "./verifyingbupdating.css";

export default function Verifyingbupdating({ lan }) {
	return (
		<div>
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
						<div class="continue">
							<Link to="/choosepolling">Continue</Link>
						</div>
					</div>
				</div>
			) : (
				<div class="verifyy">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Ipo Idibo rẹ</p>
						<p class="verificationcode">
							A ti ṣeto koodu ijẹrisi si nọmba foonu iforukọsilẹ rẹ. A nilo lati
							rii daju pe iwọ n yi ẹyọ idibo rẹ pada
						</p>
						<div class="input">
							<div class="icon">
								<img src="../images/v7.png" alt="" />
							</div>
							<input type="text" placeholder="Verification code" />
						</div>
						<div class="continue">
							<Link to="/choosepolling">Tesiwaju</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
