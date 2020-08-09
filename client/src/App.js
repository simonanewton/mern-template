import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
	return (
		<Router>
			<div className="vh-100">
				<Header />
				<Switch>
					<Route exact to="/" component={Body} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
