document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('products-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountEl = document.getElementById('cart-count');
    // Impact elements removed per requirement (do not display polluting/responsible)
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearBtn = document.getElementById('clear-cart-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';

    // Render Products
    function renderProducts() {
        grid.innerHTML = '';

        const filteredProducts = products.filter(p => {
            if (currentFilter === 'all') return true;
            return p.type === currentFilter;
        });

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            // Do not style as good/bad; neutral card
            card.className = 'product-card';

            // Remove eco badges (responsable/polluant)
            let badge = '';

            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${badge}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="description">${product.description}</p>
                    <div class="meta">
                        <span class="origin">📍 ${product.origin}</span>
                        <span class="price">${product.price} €</span>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
                </div>
            `;

            // Add event listener to button
            const btn = card.querySelector('.add-to-cart-btn');
            btn.addEventListener('click', () => {
                window.nirdState.addToCart(product);
                // Animation effect on button
                btn.textContent = "Ajouté !";
                btn.classList.add('added');
                setTimeout(() => {
                    btn.textContent = "Ajouter au panier";
                    btn.classList.remove('added');
                }, 1000);
            });

            grid.appendChild(card);
        });
    }

    // Render Cart
    function renderCart() {
        const cart = window.nirdState.getCart();
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Votre panier est vide.</p>';
            checkoutBtn.disabled = true;
            cartCountEl.textContent = 0;
            cartImpactEl.textContent = '0 pts';
            cartImpactEl.className = 'impact-neutral';
            return;
        }

        checkoutBtn.disabled = false;
        cartCountEl.textContent = cart.length;

        cart.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">${item.price} €</span>
                </div>
                <div class="cart-item-actions">
                    <span class="item-impact ${item.scoreImpact > 0 ? 'positive' : (item.scoreImpact < 0 ? 'negative' : 'neutral')}">
                        ${item.scoreImpact > 0 ? '✅ Responsable' : (item.scoreImpact < 0 ? '❌ Polluant' : '⚖️ Neutre')}
                    </span>
                    <button class="remove-btn" data-index="${index}">×</button>
                </div>
            `;

            itemEl.querySelector('.remove-btn').addEventListener('click', () => {
                window.nirdState.removeFromCart(index);
            });

            cartItemsContainer.appendChild(itemEl);
        });

        // Do not display total impact
    }

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts();
        });
    });

    // Clear Cart
    clearBtn.addEventListener('click', () => {
        if (confirm('Voulez-vous vraiment vider votre panier et réinitialiser votre score ?')) {
            window.nirdState.clearCart();
        }
    });

    // Listen for global state updates
    window.addEventListener('cartUpdated', () => {
        renderCart();
    });

    // Initial Render
    renderProducts();
    renderCart();
});
