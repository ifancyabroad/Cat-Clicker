const catsDisplay = document.getElementById('cats-display');
let catData = [
{name: 'Bob',
image: 'images/cat.jpg'},
{name: 'Henry',
image: 'images/cat2.jpg'}
];

class Cat {
	constructor(name, image) {
		this.name = name;
		this.image = image;
		this.clicks = 0;
		this.html = 
		`<div class="cat">
			<ul class="cat-details">
				<li class="cat-name">${this.name}</li>
				<li class="clicks">Clicks: 0</li>
			</ul>
			<img src="${this.image}" alt="A picture of a cat" class="cat-picture">
		</div>`
	}
	addClick() {
		this.clicks++;
		
	}
	addContent() {
		catsDisplay.insertAdjacentHTML('beforeend', this.html);
	}
}

const createCats = function() {
	catData.forEach(function(cat) {
		let c = new Cat(cat.name, cat.image);
		c.addContent();
	});
}();

const catPicture = document.getElementsByClassName('cat-picture');

for (let cat of catPicture) {
	cat.addEventListener('click', function(e) {
		console.log(e);
	}, false);
}