import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
	"pk_test_51IOFd2DAwS36Hqb0TLX6EklNEn8aQOoHDIjQeUmeJwMLhSs0oF6pxZd4Mkj4uMsN9BWaHdYWwIXp8lWsbQNotfQG00yfHBhMDE"
);

function App() {
	const [{}, disPatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				disPatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				disPatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/Orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/Login">
						<Login />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/Checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
