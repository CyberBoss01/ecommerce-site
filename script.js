// DARK MODE
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// HAMBURGER
document.getElementById("hamburger").onclick = () => {
    document.getElementById("navLinks").classList.toggle("active");
};

// LOAD PRODUCTS FROM BACKEND
async function loadProducts() {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();

    const container = document.getElementById("productList");

    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button onclick="addToCart('${p.name}')">Buy</button>
        `;
        container.appendChild(div);
    });
}

loadProducts();

// LOGIN
async function login() {
    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
    alert("Logged in ✔️");
}

// PAYSTACK
async function pay() {
    const res = await fetch("http://localhost:3000/api/payment/paystack", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: "test@email.com",
            amount: 5000
        })
    });

    const data = await res.json();
    window.location.href = data.data.authorization_url;
}

// CART
let cart = [];
function addToCart(name) {
    cart.push(name);
    alert(name + " added ✔️");
}

// GSAP ANIMATIONS
gsap.from(".hero h2", { y: -50, opacity: 0, duration: 1 });