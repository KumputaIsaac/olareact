import "./homepage.css";
import { Link } from "react-router-dom";
import Result from "../../components/result/Result";

export default function Homepage({ lan }) {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
	};

	return (
		<div>
			{lan ? (
				<div class="container">
					<div class="welcome">
						<p>
							Welcome to the Web Based <br />
							Voter’s Registration System
						</p>
					</div>
					<div class="whatyou">
						<p>What do you want to do today?</p>
					</div>
					<div class="options">
						<div class="option1">
							<div class="check" onClick={showresult} id="option1">
								<img src="./images/v3.png" alt="" />
								<p>Change Passcode</p>
							</div>
							<div class="check">
								<img src="./images/v1.png" alt="" />
								<Link to="/votingstatus">
									<p>Check Status</p>
								</Link>
							</div>
						</div>
						<div class="option2">
							<div class="check">
								<img src="./images/v4.png" alt="" />
								<Link to="/record">
									<p>View records</p>
								</Link>
							</div>
							<div class="check">
								<img src="./images/v2.png" alt="" />
								<Link to="/language">
									<p>Change Language</p>
								</Link>
							</div>
						</div>
					</div>

					<div class="votingcommence">
						<p>Voting commences on 11:00am, 15th August 2021</p>
					</div>
					<div class="everyvoter">
						Every Voter must have updated their record and choose their prefered
						polling unit <br />
						on or before 12:00am, 3rd of August 2021
					</div>
				</div>
			) : (
				<div class="container">
					<div class="welcome">
						<p>
							Kaabo si Ayelujara, <br />
							Da Eto Iforukọ Oludibo
						</p>
					</div>
					<div class="whatyou">
						<p>Kini o fẹ ṣe loni?</p>
					</div>
					<div class="options">
						<div class="option1">
							<div class="check" onClick={showresult} id="option1">
								<img src="./images/v3.png" alt="" />
								<p>Yi koodu iwọle pada</p>
							</div>
							<div class="check">
								<img src="./images/v1.png" alt="" />
								<Link to="/votingstatus">
									<p>Ṣayẹwo Ipo</p>
								</Link>
							</div>
						</div>
						<div class="option2">
							<div class="check">
								<img src="./images/v4.png" alt="" />
								<Link to="/record">
									<p>Wo awọn igbasilẹ</p>
								</Link>
							</div>
							<div class="check">
								<img src="./images/v2.png" alt="" />
								<Link to="/language">
									<p>Yi ede pada</p>
								</Link>
							</div>
						</div>
					</div>

					<div class="votingcommence">
						<p>Idibo bẹrẹ ni aro ago mọkanla, 15th August 2021</p>
					</div>
					<div class="everyvoter">
						Gbogbo Oludibo gbọdọ ti ṣe igbasilẹ wọn ṣaaju ago aro <br />
						mejila, ojo keta ti Oṣu Kẹjọ ọdun 2021
					</div>
				</div>
			)}

			<Result page={"homepage"} />

			<div class="message">
				<h1>
					Kindly use a larger screen device to access this web application
				</h1>
			</div>
		</div>
	);
}
