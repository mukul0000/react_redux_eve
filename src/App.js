import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import { About } from "./component/about";
import { Navbar } from "./component/Navbar";
import { User } from "./component/details";
import { Details } from "./component/userDetails";
import { Signup } from "./component/login";

function App() {
	return (
		<div className="App">
			<Navbar />
			<br />
			<Switch>
				<Route exact path="/">
					<Signup></Signup>
				</Route>
				<Route path="/about">
					<About></About>
				</Route>

				<Route path="/contact">
					<h1>contact here : </h1>
				</Route>
				<Route exact path="/user">
					<User></User>
				</Route>

				<Route path="/user/:id">
					<Details />
				</Route>

				<Route> 404 page not found</Route>
			</Switch>
		</div>
	);
}

export default App;
