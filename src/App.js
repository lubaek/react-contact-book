import "./App.css";
import Navbar from "./components/Navbar";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import SingleContact from "./components/SingleContact";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<>
					<Navbar></Navbar>
					<Route exact path="/" component={Landing} />
					<Route exact path="/contact/:id" component={SingleContact} />
				</>
			</Router>
		</Provider>
	);
}

export default App;
