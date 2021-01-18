import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Bio } from "./Components/Bio/Bio";
import { Projects } from "./Components/Projects/Projects";
import { Experience } from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import "bootstrap/dist/css/bootstrap.css";
class App extends React.Component {
	fetchData = () => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => console.log(json));
	};
	render() {
		this.fetchData();

		return (
			<div className="App">
				<NavBar />
				<div class="mx-auto MainSection ">
					<AboutMe />
					<Bio />
					<Experience />
					<Projects />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
