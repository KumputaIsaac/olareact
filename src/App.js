import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Passcode from "./pages/passcode/Passcode";
import Verify from "./pages/verify/Verify";
import Votingstatus from "./pages/votingstatus/Votingstatus";
import Logo from "./components/logo/Logo";
import Rubbish from "./components/rubbish/Rubbish";
import Verifyingbupdating from "./pages/verifyingbupdating/Verifyingbupdating";
import Choosepolling from "./pages/choose/Choosepolling";
import Record from "./pages/record/Record";
import Language from "./pages/language/Language";
import Hiola from "./pages/hiola/Hiola";
import Time from "./pages/time/Time";

function App() {
	return (
		<div className="App">
			<Logo />
			<Router>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/verify">
						<Verify />
					</Route>
					<Route path="/passcode">
						<Passcode />
					</Route>
					<Route path="/votingstatus">
						<Votingstatus />
					</Route>
					<Route path="/verifyingbupdating">
						<Verifyingbupdating />
					</Route>
					<Route path="/choosepolling">
						<Choosepolling />
					</Route>
					<Route path="/record">
						<Record />
					</Route>
					<Route path="/language">
						<Language />
					</Route>
					<Route path="/hiola">
						<Hiola />
					</Route>
					<Route path="/time">
						<Time />
					</Route>
				</Switch>
			</Router>
			<Rubbish />
		</div>
	);
}

export default App;
