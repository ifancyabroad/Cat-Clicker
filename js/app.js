(function() {
	// Array containing all cat names and images
	// Add new cats here
	let catData = [
	{name: 'Bob',
	image: 'images/cat.jpg'},
	{name: 'Henry',
	image: 'images/cat2.jpg'},
	{name: 'Jeffrey',
	image: 'images/cat3.jpg'},
	{name: 'Leroy',
	image: 'images/cat4.jpg'},
	{name: 'Whisky',
	image: 'images/cat5.jpg'},
	{name: 'Kate',
	image: 'images/cat6.jpg'}
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
			this.html = '';		
		}
		// Update Menu items
		updateMenu() {
			const catList = document.getElementById('cat-list');
			const menuHTML = `<li class="cat-link">${this.name}</li>`;
			catList.insertAdjacentHTML('beforeend', menuHTML);
		}
		
		// Get HTML with updated click counter
		updateHTML() {
			const catsDisplay = document.getElementById('cats-display');
			catsDisplay.innerHTML = '';
			this.html =
			`<div id="${this.id}" class="cat">
				<ul class="cat-details">
					<li class="cat-name">${this.name}</li>
					<li class="clicks">Clicks: ${this.clicks}</li>
				</ul>
				<img src="${this.image}" alt="A picture of a cat" class="cat-picture">
			</div>`;
			catsDisplay.insertAdjacentHTML('beforeend', this.html);
		}
		// Method for incrementing clicks to the cat
		addClick(display) {
			this.clicks++;
			display.innerHTML = 'Clicks: ' + this.clicks;
		}	
		// Add event listener
		addEvent() {
			let cat = this;
			// Object containing all cat pictures on the page
			const catPicture = document.getElementsByClassName('cat-picture');
			catPicture[0].addEventListener('click', function(e) {
				// Find out which cat instance has been selected
				let counter = e.target.previousElementSibling.lastElementChild;
				cat.addClick(counter);
			}, false);
		}
		// Method for adding cat content to the page
		addContent() {
			this.updateHTML();
			this.addEvent();
		}
	}
	
	// Function for creating all cats in the catData array
	const createCats = function() {
		let id = 0;
		catData.forEach(function(cat) {
			let c = new Cat(id, cat.name, cat.image);
			catArray.push(c);
			c.updateMenu();
			id++;
		});
		catArray[0].addContent();
	}();

	// Object containing all links to cats
	const catLinks = document.getElementsByClassName('cat-link');

	// Add event listener to all menu items
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
})();