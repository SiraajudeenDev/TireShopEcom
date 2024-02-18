document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-container");

    // Sample product data
    const products = [
        { name: "Product 1", price: 19.99, image: "product1.jpg" },
        { name: "Product 2", price: 29.99, image: "product2.jpg" },
        { name: "Product 3", price: 29.99, image: "product3.jpg" },
        { name: "Product 4", price: 29.99, image: "product4.jpg" },
        { name: "Product 5", price: 29.99, image: "product5.jpg" },
        { name: "Product 6", price: 29.99, image: "product6.jpg" },
        { name: "Product 7", price: 29.99, image: "product7.jpg" },
        { name: "Product 8", price: 29.99, image: "product2.jpg" },
        { name: "Product 9", price: 29.99, image: "product2.jpg" },
        { name: "Product 10", price: 29.99, image: "product2.jpg" },
        { name: "Product 11", price: 29.99, image: "product2.jpg" },
        { name: "Product 12", price: 29.99, image: "product2.jpg" },
        { name: "Product 13", price: 29.99, image: "product2.jpg" },
        // Add more products as needed
    ];

    // Populate product cards
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        productsContainer.appendChild(card);
    });
});

function addToCart(productName, price) {
    // Implement your cart logic here
    console.log(`Added ${productName} to cart for $${price.toFixed(2)}`);
}
