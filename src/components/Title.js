import React from "react";
import {offset, customOffset} from "./Utils.js";
import '../styling/title.css';

export class Title extends React.Component {
	constructor(props) {
		super(props);

		this.fillHeight = this.fillHeight.bind(this);
	}

	fillHeight(heightToFill) {
		
		let fillDivs = [];

		for(let i = 0; i < heightToFill; i++) {
			let shadowDiv = offset(i);
			fillDivs.push(<div style = {shadowDiv} class = "titleShade">Nicholas Wiegand</div>);
		}

		fillDivs.reverse();

		return fillDivs;
	}

	render() {
		var titleStyling = {
			direction: "rtl",
			right: "10vw",
			top: "10vh",
			//webkitTextStroke: "2px black"
		}

		var shadowContStyling = {
			overflow: "hidden",
			height: "100vh",
			position: "absolute",
			width: "100vw"
		}

	let rgbOff = [5,5,5];
	let rgbAc = [0,0,0];
	let dangerousHTML = customOffset(-.6,10,10,30,"Nicholas Wiegand","titleShade",rgbAc,rgbOff);

	return (
		<div>
			<div id = "shadowContainer">
				<div dangerouslySetInnerHTML = {{__html: dangerousHTML}}></div>
			</div>
			<div style = {titleStyling} class = "title">Nicholas Wiegand</div>
		</div>
		)
	}
};

export default Title;