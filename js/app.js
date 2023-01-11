// ======== GET DATA FROM ARRAY =========
const categories = [
	...new Set(
		product.map(product => {
			return product;
		})
	)
];

let i = 0;

let container = document.querySelector('.card-container');

// ========HTML COMPONENT=========
container.innerHTML = categories
	.map(item => {
		let { id, title, price, images } = item;

		return (
			`
    <div class="card">
    <div class="body-img">
    <img src=${images} alt=${title}/>
    </div>
    <div class="content">
    <h2>${title}</h2>
    <span>£ ${price}.00</span>` +
			"<button onclick='addToCart(" +
			i++ +
			")'>Add to cart</button>" +
			` 
        </div>

    </div>
    `
		);
	})
	.join('');

let cart = [];

// ========ADD PRODUCT TO CART=========
function addToCart(e) {
	cart.push({ ...categories[e] });
	showCart();
	//console.log(e);
}
// ========REMOVE PRODUCT FROM CART=========
function removeItem(j) {
	cart.splice(j, 1);
	showCart();
	console.log(j);
}
// ========SHOW CART=========
function showCart() {
	let total = 0;
	let g = 0;
	document.querySelector('.count').innerHTML = cart.length;
	if (cart.length === 0) {
		document.querySelector('.cartItem').innerHTML = 'The cart is empty';
		document.querySelector('#total').innerHTML = '£ ' + 0 + '.00';
	} else {
		document.querySelector('.cartItem').innerHTML = cart
			.map(item => {
				const { images, title, price } = item;
				total = total + price;
				document.querySelector('#total').innerHTML = '£ ' + total + '.00';
				return (
					`
          <div class="cart-item">
          <div class="box-img">
          <img src=${images} class="rowimg" alt=${title}/>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size:16px;'>${price}.00</h2>` +
					"<i class='bx bxs-trash' onclick='removeItem(" +
					g++ +
					")'></i></div>"
				);
			})
			.join('');
	}
}

// ========SELECT ITEMS=========
function getSelectedItems() {
	document.querySelector('#msg').innerHTML =
		'The selected value is :<b style="color:red;">' +
		form.items[form.items.selectedIndex].text +
		'</b>';
}
