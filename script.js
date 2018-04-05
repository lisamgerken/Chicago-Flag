(function() {

	imageArray = ["https://s3-us-west-2.amazonaws.com/stellaroute/images/chicago_sweet-mandy-bs-medium.jpg", 
	"https://media1.fdncms.com/chicago/imager/its-difficult-to-overemphasize-the-delicacy-of-the-fryers-art-in-the-ligh/u/original/10104851/parsons-magnum.jpg", 
	"https://tse3.mm.bing.net/th?id=OIP.bOhRkN-3WuzidTSg9xEJCQHaFj&pid=15.1&P=0&w=240&h=181", 
	"http://blog.forbestravelguide.com/wp-content/uploads/2013/12/FTG-ChicagosBestDoughnuts-CreditDo-RiteDonuts.png"];

	const star1 = document.getElementById("star1");
	const topLeft = document.getElementById("pic1");
	const topRight = document.getElementById("pic2");
	const bottomLeft = document.getElementById("pic3");
	const bL = document.getElementsByTagName("h3");
	const bottomRight = document.getElementById("pic4");

	function handleStar1Button() {
		topLeft.src = imageArray[0];
	}
	star1.onclick = handleStar1Button;

	function handleStar2Button() {
		topRight.src = imageArray[1];
	}
	star2.onclick = handleStar2Button;

	function handleStar3Button() {
		bottomLeft.src = imageArray[2];
	}
	star3.onclick = handleStar3Button;

	function handleStar4Button() {
		bottomRight.src = imageArray[3];
	}
	star4.onclick = handleStar4Button;

})();
