//offset is how far it gets displaced
//iterations is how many time
//content is text of the div
//classi is the class of the div
export const customOffset = (offset, startPosX, startPosY, iterations, content, classi, rgb, rgbOff) => {
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