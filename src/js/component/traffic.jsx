import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			//your state properties here
			clickedLight: null
		};
	}
	render() {
		let glowingRed = "";
		if (this.state.clickedLight == "red") glowingRed = "glowing";
		let glowingYellow = "";
		if (this.state.clickedLight == "yellow") glowingYellow = "glowing";
		let glowingGreen = "";
		if (this.state.clickedLight == "green") glowingGreen = "glowing";

		return (
			<div>
				<div className="post" />
				<div className="lights light-background">
					<div
						className={"red-light " + glowingRed}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>

					<div
						className={"yellow-light " + glowingYellow}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>

					<div
						className={"green-light " + glowingGreen}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
