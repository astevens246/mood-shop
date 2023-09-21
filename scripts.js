 import data from './data.js'

const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image
	img.width = 300
	img.height = 300

    const desc = document.createElement('P')
// give the paragraph text from the data
desc.innerText = data[i].desc
// append the paragraph to the div
newDiv.appendChild(desc)
// do the same thing for price
const price = document.createElement('P')
price.innerText = data[i].price
newDiv.appendChild(price)

	// Add the image to the div
	newDiv.appendChild(img)
	console.log(img) // Check the console!
	itemsContainer.appendChild(newDiv)
}