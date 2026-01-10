const API_URL = "https://fakestoreapi.com/products";

const form = document.getElementById("productForm");
const productsDiv = document.getElementById("productsContainer");
const loading = document.getElementById("loadingIndicator");
const error = document.getElementById("errorMessage");
const search = document.getElementById("searchInput");

let products = [];
let editId = null;

// Load products
document.addEventListener("DOMContentLoaded", fetchProducts);

// Fetch all products
async function fetchProducts() {
  try {
    loading.style.display = "block";
    const res = await fetch(API_URL);
    products = await res.json();
    displayProducts(products);
  } catch {
    error.textContent = "Failed to load products";
  } finally {
    loading.style.display = "none";
  }
}

// Display products
function displayProducts(data) {
  productsDiv.innerHTML = "";

  data.forEach(p => {
    productsDiv.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" />
        <h3>${p.title}</h3>
        <p>$${p.price}</p>
        <p>${p.category}</p>
        <button onclick="editProduct(${p.id})">Edit</button>
        <button onclick="deleteProduct(${p.id})">Delete</button>
      </div>
    `;
  });
}

// Add and  Update product
form.addEventListener("submit", async e => {
  e.preventDefault();

  const product = {
    title: title.value,
    price: price.value,
    category: category.value,
    description: description.value,
    image: image.value
  };

  try {
    if (editId) {
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
      editId = null;
    } else {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
      const newProduct = await res.json();
      products.unshift(newProduct);
    }

    form.reset();
    fetchProducts();
  } catch {
    alert("Operation failed");
  }
});

// Edit product
function editProduct(id) {
  const p = products.find(item => item.id === id);

  title.value = p.title;
  price.value = p.price;
  category.value = p.category;
  description.value = p.description;
  image.value = p.image;

  editId = id;
}

// Delete product
async function deleteProduct(id) {
  if (!confirm("Delete product?")) return;

  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  products = products.filter(p => p.id !== id);
  displayProducts(products);
}

// Search products
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});
