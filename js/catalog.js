// ===================================
// CATÁLOGO - búsqueda, filtros, 3 columnas por precio
// CASA del PETALO - Barranquilla
// ===================================

let currentFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('searchInput');
    if (search) {
        search.addEventListener('input', function(e) {
            searchQuery = (e.target.value || '').trim();
            renderProducts();
        });
    }
    renderProducts();
    initScrollTop();
});

function applyFilters() {
    let list = products.slice();
    if (currentFilter !== 'all') {
        list = list.filter(p => p.category === currentFilter);
    }
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(p =>
            (p.name && p.name.toLowerCase().indexOf(q) !== -1) ||
            (p.code && p.code.toLowerCase().indexOf(q) !== -1) ||
            (p.description && p.description.toLowerCase().indexOf(q) !== -1)
        );
    }
    list.sort((a, b) => {
        const ap = a.price || Number.MAX_SAFE_INTEGER;
        const bp = b.price || Number.MAX_SAFE_INTEGER;
        return ap - bp;
    });
    return list;
}

function renderProducts() {
    const colCheap = document.getElementById('colCheap');
    const colMid   = document.getElementById('colMedium');
    const colExp   = document.getElementById('colExpensive');
    const counter  = document.getElementById('resultsCounter');
    const empty    = document.getElementById('emptyState');

    const list = applyFilters();

    if (list.length === 0) {
        colCheap.innerHTML = colMid.innerHTML = colExp.innerHTML = '';
        if (empty) empty.classList.add('active');
        if (counter) counter.innerHTML = '';
        return;
    }
    if (empty) empty.classList.remove('active');
    if (counter) counter.innerHTML = 'Mostrando <strong>' + list.length + '</strong> producto' +
        (list.length === 1 ? '' : 's') +
        (currentFilter !== 'all' ? ' en "<strong>' + currentFilter + '</strong>"' : '') +
        (searchQuery ? ' que coinciden con "<strong>' + searchQuery + '</strong>"' : '');

    const total = list.length;
    const third = Math.ceil(total / 3);
    const cheap = list.slice(0, third);
    const mid   = list.slice(third, third * 2);
    const exp   = list.slice(third * 2);

    fillColumn(colCheap, cheap);
    fillColumn(colMid, mid);
    fillColumn(colExp, exp);
}

function fillColumn(target, items) {
    target.innerHTML = '';
    if (!items.length) {
        target.innerHTML = '<p class="price-column-empty">Sin productos en este rango</p>';
        return;
    }
    items.forEach(p => target.appendChild(createProductCard(p)));
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);

    const formattedPrice = product.priceLabel
        ? product.priceLabel
        : new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(product.price);

    const safeName = (product.name || '').replace(/'/g, "\\'");
    card.innerHTML = `
        <div class="product-image-container" onclick="openLightbox('${product.image}', 'COD_${product.code} - ${safeName}', '${formattedPrice}')">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="zoom-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
            </div>
            <span class="product-badge">COD_${product.code}</span>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div>
                    <span class="price-label">Precio</span>
                    <div class="product-price">${formattedPrice}</div>
                </div>
                <a href="#" class="btn-order" onclick="orderProduct('COD_${product.code}', '${safeName}', ${product.price}); return false;">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Pedir
                </a>
            </div>
        </div>
    `;
    return card;
}

function filterProducts(category, btnEl) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    renderProducts();
    const grid = document.getElementById('productsColumns');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
}

function openLightbox(image, title, price) {
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImage').src = image;
    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxPrice').textContent = price;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function orderProduct(code, name, price) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }
    const formattedPrice = price && price > 0
        ? new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price)
        : 'precio a cotizar';
    const message = `Hola, me interesa el ramo *${code} - ${name}* (${formattedPrice}). ¿Podrían darme más información?`;
    window.open(`https://wa.me/573242258939?text=${encodeURIComponent(message)}`, '_blank');
}

function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    if (!scrollBtn) return;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) scrollBtn.classList.add('visible');
        else scrollBtn.classList.remove('visible');
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});
