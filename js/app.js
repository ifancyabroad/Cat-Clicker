(function() {
	
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
	}
	
	const octopus = {
		// Function for creating all cats in the catData array
		createCats: function() {
			let id = 0;
			model.catData.forEach(function(cat) {
				let c = new model.Cat(id, cat.name, cat.image);
				model.catArray.push(c);
				c.updateMenu();
				id++;
			});
			model.catArray[0].addContent();
		}()
	}

	const view = {
		// Add event listener to all menu items
		addListeners: function() {
			const catLinks = document.getElementsByClassName('cat-link');
			for (let link of catLinks) {
				link.addEventListener('click', function(e) {
					let choice = e.target.innerText;
					model.catArray.forEach(function(cat) {
						if (choice == cat.name) {
							cat.addContent();
						}
					});
				});
			}
		}()
	}
})();