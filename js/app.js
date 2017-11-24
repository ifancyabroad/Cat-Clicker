const catsDisplay = document.getElementById('cats-display');
const catPicture = document.getElementById('cat-picture');
const clickDisplay = document.getElementsById('clicks');

class Cat {
	constructor(name, image) {
		this.name = name;
		this.image = image;
		this.clicks = 0;
		this.html = 
		`<div class="cat">
			<ul class="cat-details">
				<li id="cat-name">${this.name}</li>
				<li id="clicks">Clicks: 0</li>
			</ul>
			<img src="${this.image}" alt="A picture of a cat" id="cat-picture">
		</div>`
	}
	addClick() {
		this.clicks++;
	}
	addContent() {
		catsDisplay.insertAdjacentHTML('beforeend', this.html);
	}
}

const cat1 = new Cat('Bob', 'images/cat.jpg');
const cat2 = new Cat('Henry', 'images/cat1.jpg');

cat1.addContent();
cat2.addContent();

catPicture.addEventListener('click', function(){
	clickDisplay.innerHTML = 'Clicks: ' + clicks;
}, false);