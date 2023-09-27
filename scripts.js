 import data from './data.js'

const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item';
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image;
	img.width = 300;
	img.height = 300;
    newDiv.appendChild(img)
    itemsContainer.appendChild(newDiv)

    const desc = document.createElement('P');
    // give the paragraph text from the data
    desc.innerText = data[i].desc;
    // append the paragraph to the div
    newDiv.appendChild(desc);
    // do the same thing for price
    const price = document.createElement('P');
    price.innerText = data[i].price;
    newDiv.appendChild(price);
    // make a button
    const button = document.createElement('button');
    button.id = data[i].name;
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
}

   const cart =[]

   function addItem(name, price) {
    const item = {name: name, price: price, qty: 1}
    cart.push(item)

   }

   function showItems(){
    console.log(cart.length)
    console.log(`You have ${cart.length} items in your cart`)


   }

   addItem('Apple', 0.99)
   addItem('Orange', 1.29)
   showItems();
