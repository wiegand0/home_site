import React from "react";
import {customOffset} from "./Utils.js";
import '../styling/title.css';

export class Title extends React.Component {
	render() {

	let rgbOff = [5,5,5];
	let rgbAc = [0,0,0];
	let dangerousHTML = customOffset(.6,76,15,30,"Nicholas","titleShade",rgbAc,rgbOff);
	let dangerousLastHTML = customOffset(.6,78,25,30,"Wiegand","titleShade",rgbAc,rgbOff);


	return (
		<div>
			<div id = "shadowContainer">
				<div dangerouslySetInnerHTML = {{__html: dangerousHTML}}></div>
				<div dangerouslySetInnerHTML = {{__html: dangerousLastHTML}}></div>
				<div class = "title">Nicholas</div>
				<div class = "titleLast">Wiegand</div>			
			</div>
		</div>
		)
	}
};

export default Title;