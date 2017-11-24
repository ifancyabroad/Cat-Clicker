const catPicture = document.getElementById('cat-picture');
const clickDisplay = document.getElementsByTagName('h2')[0];
let clicks = 0;

catPicture.addEventListener('click', function(){
	clicks++;
	clickDisplay.innerHTML = 'Clicks: ' + clicks;
}, false);