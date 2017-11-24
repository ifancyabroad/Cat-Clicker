const catsDisplay = document.getElementById('cats-display');
let catData = [
{name: 'Bob',
image: 'images/cat.jpg'},
{name: 'Henry',
image: 'images/cat2.jpg'}
];
let catArray = [];

class Cat {
	constructor(id, name, image) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.clicks = 0;
		this.html = 
		`<div id="${this.id}" class="cat">
			<ul class="cat-details">
				<li class="cat-name">${this.name}</li>
				<li class="clicks">Clicks: 0</li>
			</ul>
			<img src="${this.image}" alt="A picture of a cat" class="cat-picture">
		</div>`
	}
	addClick(display) {
		this.clicks++;
		display.innerHTML = 'Clicks: ' + this.clicks;
	}
	addContent() {
		catsDisplay.insertAdjacentHTML('beforeend', this.html);
	}
}


const createCats = function() {
	let id = 0;
	catData.forEach(function(cat) {
		let c = new Cat(id, cat.name, cat.image);
		c.addContent();
		catArray.push(c);
		id++;
	});
}();

const catPicture = document.getElementsByClassName('cat-picture');

for (let cat of catPicture) {
	cat.addEventListener('click', function(e) {
		let choice = e.target.parentElement.id;
		let counter = e.target.previousElementSibling.lastElementChild;
		catArray.forEach(function(cat) {
			if (choice == cat.id) {
				cat.addClick(counter);
			}
		});
	}, false);
}