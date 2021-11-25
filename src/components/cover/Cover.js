import "./cover.css";

export default function Cover() {
	return (
		<div class="cover none" id="cover">
			<div class="content">
				<div id="cancel" class="cancel">
					<img src="./images/v5.png" alt="" />
				</div>
				<div class="change">
					<p>Change Passcode</p>
					<p>
						Changing your passcode will mean you’ll be setting a new passcode.
						This New Passcode will be used to log into your account
					</p>
					<img src="./images//i1.png" alt="" />
					<div class="cancelcontinue">
						<div class="can">CANCEL</div>
						<div class="can">
							<a href="./verify/verify.html">CONTINUE</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
