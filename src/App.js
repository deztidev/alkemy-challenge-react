import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/Details";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Home} />
				<Route path="/hero" component={Details} />
			</Switch>
		</Router>
	);
}

export default App;
