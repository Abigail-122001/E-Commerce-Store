const products = [
  {
    id:1,
    name:"Headphones",
    price:1499,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id:2,
    name:"Smart Watch",
    price:2499,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id:3,
    name:"Shoes",
    price:1999,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  }
];

let cart = [];

const productsEl = document.getElementById("products");
const countEl = document.getElementById("count");
const cartItemsEl = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

function renderProducts(){
  productsEl.innerHTML = products.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function removeItem(index){
  cart.splice(index,1);
  renderCart();
}

function renderCart(){
  countEl.textContent = cart.length;

  cartItemsEl.innerHTML = cart.map((item,index) => `
    <div class="cart-item">
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeItem(${index})">X</button>
    </div>
  `).join("");

  const total = cart.reduce((sum,item)=>sum+item.price,0);
  totalEl.textContent = total;
}

renderProducts();