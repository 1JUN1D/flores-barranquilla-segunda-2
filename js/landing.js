// ===================================
// LANDING PAGE JS - CASA del PETALO Barranquilla
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, code: "001", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Ramo Mixto Pasión Sutil", description: "Ramo de cinco rosas rojas con alstroemerias blancas y solidago en envoltura crema.", price: 93750, image: "assets/catalog/ramo1.webp" },
    { id: 2, code: "002", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Cono \'Te Quiero Mucho\'", description: "Doce rosas rojas en papel craft negro con mensaje y lazo de puntos.", price: 137500, image: "assets/catalog/ramo2.webp" },
    { id: 3, code: "003", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Clásico Vino Tinto", description: "Doce rosas rojas en cono vino tinto con cinta a juego.", price: 150000, image: "assets/catalog/ramo3.webp" },
    { id: 4, code: "004", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Ramo Bicolor Elegancia", description: "Rosas rojas y blancas con eucalipto en cono beige y lazo dorado.", price: 162500, image: "assets/catalog/ramo4.webp" },
    { id: 5, code: "005", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Burdeos Rosas Rojas", description: "Bouquet de rosas rojas en cono burdeos con interior blanco.", price: 162500, image: "assets/catalog/ramo5.webp" },
    { id: 6, code: "006", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Ramo Rústico Bicolor", description: "Rosas rojas y blancas con gypsophila en envoltura craft natural.", price: 168750, image: "assets/catalog/ramo6.webp" },
    { id: 7, code: "007", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Ramo Romance Bicolor Premium", description: "Bouquet generoso de rosas rojas y blancas en velo rosa pastel y violeta.", price: 250000, image: "assets/catalog/ramo7.webp" },
    { id: 8, code: "008", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Amor Florería", description: "Rosas rojas con paniculata en papel decorado con corazones.", price: 162500, image: "assets/catalog/ramo8.webp" },
    { id: 9, code: "009", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Ramo Nube de Amor", description: "Rosas rojas y blancas envueltas en abundante nube de gypsophila.", price: 225000, image: "assets/catalog/ramo9.webp" },
    { id: 10, code: "010", category: "Rosas Amarillas", tags: ["rosas", "cumpleaños"], name: "Ramo Sol Amarillo", description: "Doce rosas amarillas con paniculata en envoltura azul marino y lazo amarillo.", price: 150000, image: "assets/catalog/ramo10.webp" },
    { id: 11, code: "011", category: "Rosas Amarillas", tags: ["rosas", "cumpleaños"], name: "Ramo Amarillo Primavera", description: "Rosas amarillas con eucalipto plateado en envoltura beige y lazo blanco.", price: 150000, image: "assets/catalog/ramo11.webp" },
    { id: 12, code: "012", category: "Cajas Premium", tags: ["rosas", "arreglos"], name: "Caja Premium Rosas Amarillas", description: "Caja redonda blanca con abundantes rosas amarillas y lazo dorado.", price: 200000, image: "assets/catalog/ramo12.webp" },
    { id: 13, code: "013", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Arreglo Floral Rosa Tierna", description: "Arreglo en base oscura con rosas rosadas, solidago y tarjeta personalizada.", price: 162500, image: "assets/catalog/ramo13.webp" },
    { id: 14, code: "014", category: "Girasoles y Rosas", tags: ["girasoles", "rosas", "arreglos"], name: "Arreglo Sol y Pasión", description: "Girasoles en la parte superior y abundantes rosas rojas en la base.", price: 400000, image: "assets/catalog/ramo14.webp" },
    { id: 15, code: "015", category: "Cumpleaños", tags: ["rosas", "cumpleaños"], name: "Arreglo Cumpleaños Rosa Roja", description: "Rosas rojas con paniculata, solidago y globo de Feliz Cumpleaños.", price: 287500, image: "assets/catalog/ramo15.webp" },
    { id: 16, code: "016", category: "Girasoles y Rosas", tags: ["girasoles", "rosas"], name: "Ramo Girasol y Rosas", description: "Girasoles, rosas rojas y paniculata en papel rosado con lazo.", price: 187500, image: "assets/catalog/ramo16.webp" },
    { id: 17, code: "017", category: "Girasoles", tags: ["girasoles"], name: "Ramo Girasoles con Pompones Rosa", description: "Ramo grande de girasoles y pompones rosados en envoltura negra y lazo dorado.", price: 187500, image: "assets/catalog/ramo17.webp" },
    { id: 18, code: "018", category: "Girasoles", tags: ["girasoles"], name: "Ramo Cono Girasoles Premium", description: "Ramo cono de girasoles en papel negro con detalles brillantes.", price: 312500, image: "assets/catalog/ramo18.webp" },
    { id: 19, code: "019", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Mini Ramo Rosa Roja", description: "Rosas rojas con eucalipto en papel beige rosado y cinta personalizada.", price: 75000, image: "assets/catalog/ramo19.webp" },
    { id: 20, code: "020", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Cono Blanco y Negro", description: "Rosas rojas con paniculata en envoltura blanca con bordes negros.", price: 175000, image: "assets/catalog/ramo20.webp" },
    { id: 21, code: "021", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Docena Rosa Romántica", description: "Doce rosas rojas con paniculata y eucalipto en papel rosa con lazo vinotinto.", price: 100000, image: "assets/catalog/ramo21.webp" },
    { id: 22, code: "022", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Ramo Mariposa Rosa", description: "Rosas rosadas con limonium blanco y mariposa dorada decorativa.", price: 250000, image: "assets/catalog/ramo22.webp" },
    { id: 23, code: "023", category: "Cumpleaños", tags: ["rosas", "cumpleaños"], name: "Ramo Happy Birthday", description: "Rosas rosadas y blancas con paniculata y cinta \'Happy Birthday\'.", price: 275000, image: "assets/catalog/ramo23.webp" },
    { id: 24, code: "024", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Ramo Princesa con Corona", description: "Rosas rosadas y blancas con corona dorada de princesa.", price: 462500, image: "assets/catalog/ramo24.webp" },
    { id: 25, code: "025", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo 100 Rosas Rojas", description: "Cien rosas rojas envueltas en papel negro tipo flor.", price: 687500, image: "assets/catalog/ramo25.webp" },
    { id: 26, code: "026", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Esfera Pasión", description: "Rosas rojas con paniculata blanca en envoltura negra tipo flor.", price: 375000, image: "assets/catalog/ramo26.webp" },
    { id: 27, code: "027", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Tornado Rojo Premium", description: "Ramo cono extralargo con abundantes rosas rojas en papel negro.", price: 375000, image: "assets/catalog/ramo27.webp" },
    { id: 28, code: "028", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Esfera Roja Nube", description: "Bouquet circular de rosas rojas rodeado de gypsophila blanca.", price: 375000, image: "assets/catalog/ramo28.webp" },
    { id: 29, code: "029", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Ramo Multicolor Rosa Pasión", description: "Rosas rosadas claras, oscuras y rojas en envoltura rosa tipo flor.", price: 562500, image: "assets/catalog/ramo29.webp" },
    { id: 30, code: "030", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Ramo Estrella Bicolor", description: "Rosas rojas y blancas con paniculata en envoltura tipo estrella blanco y negro.", price: 400000, image: "assets/catalog/ramo30.webp" },
    { id: 31, code: "031", category: "Cajas Premium", tags: ["rosas", "arreglos"], name: "Box Premium Rosas Bicolor", description: "Caja redonda blanca con rosas rojas y rosadas en composición esférica.", price: 500000, image: "assets/catalog/ramo31.webp" },
    { id: 32, code: "032", category: "Cajas Premium", tags: ["rosas", "arreglos"], name: "Box Premium Fucsia y Blanco", description: "Caja blanca con rosas blancas y fucsia formando una cúpula floral.", price: 312500, image: "assets/catalog/ramo32.webp" },
    { id: 33, code: "033", category: "Rosas con Ferrero", tags: ["rosas", "arreglos"], name: "Box Rosas y Ferrero", description: "Caja negra con rosas rojas y chocolates Ferrero Rocher dorados.", price: 500000, image: "assets/catalog/ramo33.webp" },
    { id: 34, code: "034", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Origami Rosas Rojas", description: "Nueve rosas rojas en envoltura tipo origami beige y dorado.", price: 0, priceLabel: "COTIZAR", image: "assets/catalog/ramo34.webp" },
    { id: 35, code: "035", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Mini Ramo 6 Rosas", description: "Seis rosas rojas en envoltura crema con lazo vinotinto.", price: 62500, image: "assets/catalog/ramo35.webp" },
    { id: 36, code: "036", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Clásico Romance", description: "Seis rosas rojas con paniculata y follaje en papel blanco con bordes dorados.", price: 75000, image: "assets/catalog/ramo36.webp" },
    { id: 37, code: "037", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Ramo Rosa Pastel Eucalipto", description: "Rosas rosadas con eucalipto plateado en envoltura blanca y rosa pastel.", price: 187500, image: "assets/catalog/ramo37.webp" },
    { id: 38, code: "038", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Mini Ramo Rosa Tierna", description: "Rosas rosadas con paniculata blanca en envoltura rosa translúcida.", price: 150000, image: "assets/catalog/ramo38.webp" },
    { id: 39, code: "039", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Ramo Mariposas Rosadas", description: "Rosas rosadas con paniculata y mariposas doradas decorativas.", price: 150000, image: "assets/catalog/ramo39.webp" },
    { id: 40, code: "040", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Cono Mini Rojo", description: "Rosas rojas con abundante paniculata en envoltura beige translúcida.", price: 125000, image: "assets/catalog/ramo40.webp" },
    { id: 41, code: "041", category: "Rosas con Ferrero", tags: ["rosas", "arreglos"], name: "Ramo Rosas y Ferrero", description: "Ramo blanco con rosas rojas, paniculata y caja de Ferrero Rocher.", price: 237500, image: "assets/catalog/ramo41.webp" },
    { id: 42, code: "042", category: "Rosas con Ferrero", tags: ["rosas", "arreglos"], name: "Box Rosas con Ferrero Rocher", description: "Caja blanca con rosas rojas, paniculata y cajita dorada de Ferrero.", price: 312500, image: "assets/catalog/ramo42.webp" },
    { id: 43, code: "043", category: "Girasoles y Rosas", tags: ["girasoles", "rosas"], name: "Ramo Sol Romántico", description: "Rosas rojas con girasol central, paniculata y solidago en envoltura dorada.", price: 75000, image: "assets/catalog/ramo43.webp" },
    { id: 44, code: "044", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Café Rosas Rojas", description: "Seis rosas rojas con paniculata en envoltura color café texturizada.", price: 62500, image: "assets/catalog/ramo44.webp" },
    { id: 45, code: "045", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Navidad Rojo", description: "Rosas rojas, follaje de pino y bola navideña roja en envoltura craft.", price: 62500, image: "assets/catalog/ramo45.webp" },
    { id: 46, code: "046", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Esfera Romance Blanco", description: "Rosas rojas con abundante paniculata en envoltura blanca elegante.", price: 175000, image: "assets/catalog/ramo46.webp" },
    { id: 47, code: "047", category: "Cajas Premium", tags: ["rosas", "arreglos"], name: "Box Rosas Black & White", description: "Caja negra con rosas rojas y paniculata blanca y lazo de raso blanco.", price: 187500, image: "assets/catalog/ramo47.webp" },
    { id: 48, code: "048", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Ramo Compliments Rojo", description: "Rosas rojas con abundante paniculata en envoltura craft con texto.", price: 287500, image: "assets/catalog/ramo48.webp" },
    { id: 49, code: "049", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corona Fúnebre Tradicional", description: "Corona con rosas rojas, claveles blancos, crisantemos y follaje verde.", price: 475000, image: "assets/catalog/ramo49.webp" },
    { id: 50, code: "050", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Pira Fúnebre con Cinta", description: "Pira con rosas rojas, crisantemos blancos y palmas con cinta de dedicatoria.", price: 275000, image: "assets/catalog/ramo50.webp" },
    { id: 51, code: "051", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corona Fúnebre con Solidago", description: "Corona con centro de rosas rojas y solidago sobre crisantemos blancos.", price: 275000, image: "assets/catalog/ramo51.webp" },
    { id: 52, code: "052", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corona Fúnebre Blanca y Amarilla", description: "Corona con crisantemos blancos y claveles amarillos sobre follaje verde.", price: 175000, image: "assets/catalog/ramo52.webp" },
    { id: 53, code: "053", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corazón Fúnebre Blanco", description: "Corazón con rosas blancas y crisantemos sobre base de follaje verde.", price: 287500, image: "assets/catalog/ramo53.webp" },
    { id: 54, code: "054", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Cruz Fúnebre Tradicional", description: "Cruz de crisantemos blancos con centro de rosas rojas y cinta morada.", price: 237500, image: "assets/catalog/ramo54.webp" },
    { id: 55, code: "055", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corazón Fúnebre Bicolor", description: "Corazón con un costado de crisantemos blancos y otro de rosas rojas con solidago.", price: 306250, image: "assets/catalog/ramo55.webp" },
    { id: 56, code: "056", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corazón Fúnebre Rosa Pastel", description: "Corazón en crisantemos blancos con bouquet de rosas rosadas y claveles.", price: 287500, image: "assets/catalog/ramo56.webp" },
    { id: 57, code: "057", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corazón Abierto Fúnebre", description: "Corazón abierto en claveles blancos con cabezal de rosas rojas y follaje.", price: 400000, image: "assets/catalog/ramo57.webp" },
    { id: 58, code: "058", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Cruz Fúnebre con Rosas Centrales", description: "Cruz en crisantemos blancos con franja central de rosas rojas y cinta.", price: 350000, image: "assets/catalog/ramo58.webp" },
    { id: 59, code: "059", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corazón Fúnebre Blanco Total", description: "Corazón abierto con crisantemos blancos y bouquet de rosas blancas.", price: 412500, image: "assets/catalog/ramo59.webp" },
    { id: 60, code: "060", category: "Arreglos Fúnebres", tags: ["arreglos"], name: "Corona Fúnebre con Centro Rojo", description: "Corona con centro de rosas rojas sobre base de crisantemos blancos.", price: 337500, image: "assets/catalog/ramo60.webp" },
    { id: 61, code: "061", category: "Ramos Nupciales", tags: ["rosas", "arreglos"], name: "Ramo Nupcial Rosas Blancas", description: "Ramo de novia con rosas blancas, paniculata y follaje atado con cinta y perlas.", price: 150000, image: "assets/catalog/ramo61.webp" },
    { id: 62, code: "062", category: "Ramos Nupciales", tags: ["rosas", "arreglos"], name: "Ramo Nupcial Romance", description: "Ramo de novia con rosas blancas y abundante paniculata en cinta de raso.", price: 162500, image: "assets/catalog/ramo62.webp" },
    { id: 63, code: "063", category: "Ramos Nupciales", tags: ["rosas", "arreglos"], name: "Ramo Nupcial Mini", description: "Ramo de novia con cinco rosas blancas y abundante paniculata.", price: 87500, image: "assets/catalog/ramo63.webp" },
    { id: 64, code: "064", category: "Ramos Nupciales", tags: ["rosas", "arreglos"], name: "Ramo Nupcial Clásico", description: "Ramo de novia con rosas blancas, paniculata y verdor con cinta de perlas.", price: 150000, image: "assets/catalog/ramo64.webp" },
    { id: 65, code: "065", category: "Ramos Nupciales", tags: ["rosas", "arreglos"], name: "Ramo Nupcial Rojo Pasión", description: "Ramo nupcial con rosas rojas, fresias blancas y paniculata.", price: 168750, image: "assets/catalog/ramo65.webp" },
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'priority'; // 'priority' = orden por defecto de la landing
let LANDING_PRIORITY_TAG = ''; // Se establece por cada landing

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.tags && p.tags.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    // Dentro de cada grupo, ordenar por precio ascendente
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- FILTRAR PRODUCTOS ---
function getFilteredProducts(filter, priorityTag) {
    if (filter === 'priority' || filter === 'all') {
        return getSortedProducts(priorityTag);
    }
    return products.filter(p => 
        p.tags && p.tags.includes(filter) || p.category.toLowerCase().includes(filter)
    ).sort((a, b) => a.price - b.price);
}

// --- CREAR TARJETA DE PRODUCTO ---
function createCard(product) {
    const price = formatCOP(product.price);
    const div = document.createElement('div');
    div.className = 'product-card-landing';
    div.innerHTML = `
        <div class="product-img-wrap" onclick="openLB('../${product.image}', 'COD_${product.code} - ${product.name}', '${price}')">
            <img src="../${product.image}" alt="${product.name} - Flores a domicilio Barranquilla" loading="lazy">
            <span class="product-code-badge">COD_${product.code}</span>
        </div>
        <div class="product-body">
            <h3>${product.name}</h3>
            <p class="desc">${product.description}</p>
            <div class="product-footer-landing">
                <div class="price-block">
                    <span class="label">Precio</span>
                    <span class="price">${price}</span>
                </div>
                <a href="#" class="btn-order-landing" onclick="orderWA('COD_${product.code}', '${product.name.replace(/'/g, "\\'")}', ${product.price}); return false;">
                    🛒 Pedir
                </a>
            </div>
        </div>
    `;
    return div;
}

// --- RENDER CATÁLOGO ---
function renderCatalog(filter) {
    const grid = document.getElementById('landingProductsGrid');
    const counter = document.getElementById('landingResultsCount');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = getFilteredProducts(filter || currentLandingFilter, LANDING_PRIORITY_TAG);

    if (counter) {
        counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;
    }

    filtered.forEach(p => grid.appendChild(createCard(p)));
}

// --- FILTRAR ---
function filterLanding(filter, el) {
    currentLandingFilter = filter;
    document.querySelectorAll('.filter-btn-landing').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    renderCatalog(filter);
}

// --- WHATSAPP ORDER + GOOGLE ADS CONVERSION ---
function orderWA(code, name, price) {
    // Google Ads conversion tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC',
            'value': price,
            'currency': 'COP'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }

    const formattedPrice = formatCOP(price);
    const message = `Hola, me interesa el ramo *${code} - ${name}* con un precio de ${formattedPrice}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/573242258939?text=${encodeURIComponent(message)}`, '_blank');
}

// --- WHATSAPP GENÉRICO + CONVERSIÓN ---
function contactWA(source, customMsg) {
    // Google Ads conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source,
            'value': 1
        });
    }

    const msg = customMsg || `Hola, estoy interesado/a en sus arreglos florales. Me podrían dar más información?`;
    window.open(`https://wa.me/573242258939?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- LIGHTBOX ---
function openLB(img, title, price) {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    document.getElementById('lbImg').src = img;
    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbPrice').textContent = price;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLB() {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    lb.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog('priority');
});
