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

    const cart =[]

    const a = 999
    const b = 888
    const greeting = "Hello"
    const place  = "World"
    const obj = { a, b, greeting, place }
    


    console.log(obj)
    console.log('***********')




    function addItem(name, price) {
        for (let i= 0; i < cart.length; i += 1){
            if(cart[i].name === name){
                cart[i].qty += 1
                return
            }
        }
     const item = { name, price, qty: 1}
     cart.push(item)
    }
    // Show Items
    function showItems(){
    //  console.log(cart.length)
        const qty = getQty()
        console.log(`You have ${getQty()} items in your cart`)

     for (let i =0; i < cart.length; i += 1 ){
        console.log(`-${ cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
     }


     console.log(`Total in cart: $${getTotal()}`)
    }
    //Get Qty 
    function getQty(){//gets total quantity 
        let qty = 0 //qty is only visible in this block of code 
        for(let i = 0; i < cart.length; i += 1){
            qty += cart[i].qty
        }
        return qty //return ends a function but can also send the value somewhere 
    }
    // Get total
    function getTotal(){
        let total = 0 
        for(let i =0; i < cart.length; i += 1){
           total += cart[i].price * cart[i].qty
        }

        return total.toFixed(2)
    }


    addItem('Apple', 0.99)
    addItem('Orange', 1.29)
    addItem('Apple', 0.99)
    addItem('Apple', 0.99)
    addItem('Apple', 0.99)
    addItem('Apple', 0.99)
    addItem('Orange', 1.29)
    addItem('Orange', 1.29)



    showItems();
 
}

  