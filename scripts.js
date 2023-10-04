 import data from './data.js'

 const itemList = document.getElementById('item-list')
 const cartQty = document.getElementById('cart-qty')
 const cartTotal = document.getElementById('cart-total')


 itemList.innerHTML = '<li> Hello World</li>'

console.log(itemList)

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


//----------------------------------------------------
// add item 
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
//---------------------------------------------------
    // Show Items
    function showItems(){
    //  console.log(cart.length)
        const qty = getQty()
        cartQty.innerHTML = `You have ${getQty()} items in your cart`

    let itemStr = ''
     for (let i =0; i < cart.length; i += 1 ){
        //console.log(`-${ cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name
        // const price = cart[i].price
        // const qty = cart[i].qty 

       const { name, price, qty } = cart [i]


        itemStr += `<li>${name} $${price} x ${qty} = ${qty * price} </li>`
     }
     itemList.innerHTML = itemStr


     //console.log(`Total in cart: $${getTotal()}`)
     cartTotal.innerHTML = `Total in cart: $${getTotal()}`
    }
//----------------------------------------------------
//Get Qty 
    function getQty(){//gets total quantity 
        let qty = 0 //qty is only visible in this block of code 
        for(let i = 0; i < cart.length; i += 1){
            qty += cart[i].qty
        }
        return qty //return ends a function but can also send the value somewhere 
    }
//----------------------------------------------------
// Get total
    function getTotal(){
        let total = 0 
        for(let i =0; i < cart.length; i += 1){
           total += cart[i].price * cart[i].qty
        }

        return total.toFixed(2)
    }

    function removeItem(name, qty = 0){
        for(let i = 0; i < cart.length; i += 1){
            if(cart[i].name === name){
                if (qty > 0) {
                    cart[i].qty -= qty
                }
                cart[i].qty -= 1 
                if(cart[i].qty < 1 || qty === 0){
                    cart.splice(i, 1)
                }
                return
            }
        }
    }



//----------------------------------------------------


    addItem('Apple', 0.99)
    addItem('Orange', 1.29)
    addItem('Apple', 0.99)
    addItem('Apple', 0.99)
    addItem('Frisbee',8.99)
    addItem('Apple', 0.99)
    addItem('Apple', 0.99)
    addItem('Orange', 1.29)
    addItem('Orange', 1.29)
    removeItem('Frisbee')
    removeItem('Apple', 1)



    showItems();
 
}

  