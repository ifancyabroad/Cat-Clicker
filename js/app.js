(function() {
	// Model section
	const model = {		
		// Array for all cat instances to be stored
		catArray: [],
	
		// Array containing all cat names and images
		// Add new cats here
		catData: [
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
		],
		
		// Cat class
		Cat: class {
			constructor(id, name, image) {
				// Id to match cat instance with user selection
				this.id = id;
				// Cat properties
				this.name = name;
				this.image = image;
				this.clicks = 0;
				this.html = '';		
				this.menuHTML = `<li class="cat-link">${this.name}</li>`;
			}
			
			// Get HTML with updated click counter
			updateHTML() {
				this.html =
				`<div id="${this.id}" class="cat">
					<ul class="cat-details">
						<li class="cat-name">${this.name}</li>
						<li class="clicks">Clicks: ${this.clicks}</li>
					</ul>
					<img src="${this.image}" alt="A picture of a cat" class="cat-picture">
				</div>`;
			}	
		}
	}
	
	// Octopus section (communicates between model and view)
	const octopus = {	
		// Functions to run for first loading
		init: function() {
			this.createCats();
			this.getMenu();
			this.getCat(model.catArray[0]);
		},
	
		// Update Menu items
		getMenu: function() {
			model.catArray.forEach(function(cat) {
				view.updateMenu(cat.menuHTML);
			});
			view.addMenuListeners();
		},
		
		// Update cat display
		getCat: function(cat) {
			cat.updateHTML();
			view.updateDisplay(cat.html);
			view.addImageListener();
		},
		
		// Finds which cat was clicked based on ID
		findCat: function(elem) {
			let id = elem.parentElement.id;
			let thisCat;
			model.catArray.forEach(function(cat) {
				if (id == cat.id) {
					thisCat = cat;
				}
			});
			return thisCat;
		},
		
		// Finds which menu item was clicked based on name
		findName: function(elem) {
			let name = elem.innerText;
			model.catArray.forEach(function(cat) {
				if (name == cat.name) {
					thisCat = cat;
				}
			});
			return thisCat;
		},
		
		// Method for incrementing clicks to the cat
		addClick: function(cat) {
			cat.clicks++;
		},
		
		// Function for creating all cats in the catData array
		createCats: function() {
			let id = 0;
			model.catData.forEach(function(cat) {
				let c = new model.Cat(id, cat.name, cat.image);
				model.catArray.push(c);
				id++;
			});
		},
	}

	// View section
	const view = {
		// Add menu items to the page
		updateMenu: function(cat) {
			const catList = document.getElementById('cat-list');
			catList.insertAdjacentHTML('beforeend', cat);
		},
		
		// Add cat display to the page
		updateDisplay: function(cat) {
			const catsDisplay = document.getElementById('cats-display');
			catsDisplay.innerHTML = '';
			catsDisplay.insertAdjacentHTML('beforeend', cat);
		},
		
		// Add listener to the cat picture
		addImageListener: function() {
			// Object containing all cat pictures on the page
			const catPicture = document.getElementsByClassName('cat-picture')[0];
			catPicture.addEventListener('click', function(e) {
				// Find out which cat instance has been selected
				let cat = octopus.findCat(e.target);
				let counter = e.target.previousElementSibling.lastElementChild;
				octopus.addClick(cat);
				counter.innerHTML = 'Clicks: ' + cat.clicks;
			}, false);
		},
		
		// Add event listener to all menu items
		addMenuListeners: function() {
			const catLinks = document.getElementsByClassName('cat-link');
			for (let link of catLinks) {
				link.addEventListener('click', function(e) {					
					let cat = octopus.findName(e.target);
					octopus.getCat(cat);
				});
			}
		}
	}
	// Make it go!
	octopus.init();
})();