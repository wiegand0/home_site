//offset diagonally, positive for up left, negative for down right
export const offset = (by, startPos, offSet, colorR, colorG, colorB) => {

	let colorDisplacement = by*5;

	let rightDisplacement = 9.4 - by*.6 + "vw";

	let topDisplacement = 9.4 - by*.6 + "vh";

	let colorStr = String(colorDisplacement + " " + colorDisplacement + " " + colorDisplacement);

	let sineDisplacement = 10 + Math.sin(by) + "vh";

	return {
		color: "rgb(" + colorStr + ")",
		top: topDisplacement,
		right: rightDisplacement
	}
}

//offset is how far it gets displaced
//iterations is how many time
//content is text of the div
//classi is the class of the div
export const customOffset = (offset, startPosX, startPosY, iterations, content, classi, rgb, rgbOff) => {
	let colorDisplaced = offset;
	let finalContent = [];
	let horizontalDisplaced = startPosX;
	let verticalDisplaced = startPosY;
	let rAc = rgb[0];
	let gAc = rgb[1];
	let bAc = rgb[2];

	for(let i = 1; i <= iterations; i++) {
		horizontalDisplaced += offset;
		verticalDisplaced += offset;
		rAc += rgbOff[0];
		gAc += rgbOff[1];
		bAc += rgbOff[2];
		let rgbString = rAc + "," + gAc + "," + bAc;
		finalContent.push("<p class = " + classi + " " + 
			"style = 'top:" + verticalDisplaced + "vh;right:" + horizontalDisplaced + "vw;" +
			"color:rgb(" + rgbString + ");'>" + content + "</p>"); 
	}

	finalContent.reverse();

	let returnContent = finalContent.join('');

	return returnContent;
}
/*

	fillHeight(heightToFill) {
		
		let fillDivs = [];

		for(let i = 0; i < heightToFill; i++) {
			let shadowDiv = offset(i);
			fillDivs.push(<div style = {shadowDiv} >NICHOLAS WIEGAND</div>);
		}

		fillDivs.reverse();

		return fillDivs;
	}
*/