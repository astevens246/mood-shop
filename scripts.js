 import data from './data.js'

 const itemList = document.getElementById('item-list')
 const cartQty = document.getElementById('cart-qty')
 const cartTotal = document.getElementById('cart-total')

 const homeLink = document.getElementById('home-link');
 const aboutLink = document.getElementById('about-link');
 const cartLink = document.getElementById('cart-link');
//--------------------------------------------------------
//Handle Change events on update input 
itemList.onchange = function(e){
    if (e.target && e.target.classList.contains('update')){
        const name = e.target.dataset.name
        const qty = parseInt(e.target.value)
        updateCart(name, qty)

    }

}
// -------------------------------------------------------
// Handle clicks on list
itemList.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('remove')) {
        const name = e.target.getAttribute('data-name');
        removeItem(name); // Call the removeItem function to remove the item from the cart
        showItems(); // Update the cart display after removal
    } else if (e.target && e.target.classList.contains('add-one')){
        const name = e.target.dataset.name
        addItem(name)
    } else if (e.target && e.target.classList.contains('remove-one')){
        const name = e.target.dataset.name
        removeItem(name, 1)
    }
});

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

    const all_items_button = Array.from(document.querySelectorAll("button"))
    console.log(all_items_button)
    all_items_button.forEach(elt => elt.addEventListener('click', () => {
        addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
        showItems()
      }))
    // handle add form submit
  
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

//---------------------------------------------------
let itemStr = '';
for (let i = 0; i < cart.length; i += 1) {
    const { name, price, qty } = cart[i];

    itemStr += `<li>
        ${name} $${price} x ${qty} = $${qty * price} 
        <button class="remove" data-name="${name}">Remove</button>
        <button class="add-one" data-name="${name}"> + </button>
        <button class="remove-one" data-name="${name}"> - </button>
        <input class="update" type="number" min="0" data-name=${name}>


    </li>`;
}
//-------------------------------------------------------

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
//----------------------------------------------
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

//------------------------------------------------------
    function updateCart(name, qty){
        for (let i= 0; i < cart.length; i += 1){
            if(cart[i].name === name) {
                if (qty < 1) {
                    removeItem(name)
                    return
                }
                cart[i].qty = qty
                showItems()
                return
            }
        }
    }

//----------------------------------------------------


    showItems();
 
}

  