// Array containing all cat names and images
// Add new cats here
let catData = [
{name: 'Bob',
image: 'images/cat.jpg'},
{name: 'Henry',
image: 'images/cat2.jpg'}
];

// Array for all cat instances to be stored
let catArray = [];

// Cat class
class Cat {
	constructor(id, name, image) {
		// Id to match cat instance with user selection
		this.id = id;
		// Cat properties
		this.name = name;
		this.image = image;
		this.clicks = 0;
		this.html = 
		`<div id="${this.id}" class="cat">
			<ul class="cat-details">
				<li class="cat-name">${this.name}</li>
				<li class="clicks">Clicks: ${this.clicks}</li>
			</ul>
			<img src="${this.image}" alt="A picture of a cat" class="cat-picture">
		</div>`
	}
	// Method for incrementing clicks to the cat
	addClick(display) {
		this.clicks++;
		display.innerHTML = 'Clicks: ' + this.clicks;
	}
	// Method for adding cat content to the page
	addContent() {
		const catsDisplay = document.getElementById('cats-display');
		catsDisplay.innerHTML = '';
		catsDisplay.insertAdjacentHTML('beforeend', this.html);
	}
}

// Function for creating all cats in the catData array
const createCats = function() {
	let id = 0;
	catData.forEach(function(cat) {
		let c = new Cat(id, cat.name, cat.image);
		catArray.push(c);
		id++;
	});
	catArray[0].addContent();
}();

// Object containing all links to cats
const catLinks = document.getElementsByClassName('cat-link');

// Object containing all cat pictures on the page
const catPicture = document.getElementsByClassName('cat-picture');

for (let link of catLinks) {
	link.addEventListener('click', function(e) {
		let choice = e.target.innerText;
		catArray.forEach(function(cat) {
			if (choice == cat.name) {
				cat.addContent();
			}
		});
	});
}

// Adds an event listener to each picture
for (let cat of catPicture) {
	cat.addEventListener('click', function(e) {
		// Find out which cat instance has been selected
		let choice = e.target.parentElement.id;
		let counter = e.target.previousElementSibling.lastElementChild;
		catArray.forEach(function(cat) {
			// Increment the relevant cat counter
			if (choice == cat.id) {
				cat.addClick(counter);
			}
		});
	}, false);
}