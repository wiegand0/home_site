import React from "react";
import {customOffset} from './Utils.js';
import '../styling/menu.css';
import { Link } from 'react-router-dom';


export class Menu extends React.Component {

	render() {
		let rgbOff = [5,5,5];
		let rgbAc = [0,0,0];

		let snekContent = customOffset(.5, 82, 40, 40, "Book Snek", "menuShade", rgbAc, rgbOff);
		let aboutContent = customOffset(.5, 80, 48, 40, "About", "menuShade", rgbAc, rgbOff);
		let resumeContent = customOffset(.5, 84, 56, 40, "Resume", "menuShade", rgbAc, rgbOff);
		let linksContent = customOffset(.5, 82, 64, 40, "Links", "menuShade", rgbAc, rgbOff);

		return (<div> 

				<div id = 'shadowContainer'>
					<div dangerouslySetInnerHTML={{__html: snekContent}}></div>
					<div dangerouslySetInnerHTML={{__html: aboutContent}}></div>
					<div dangerouslySetInnerHTML={{__html: resumeContent}}></div>
					<div dangerouslySetInnerHTML={{__html: linksContent}}></div>
				</div>

				<Link to="/snake" class = 'menu Book'>Book Snek</Link>

				<Link to="/about" class = 'menu About'>About</Link>

				<Link to="/resume" class = 'menu Resume'>Resume</Link>

				<Link to="/links" class = 'menu Links'>Links</Link>

			</div>)
	}

}

export default Menu;