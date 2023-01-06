const product = [
	{
		id: 1,
		title: 'Luois Vitton Bag',
		price: 1527,
		images: './images/bag-4.png'
	},
	{
		id: 2,
		title: 'Nike',
		price: 127,
		images: './images/nike-1.png'
	},
	{
		id: 3,
		title: 'Mac Pro 32 inch',
		price: 2527,
		images: './images/apple-mac.png'
	},
	{
		id: 4,
		title: 'Macbock Air',
		price: 1222,
		images: './images/macbook-air.png'
	}
];

const categories = [
	...new Set(
		product.map(product => {
			return product;
		})
	)
];
let i = 0;

let container = document.querySelector('.card-container');

container.innerHTML = categories
	.map(item => {
		let { id, title, price, images } = item;

		return `
    <div class="card">
    <div class="body-img">
    <img src=${images} alt=${title}/>
    </div>
    <div class="content">
    <p>${title}</p>
    <span>${price}</span>
      <button onclick='addToCart(${id})'>Add to cart</button> 
      
</div>

</div>
`;
	})
	.join('');

let cart = [];

function addToCart(id) {
	cart.push({ ...categories[id] });
	showCart();
}

// remove item from cart
function removeItem(id) {
	cart.splice(id, 1);
	showCart();
}

function showCart() {
	let k = 0,
		total = 0;

	document.querySelector('.count').innerHTML = cart.length;
	if (cart.length === 0) {
		document.querySelector('.cartItem').innerHTML = 'The cart is empty';
		document.querySelector('#total').innerHTML = `£ ${0}.00`;
	} else {
		document.querySelector('.cartItem').innerHTML = cart
			.map(item => {
				const { id, images, title, price } = item;
				total = total + price;
				document.querySelector('#total').innerHTML = `£ ${total}`;
				return `
          <div class="cart-item">
          <div class="box-img">
          <img src=${images} class="rowimg" alt=${title}/>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size:16px;'>${price}.00</h2>
					<i class='bx bxs-trash' onclick='removeItem(${id})'></i> </div>
          
          `;
			})
			.join('');
	}
}
