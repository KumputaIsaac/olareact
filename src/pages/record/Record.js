import Back from "../../components/back/Back";
import "./record.css";

export default function Record({ lan }) {
	return (
		<div>
			{lan ? (
				<div class="passcode">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Your Records</p>
						<div class="recordbox">
							<div class="iconrecord">
								<img src="../images/v9.png" alt="" />
								<p>
									You don't have any <br /> Records yet
								</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div class="passcode">
					<div class="verifycenter">
						<Back />
						<p class="verifythis">Awọn igbasilẹ rẹ</p>
						<div class="recordbox">
							<div class="iconrecord">
								<img src="../images/v9.png" alt="" />
								<p>
									O ko ni eyikeyi
									<br />
									Awọn igbasilẹ
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
