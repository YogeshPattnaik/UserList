import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDataList from "./pages/UserDataList";
import UserDataGraph from "./pages/UserDataGraph";
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={UserDataList} />
					<Route path="/userGraph" component={UserDataGraph} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
