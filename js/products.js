
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const getCatalog = () => (typeof PRODUCTS !== 'undefined' && PRODUCTS) ? Object.values(PRODUCTS) : [];

    if (!productsGrid) return;

    const animateFilter = (cb) => {
        productsGrid.classList.add('is-filtering');
        setTimeout(() => {
            cb();
            productsGrid.classList.remove('is-filtering');
        }, 180);
    };

    // Function to render products
    const renderProducts = (filter = 'all') => {
        animateFilter(() => {
            productsGrid.innerHTML = ''; // Clear the grid
            const catalog = getCatalog();

            if (!catalog || catalog.length === 0) {
                productsGrid.innerHTML = '<p>No products found.</p>';
                return;
            }

            const productsToRender = catalog.filter(product => filter === 'all' ? true : product.category === filter);

            if (productsToRender.length === 0) {
                productsGrid.innerHTML = '<p>No products found in this category.</p>';
                return;
            }

            productsToRender.forEach((product, index) => {
                const delay = index * 70;
                const productCard = `
                    <a href="product-detail.html?id=${product.id}" class="product-card filter-in" style="animation-delay: ${delay}ms">
                        <div class="product-image-wrapper">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">${typeof formatPrice === 'function' ? formatPrice(product.price) : product.price}</p>
                            <p class="product-description">${product.description}</p>
                        </div>
                    </a>
                `;
                productsGrid.insertAdjacentHTML('beforeend', productCard);
            });
        });
    };

    const waitForCatalogAndRender = (filter = 'all', attempts = 0) => {
        if (typeof PRODUCTS === 'undefined' || !getCatalog().length) {
            if (attempts > 20) {
                productsGrid.innerHTML = '<p>No products found.</p>';
                return;
            }
            setTimeout(() => waitForCatalogAndRender(filter, attempts + 1), 100);
            return;
        }
        renderProducts(filter);
    };

    // Initial render
    waitForCatalogAndRender();

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            waitForCatalogAndRender(filter);
        });
    });
});
