import React from "react";
import {Route, Switch} from "react-router-dom";
import '../styling/content.css';


export class Content extends React.Component {

	render() {
		return(
			<Switch>
				<div id="container">
					<Route path="/snake"></Route>
					<Route path="/about"></Route>
					<Route path="/resume"></Route>
					<Route path="/links"></Route>
				</div>
			</Switch>
		);
	}

}

export default Content;