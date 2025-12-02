/**
 * Product Detail Page
 * Loads product data dynamically based on URL parameter
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        // Redirect to products page if no ID
        window.location.href = 'products.html';
        return;
    }

    // Load product data
    const product = getProduct(productId);

    if (!product) {
        // Redirect if product not found
        window.location.href = 'products.html';
        return;
    }

    // Update page title and meta
    document.title = `${product.name} - CHARRONNE`;
    document.getElementById('product-meta-description').content = product.description;

    // Populate product information
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = formatPrice(product.price);
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-details-text').textContent = product.details;

    // Populate materials list
    const materialsList = document.getElementById('product-materials-list');
    product.materials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        materialsList.appendChild(li);
    });

    // Load recommendations
    loadRecommendations(productId);
});

function loadRecommendations(productId) {
    const recommendations = getRecommendedProducts(productId, 4);
    const grid = document.getElementById('recommendations-grid');

    recommendations.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';

    card.innerHTML = `
        <a href="product-detail.html?id=${product.id}" class="product-link">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image-thumb">
            </div>
            <div class="product-info-thumb">
                <h3 class="product-name-thumb">${product.name}</h3>
                <p class="product-price-thumb">${formatPrice(product.price)}</p>
            </div>
        </a>
    `;

    return card;
}
