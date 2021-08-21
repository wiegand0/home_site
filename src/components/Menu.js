import React from "react";
import {customOffset} from './Utils.js';
import '../styling/menu.css';


export class Menu extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		let rgbOff = [5,5,5];
		let rgbAc = [0,0,0];
		let snekContent = customOffset(.5, 70, 85, 40, "Book Snek", "menuShade", rgbAc, rgbOff);
		let aboutContent = customOffset(.5, 55, 85, 40, "About", "menuShade", rgbAc, rgbOff);

		let resumeContent = customOffset(.5, 37, 85, 40, "Resume", "menuShade", rgbAc, rgbOff);
		let linksContent = customOffset(.5, 22, 85, 40, "Links", "menuShade", rgbAc, rgbOff);

		return (<div> 

				<div id = 'shadowContainer'><div dangerouslySetInnerHTML={{__html: snekContent}}></div></div>
				<div class = 'menu'>Book Snek</div>


				<div id = 'shadowContainer'><div dangerouslySetInnerHTML={{__html: aboutContent}}></div></div>
				<div class = 'menuAbout'>About</div>

				<div id = 'shadowContainer'><div dangerouslySetInnerHTML={{__html: resumeContent}}></div></div>
				<div class = 'menuResume'>Resume</div>

				<div id = 'shadowContainer'><div dangerouslySetInnerHTML={{__html: linksContent}}></div></div>
				<div class = 'menuLinks'>Links</div>

			</div>)
	}

}

export default Menu;