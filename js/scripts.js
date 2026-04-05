document.addEventListener('DOMContentLoaded', () => {
    console.log("TIENDAPRO cargada correctamente");

    // --- 1. CARRUSEL ---
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        setInterval(() => showSlide(currentSlide + 1), 6000);
    }

    // --- 2. BÚSQUEDA ---
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            alert(query ? "Buscando: " + query : "Ingresa un término.");
        });
    }

    // --- 3. WHATSAPP ---
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open("https://wa.me/56912345678?text=Hola TIENDAPRO", "_blank");
        });
    }

    // --- 4. LÓGICA CARRITO (REEMPLAZADO) ---
    let contadorCarrito = 0;
    const badge = document.getElementById('cart-count'); // Detecta el span que añadimos
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aumentar número
            contadorCarrito++;
            if (badge) badge.innerText = contadorCarrito;

            // Obtener nombre
            const name = btn.closest('.product-card').querySelector('h3').innerText;
            
            // Mostrar mensaje arriba
            mostrarNotificacion(`✅ ${name} añadido al carrito.`);
        });
    });

    function mostrarNotificacion(mensaje) {
        const toast = document.createElement('div');
        toast.className = 'cart-toast';
        toast.innerText = mensaje;
        document.body.appendChild(toast);

        // Animación de salida
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.top = '0px';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }
});