/**
 * CAF - Centro de Acondicionamiento Físico & Centro de Entrenamiento Víctor Zamorano
 * Anserma, Caldas | Main Application Logic
 */

// --- Initial Data ---
const PRODUCTS = [
  {
    id: 1,
    name: "Proteína Whey 100% Pura 2lb",
    category: "suplementos",
    price: 135000,
    desc: "25g de proteína aislada por porción, rápida absorción para desarrollo y recuperación muscular.",
    badge: "Más Vendido",
    icon: "fa-solid fa-bottle-droplet",
    color: "from-amber-500 to-yellow-600"
  },
  {
    id: 2,
    name: "Creatina Monohidratada 300g (Creapure)",
    category: "suplementos",
    price: 95000,
    desc: "100% micronizada sin sabor. Aumenta tu fuerza, resistencia y potencia en entrenamientos pesados.",
    badge: "Fuerza Pura",
    icon: "fa-solid fa-bolt",
    color: "from-lime-500 to-emerald-600"
  },
  {
    id: 3,
    name: "Pre-Entreno Nitro Pump 30 Serv",
    category: "suplementos",
    price: 110000,
    desc: "Energía explosiva, vascularización y concentración extrema para tus sesiones más intensas.",
    badge: "Energía",
    icon: "fa-solid fa-fire-flame-curved",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    name: "BCAA 2:1:1 + Electrolitos 300g",
    category: "suplementos",
    price: 85000,
    desc: "Aminoácidos esenciales para evitar el catabolismo e hidratarte durante la rutina.",
    badge: "Recuperación",
    icon: "fa-solid fa-heart-pulse",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 5,
    name: "Camiseta Oversize Oficial CAF Zamorano",
    category: "ropa",
    price: 65000,
    desc: "Algodón premium de alto gramaje, corte holgado y diseño exclusivo de nuestra sede Anserma.",
    badge: "Exclusivo",
    icon: "fa-solid fa-shirt",
    color: "from-neutral-700 to-neutral-900"
  },
  {
    id: 6,
    name: "Licra Deportiva de Compresión Pro",
    category: "ropa",
    price: 55000,
    desc: "Tejido transpirable antitranspirante, soporte muscular óptimo para pesas y funcional.",
    badge: "Confort",
    icon: "fa-solid fa-person-running",
    color: "from-zinc-700 to-slate-900"
  },
  {
    id: 7,
    name: "Top Deportivo Mujer CAF High Impact",
    category: "ropa",
    price: 50000,
    desc: "Soporte ergonómico de alto impacto, ideal para Rumbaterapia, CrossFit y musculación.",
    badge: "Mujer CAF",
    icon: "fa-solid fa-vest",
    color: "from-pink-600 to-rose-700"
  },
  {
    id: 8,
    name: "Gorra CAF Snapback Bordada",
    category: "ropa",
    price: 45000,
    desc: "Estilo urbano deportivo con logo en alto relieve de Víctor Zamorano CAF.",
    badge: "Accesorio",
    icon: "fa-solid fa-hat-cowboy-side",
    color: "from-slate-800 to-zinc-950"
  },
  {
    id: 9,
    name: "Shaker / Termo Mezclador 700ml Pro",
    category: "accesorios",
    price: 25000,
    desc: "Libre de BPA con rejilla mezcladora antiderrame y compartimento para pastillas o scoops.",
    badge: "Indispensable",
    icon: "fa-solid fa-glass-water",
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: 10,
    name: "Straps de Agarre + Muñequeras Pro",
    category: "accesorios",
    price: 38000,
    desc: "Aumenta tus cargas en peso muerto y remos sin comprometer el agarre. Algodón reforzado.",
    badge: "Levantamiento",
    icon: "fa-solid fa-hand-fist",
    color: "from-amber-600 to-yellow-700"
  }
];

const GALLERY_DATA = [
  {
    id: 1,
    title: "Plan Pareja y Motivación",
    category: "pareja",
    categoryLabel: "Plan Pareja",
    desc: "Entrenar en pareja multiplica los resultados. En CAF Anserma diseñamos planes a la medida para dos.",
    image: "assets/images/galeria/galeria-1.jpg"
  },
  {
    id: 2,
    title: "Área de CrossFit & Entrenamiento Funcional",
    category: "funcional",
    categoryLabel: "CrossFit & Funcional",
    desc: "Zona industrial equipada para entrenamientos de alta intensidad, fuerza y resistencia metabólica.",
    image: "assets/images/galeria/galeria-2.jpg"
  },
  {
    id: 3,
    title: "Zona de Calistenia & Peso Corporal",
    category: "funcional",
    categoryLabel: "Calistenia",
    desc: "Barras, anillas y estructuras especializadas para dominar el control y fuerza corporal.",
    image: "assets/images/galeria/galeria-3.jpg"
  },
  {
    id: 4,
    title: "Sala de Halterofilia & Levantamiento de Pesas",
    category: "musculacion",
    categoryLabel: "Pesas Libres",
    desc: "Plataformas de levantamiento, barras olímpicas y discos bumpers para desarrollo de potencia.",
    image: "assets/images/galeria/galeria-4.jpg"
  },
  {
    id: 5,
    title: "Estudio de Rumbaterapia & Clases Grupales",
    category: "clases",
    categoryLabel: "Rumbaterapia",
    desc: "Ritmo, diversión y quema calórica con los mejores instructores en un ambiente con luces y energía.",
    image: "assets/images/galeria/galeria-5.jpg"
  },
  {
    id: 6,
    title: "Musculación e Hipertrofia Dirigida",
    category: "musculacion",
    categoryLabel: "Musculación",
    desc: "Mancuernas de todos los pesos y máquinas guiadas para desarrollo muscular seguro y progresivo.",
    image: "assets/images/galeria/galeria-6.jpg"
  },
  {
    id: 7,
    title: "Programas de Reducción de Peso y Salud Integral",
    category: "salud",
    categoryLabel: "Reducción de Peso",
    desc: "Acompañamiento sin juzgar: planes amables y efectivos adaptados a personas de todas las edades y tallas.",
    image: "assets/images/galeria/galeria-7.jpg"
  },
  {
    id: 8,
    title: "Zona Cardiovascular Moderna",
    category: "salud",
    categoryLabel: "Cardio & Salud",
    desc: "Caminadoras de última generación, elípticas y bicicletas para acondicionamiento aeróbico.",
    image: "assets/images/galeria/galeria-8.jpg"
  }
];

const SCHEDULE_DATA = [
  { day: "Lunes", time: "05:00 AM - 06:00 AM", class: "WOD Funcional Madrugadores", instructor: "Víctor Zamorano", type: "funcional", spots: "Cupos limitados" },
  { day: "Lunes", time: "08:30 AM - 09:30 AM", class: "Acondicionamiento & Salud", instructor: "Instructor Sala", type: "salud", spots: "Disponible" },
  { day: "Lunes", time: "06:30 PM - 07:30 PM", class: "CrossFit WOD Noche", instructor: "Víctor Zamorano", type: "funcional", spots: "Últimos cupos" },
  { day: "Lunes", time: "07:30 PM - 08:30 PM", class: "Rumbaterapia Fitness", instructor: "Profe Laura", type: "rumba", spots: "Abierto a todos" },

  { day: "Martes", time: "06:00 AM - 07:00 AM", class: "Funcional Hipertrofia", instructor: "Instructor Sala", type: "funcional", spots: "Disponible" },
  { day: "Martes", time: "09:00 AM - 10:00 AM", class: "GAP (Glúteos, Abdomen, Pierna)", instructor: "Instructor Sala", type: "musculacion", spots: "Disponible" },
  { day: "Martes", time: "06:30 PM - 07:30 PM", class: "Circuito Quema Grasa", instructor: "Víctor Zamorano", type: "salud", spots: "Disponible" },
  { day: "Martes", time: "07:30 PM - 08:45 PM", class: "Krav Maga (Defensa Personal)", instructor: "Sensei Invitado", type: "defensa", spots: "Requiere reserva" },

  { day: "Miércoles", time: "05:00 AM - 06:00 AM", class: "WOD Funcional Madrugadores", instructor: "Víctor Zamorano", type: "funcional", spots: "Disponible" },
  { day: "Miércoles", time: "08:30 AM - 09:30 AM", class: "Activación Metabólica", instructor: "Instructor Sala", type: "salud", spots: "Disponible" },
  { day: "Miércoles", time: "06:30 PM - 07:30 PM", class: "Powerlifting & Técnica de Fuerza", instructor: "Víctor Zamorano", type: "musculacion", spots: "Disponible" },
  { day: "Miércoles", time: "07:30 PM - 08:30 PM", class: "Rumbaterapia & Ritmos Latinos", instructor: "Profe Laura", type: "rumba", spots: "¡Gran Fiesta!" },

  { day: "Jueves", time: "06:00 AM - 07:00 AM", class: "Funcional HIIT", instructor: "Instructor Sala", type: "funcional", spots: "Disponible" },
  { day: "Jueves", time: "06:30 PM - 07:30 PM", class: "Calistenia & Core Extremo", instructor: "Instructor Sala", type: "funcional", spots: "Disponible" },
  { day: "Jueves", time: "07:30 PM - 08:45 PM", class: "Krav Maga (Defensa Personal)", instructor: "Sensei Invitado", type: "defensa", spots: "Requiere reserva" },

  { day: "Viernes", time: "05:00 AM - 06:00 AM", class: "WOD Funcional Cierre Semana", instructor: "Víctor Zamorano", type: "funcional", spots: "Disponible" },
  { day: "Viernes", time: "06:00 PM - 07:00 PM", class: "Desafío de Fuerza en Parejas", instructor: "Víctor Zamorano", type: "pareja", spots: "Dinámico" },
  { day: "Viernes", time: "07:00 PM - 08:00 PM", class: "Viernes de Rumbaterapia Neón", instructor: "Profe Laura", type: "rumba", spots: "Imperdible" },

  { day: "Sábado", time: "08:00 AM - 09:30 AM", class: "Super Sábado CrossFit & Resistencia", instructor: "Víctor Zamorano", type: "funcional", spots: "Abierto" },
  { day: "Sábado", time: "10:00 AM - 11:00 AM", class: "Taller de Técnica de Pesas & Postura", instructor: "Víctor Zamorano", type: "musculacion", spots: "Cupos libres" },

  { day: "Domingo", time: "08:30 AM - 10:00 AM", class: "Open Box & Cardio Recreativo", instructor: "Staff CAF", type: "salud", spots: "Entrenamiento libre" }
];

// --- Shopping Cart State ---
let cart = JSON.parse(localStorage.getItem('caf_cart')) || [];

// --- Global App Init ---
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initLiveStatus();
  initGallery();
  initRoutineGenerator();
  initSchedule();
  initStore();
  initCart();
  initConfaCalculator();
  initContactForm();
  initMobileMenu();
  updateUserNavBadge();
});

// ==========================================
// 1. HERO SLIDER (2 BANNERS)
// ==========================================
function initHeroSlider() {
  const slides = document.querySelectorAll('.slider-container .slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-lime-500', i === index);
      dot.classList.toggle('w-8', i === index);
      dot.classList.toggle('bg-white/40', i !== index);
      dot.classList.toggle('w-3', i !== index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, 6500);
  }

  function stopAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoplay();
    });
  });

  const sliderBox = document.querySelector('.slider-container');
  if (sliderBox) {
    sliderBox.addEventListener('mouseenter', stopAutoplay);
    sliderBox.addEventListener('mouseleave', startAutoplay);
  }

  // Show first slide and start
  showSlide(0);
  startAutoplay();
}

// ==========================================
// 2. LIVE GYM STATUS
// ==========================================
function initLiveStatus() {
  const statusBadge = document.getElementById('gym-live-status');
  if (!statusBadge) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = now.getHours();
  const min = now.getMinutes();
  const currentTime = hour + min / 60;

  let isOpen = false;
  let scheduleText = "";

  if (day >= 1 && day <= 5) { // Lunes a Viernes
    // 5:00 AM a 12:00 PM y 2:00 PM a 9:30 PM
    if ((currentTime >= 5 && currentTime < 12) || (currentTime >= 14 && currentTime < 21.5)) {
      isOpen = true;
    }
    scheduleText = "Hoy: 5:00 AM - 12:00 PM & 2:00 PM - 9:30 PM";
  } else if (day === 6) { // Sábado
    // 6:00 AM a 4:00 PM
    if (currentTime >= 6 && currentTime < 16) {
      isOpen = true;
    }
    scheduleText = "Hoy: 6:00 AM - 4:00 PM";
  } else { // Domingo o festivo
    // 7:00 AM a 1:00 PM
    if (currentTime >= 7 && currentTime < 13) {
      isOpen = true;
    }
    scheduleText = "Hoy: 7:00 AM - 1:00 PM";
  }

  if (isOpen) {
    statusBadge.innerHTML = `
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 live-pulse"></span>
        ¡ABIERTO AHORA! · ${scheduleText}
      </span>
    `;
  } else {
    statusBadge.innerHTML = `
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
        <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
        Cerrado en este momento · ${scheduleText}
      </span>
    `;
  }
}

// ==========================================
// 3. GALERÍA DE IMÁGENES + LIGHTBOX
// ==========================================
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentCategory = 'todas';
  let filteredItems = [...GALLERY_DATA];
  let currentLightboxIdx = 0;

  function renderGallery(cat = 'todas') {
    currentCategory = cat;
    if (cat === 'todas') {
      filteredItems = [...GALLERY_DATA];
    } else {
      filteredItems = GALLERY_DATA.filter(item => item.category === cat);
    }

    if (!grid) return;
    grid.innerHTML = filteredItems.map((item, index) => `
      <div class="gallery-item group cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-lime-500/40 transition duration-300" onclick="window.openLightbox(${index})">
        <div class="relative aspect-4/3 w-full overflow-hidden bg-slate-950">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-lime-400 border border-lime-500/30 text-xs font-semibold px-2.5 py-1 rounded-full">
            ${item.categoryLabel}
          </span>
          <div class="absolute bottom-3 left-3 right-3">
            <h4 class="text-white font-bold text-base md:text-lg group-hover:text-lime-400 transition-colors">${item.title}</h4>
            <p class="text-xs text-slate-300 line-clamp-2 mt-1">${item.desc}</p>
          </div>
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
            <span class="w-12 h-12 rounded-full bg-lime-500 text-black flex items-center justify-center text-lg shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-lime-500', 'text-black', 'font-bold');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      btn.classList.add('bg-lime-500', 'text-black', 'font-bold');
      const cat = btn.getAttribute('data-filter');
      renderGallery(cat);
    });
  });

  window.openLightbox = function(index) {
    currentLightboxIdx = index;
    const item = filteredItems[index];
    if (!item || !lightbox) return;

    lightboxImg.src = item.image;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  function nextLightbox() {
    currentLightboxIdx = (currentLightboxIdx + 1) % filteredItems.length;
    window.openLightbox(currentLightboxIdx);
  }

  function prevLightbox() {
    currentLightboxIdx = (currentLightboxIdx - 1 + filteredItems.length) % filteredItems.length;
    window.openLightbox(currentLightboxIdx);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }
  });

  renderGallery('todas');
}

// ==========================================
// 4. TU RUTINA PERSONALIZADA (INTERACTIVA)
// ==========================================
function initRoutineGenerator() {
  const form = document.getElementById('routine-generator-form');
  const resultContainer = document.getElementById('routine-result-box');
  if (!form || !resultContainer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const goal = document.querySelector('input[name="routine-goal"]:checked')?.value || 'reduccion';
    const level = document.getElementById('routine-level')?.value || 'principiante';
    const days = parseInt(document.getElementById('routine-days')?.value || '4');
    const focus = document.getElementById('routine-focus')?.value || 'general';

    generateCustomRoutine(goal, level, days, focus);
  });
}

function generateCustomRoutine(goal, level, days, focus) {
  const resultContainer = document.getElementById('routine-result-box');
  if (!resultContainer) return;

  const routineCatalog = {
    reduccion: {
      title: "Plan de Reducción de Grasa & Condición Metabólica",
      desc: "Combina ejercicios multiarticulares con entrenamiento funcional HIIT para acelerar el metabolismo y quemar calorías cuidando tus articulaciones.",
      badge: "Reducción & Salud",
      color: "lime",
      days: [
        {
          name: "Día 1: Circuito Full Body + Cardio HIIT",
          exercises: [
            { name: "Sentadilla libre o goblet", sets: "4 series", reps: "15 reps", rest: "45 seg" },
            { name: "Press plano con mancuernas", sets: "4 series", reps: "12 reps", rest: "45 seg" },
            { name: "Remo en polea baja", sets: "4 series", reps: "15 reps", rest: "45 seg" },
            { name: "Kettlebell Swing en zona funcional", sets: "4 series", reps: "20 reps", rest: "30 seg" },
            { name: "Caminadora con inclinación (cardio)", sets: "1 sesión", reps: "20 min", rest: "Constante" }
          ]
        },
        {
          name: "Día 2: Tren Inferior & Core Activo",
          exercises: [
            { name: "Prensa de piernas 45°", sets: "4 series", reps: "15 reps", rest: "60 seg" },
            { name: "Hip Thrust o puente de glúteo", sets: "4 series", reps: "12 reps", rest: "60 seg" },
            { name: "Zancadas dinámicas con mancuernas", sets: "3 series", reps: "12 por pierna", rest: "45 seg" },
            { name: "Plancha abdominal isométrica", sets: "4 series", reps: "45 seg", rest: "30 seg" },
            { name: "Bicicleta elíptica", sets: "1 sesión", reps: "15 min", rest: "Ritmo medio" }
          ]
        },
        {
          name: "Día 3: Tren Superior & Acondicionamiento",
          exercises: [
            { name: "Jalón al pecho agarre prono", sets: "4 series", reps: "12 reps", rest: "45 seg" },
            { name: "Press militar con mancuernas", sets: "3 series", reps: "12 reps", rest: "45 seg" },
            { name: "Elevaciones laterales", sets: "4 series", reps: "15 reps", rest: "30 seg" },
            { name: "Battle Ropes (Cuerdas de combate CrossFit)", sets: "5 rondas", reps: "30 seg activo", rest: "30 seg" }
          ]
        },
        {
          name: "Día 4: Rumbaterapia o Sesión Funcional",
          exercises: [
            { name: "Clase grupal de Rumbaterapia en el estudio", sets: "1 clase", reps: "50 min", rest: "Hidratación libre" },
            { name: "Estiramiento dinámico y movilidad articular", sets: "1 bloque", reps: "15 min", rest: "Relajación" }
          ]
        }
      ],
      nutritionTips: [
        "Mantén un consumo de agua de al menos 2.5 a 3 litros diarios en Anserma.",
        "Prioriza proteínas magras (pollo, huevos, atún, proteína en polvo) en cada comida.",
        "Disminuye azúcares refinados y gaseosas; cámbialos por agua con limón o té verde."
      ]
    },
    hipertrofia: {
      title: "Plan de Hipertrofia & Ganancia de Masa Muscular",
      desc: "Estructurado bajo sobrecarga progresiva y tensión mecánica para estimular el crecimiento de tejido muscular limpio.",
      badge: "Ganancia Muscular",
      color: "orange",
      days: [
        {
          name: "Día 1: Pecho, Hombro Anterior y Tríceps (Empuje)",
          exercises: [
            { name: "Press de banca plano con barra", sets: "4 series", reps: "8-10 reps", rest: "90 seg" },
            { name: "Press inclinado con mancuernas", sets: "4 series", reps: "10-12 reps", rest: "75 seg" },
            { name: "Aperturas en poleas (Cruces)", sets: "3 series", reps: "12-15 reps", rest: "60 seg" },
            { name: "Press militar sentado", sets: "4 series", reps: "8-10 reps", rest: "90 seg" },
            { name: "Extensión de tríceps en polea con cuerda", sets: "4 series", reps: "12 reps", rest: "60 seg" }
          ]
        },
        {
          name: "Día 2: Espalda, Hombro Posterior y Bíceps (Tracción)",
          exercises: [
            { name: "Dominadas o Jalón al pecho abierto", sets: "4 series", reps: "8-10 reps", rest: "90 seg" },
            { name: "Remo con barra T o soporte en pecho", sets: "4 series", reps: "10 reps", rest: "90 seg" },
            { name: "Remo en polea agarre neutro", sets: "3 series", reps: "12 reps", rest: "60 seg" },
            { name: "Pájaros para deltoides posterior", sets: "4 series", reps: "15 reps", rest: "45 seg" },
            { name: "Curl de bíceps con barra Z", sets: "4 series", reps: "10-12 reps", rest: "60 seg" }
          ]
        },
        {
          name: "Día 3: Pierna Completa & Enfoque Cuádriceps",
          exercises: [
            { name: "Sentadilla profunda en rack", sets: "4 series", reps: "8 reps pesadas", rest: "120 seg" },
            { name: "Prensa de 45° pies medios", sets: "4 series", reps: "10-12 reps", rest: "90 seg" },
            { name: "Sillón de extensiones de cuádriceps", sets: "3 series", reps: "15 reps al fallo", rest: "60 seg" },
            { name: "Gemelos de pie en máquina Smith", sets: "4 series", reps: "15 reps", rest: "45 seg" }
          ]
        },
        {
          name: "Día 4: Isquios, Glúteo y Brazos",
          exercises: [
            { name: "Peso muerto rumano con mancuernas", sets: "4 series", reps: "10 reps", rest: "90 seg" },
            { name: "Hip Thrust con barra pesada", sets: "4 series", reps: "10-12 reps", rest: "90 seg" },
            { name: "Curl femoral tumbado", sets: "4 series", reps: "12 reps", rest: "60 seg" },
            { name: "Super-serie: Curl Martillo + Fondos en paralelas", sets: "3 series", reps: "12 reps c/u", rest: "60 seg" }
          ]
        }
      ],
      nutritionTips: [
        "Consume un superávit calórico controlado de 300-400 kcal por encima de tu mantenimiento.",
        "Asegura 1.8g a 2.2g de proteína por kilogramo de peso corporal.",
        "Considera 5g diarios de Creatina Monohidratada disponible en la tienda del gimnasio."
      ]
    },
    funcional: {
      title: "Plan de Fuerza, CrossFit & Acondicionamiento Atlético",
      desc: "Mejora potencia, agilidad, capacidad pulmonar y fuerza funcional aplicable a la vida diaria y deportes.",
      badge: "CrossFit & Fuerza",
      color: "cyan",
      days: [
        {
          name: "Día 1: WOD Potencia & Levantamiento Olímpico",
          exercises: [
            { name: "Power Clean (Cargada de potencia)", sets: "5 series", reps: "3-5 reps", rest: "90 seg" },
            { name: "Thrusters con barra olímpica", sets: "4 series", reps: "10 reps", rest: "60 seg" },
            { name: "Box Jumps (Saltos al cajón pliométrico)", sets: "4 series", reps: "12 reps", rest: "45 seg" },
            { name: "Dominadas estrictas / Kipping", sets: "4 series", reps: "8-10 reps", rest: "60 seg" }
          ]
        },
        {
          name: "Día 2: Calistenia, Core y Resistencia",
          exercises: [
            { name: "Fondos en barras paralelas", sets: "4 series", reps: "12 reps", rest: "60 seg" },
            { name: "Toes to Bar (Pies a la barra)", sets: "4 series", reps: "10-12 reps", rest: "60 seg" },
            { name: "Empuje de trineo con discos (Prowler)", sets: "5 pasadas", reps: "25 metros", rest: "60 seg" },
            { name: "Burpees sobre la barra", sets: "3 rondas", reps: "15 reps", rest: "45 seg" }
          ]
        },
        {
          name: "Día 3: Krav Maga o Defensa Personal + Circuitos",
          exercises: [
            { name: "Clase de Krav Maga en el CAF", sets: "1 sesión", reps: "60 min", rest: "Técnica" },
            { name: "Sombra y golpeo en saco de boxeo", sets: "4 rounds", reps: "3 min c/u", rest: "1 min" }
          ]
        }
      ],
      nutritionTips: [
        "Carbohidratos complejos (avena, arroz, papa, plátano) antes de entrenar para máxima energía.",
        "Electrolitos y sales minerales para reponer líquidos perdidos en el WOD.",
        "Descansa al menos 7-8 horas para regeneración del sistema nervioso central."
      ]
    }
  };

  const selectedData = routineCatalog[goal] || routineCatalog.hipertrofia;

  // Build HTML
  let daysHtml = selectedData.days.slice(0, Math.min(days, selectedData.days.length)).map(d => `
    <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-5 hover:border-lime-500/30 transition">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <h5 class="text-white font-bold flex items-center gap-2">
          <i class="fa-solid fa-dumbbell text-lime-400"></i> ${d.name}
        </h5>
        <span class="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Víctor Zamorano</span>
      </div>
      <div class="space-y-2.5">
        ${d.exercises.map((ex, i) => `
          <div class="flex items-center justify-between text-xs md:text-sm bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
            <div class="flex items-center gap-2.5">
              <span class="w-5 h-5 rounded-full bg-lime-500/20 text-lime-400 font-bold flex items-center justify-center text-xs">${i + 1}</span>
              <span class="text-slate-200 font-medium">${ex.name}</span>
            </div>
            <div class="text-right flex items-center gap-3">
              <span class="text-lime-400 font-semibold">${ex.sets} · ${ex.reps}</span>
              <span class="text-slate-400 text-xs hidden sm:inline"><i class="fa-regular fa-clock"></i> ${ex.rest}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  resultContainer.innerHTML = `
    <div class="glass-panel p-6 md:p-8 rounded-3xl border border-lime-500/30 shadow-2xl relative overflow-hidden animate-fade-in">
      <div class="absolute -right-20 -top-20 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
        <div>
          <span class="inline-block px-3 py-1 bg-lime-500/20 text-lime-400 border border-lime-500/30 text-xs font-bold rounded-full mb-2">
            ${selectedData.badge} · Nivel ${level.toUpperCase()}
          </span>
          <h3 class="text-2xl md:text-3xl font-extrabold text-white">${selectedData.title}</h3>
          <p class="text-slate-400 text-sm mt-1 max-w-2xl">${selectedData.desc}</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button onclick="window.saveRoutineToUserDashboard('${goal}')" class="px-4 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-bold rounded-xl text-xs md:text-sm flex items-center gap-2 shadow-lg transition">
            <i class="fa-solid fa-floppy-disk"></i> Guardar en Mi Cuenta
          </button>
          <a href="https://wa.me/573100000000?text=Hola%20Víctor%20Zamorano,%20acabo%20de%20generar%20mi%20rutina%20de%20${encodeURIComponent(selectedData.title)}%20en%20la%20web%20del%20CAF.%20Quiero%20iniciar%20mi%20entrenamiento." target="_blank" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs md:text-sm flex items-center gap-2 shadow-lg transition">
            <i class="fa-brands fa-whatsapp"></i> Validar con Entrenador
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        ${daysHtml}
      </div>

      <div class="bg-gradient-to-r from-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-5">
        <h5 class="text-amber-400 font-bold text-sm flex items-center gap-2 mb-3">
          <i class="fa-solid fa-apple-whole"></i> Recomendaciones Nutricionales del Equipo CAF:
        </h5>
        <ul class="space-y-1.5 text-xs text-slate-300">
          ${selectedData.nutritionTips.map(t => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-lime-400 mt-1"></i> ${t}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// Function to save routine to LocalStorage for the dashboard
window.saveRoutineToUserDashboard = function(goalKey) {
  const user = JSON.parse(localStorage.getItem('caf_current_user') || 'null');
  if (!user) {
    alert("Para guardar tu rutina personalizada, por favor inicia sesión o entra como socio en el botón 'Mi Cuenta / Dashboard'.");
    const loginModal = document.getElementById('login-modal');
    if (loginModal) loginModal.classList.remove('hidden');
    return;
  }

  user.assignedRoutineKey = goalKey;
  localStorage.setItem('caf_current_user', JSON.stringify(user));
  alert("¡Rutina guardada con éxito en tu Dashboard de socio CAF!");
};

// ==========================================
// 5. HORARIOS Y CLASES
// ==========================================
function initSchedule() {
  const scheduleTable = document.getElementById('schedule-list');
  const dayTabs = document.querySelectorAll('.schedule-day-tab');
  if (!scheduleTable) return;

  function renderDaySchedule(selectedDay) {
    let list = SCHEDULE_DATA;
    if (selectedDay !== 'Todos') {
      list = SCHEDULE_DATA.filter(item => item.day.toLowerCase() === selectedDay.toLowerCase());
    }

    if (list.length === 0) {
      scheduleTable.innerHTML = `
        <div class="text-center py-10 text-slate-400">
          <i class="fa-regular fa-calendar-xmark text-4xl mb-3 text-slate-600"></i>
          <p>No hay clases grupales programadas para este filtro.</p>
        </div>
      `;
      return;
    }

    scheduleTable.innerHTML = list.map(item => `
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-lime-500/40 transition">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            item.type === 'rumba' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
            item.type === 'defensa' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
            item.type === 'funcional' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
            'bg-lime-500/20 text-lime-400 border border-lime-500/30'
          }">
            <i class="text-xl ${
              item.type === 'rumba' ? 'fa-solid fa-music' :
              item.type === 'defensa' ? 'fa-solid fa-shield-halved' :
              item.type === 'funcional' ? 'fa-solid fa-person-running' :
              'fa-solid fa-dumbbell'
            }"></i>
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">${item.day}</span>
              <span class="text-xs text-lime-400 font-semibold"><i class="fa-regular fa-clock mr-1"></i>${item.time}</span>
            </div>
            <h4 class="text-white font-extrabold text-lg mt-1">${item.class}</h4>
            <p class="text-xs text-slate-400">Instructor: <span class="text-slate-300 font-medium">${item.instructor}</span></p>
          </div>
        </div>
        <div class="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
          <span class="text-xs px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
            ${item.spots}
          </span>
          <a href="https://wa.me/573100000000?text=Hola%20CAF%20Anserma,%20quiero%20reservar%20mi%20cupo%20para%20la%20clase%20de%20${encodeURIComponent(item.class)}%20el%20día%20${encodeURIComponent(item.day)}%20a%20las%20${encodeURIComponent(item.time)}" target="_blank" class="px-3.5 py-2 bg-slate-800 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5">
            <i class="fa-brands fa-whatsapp text-emerald-400"></i> Reservar
          </a>
        </div>
      </div>
    `).join('');
  }

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => {
        t.classList.remove('bg-lime-500', 'text-black', 'font-bold');
        t.classList.add('bg-slate-900', 'text-slate-300');
      });
      tab.classList.remove('bg-slate-900', 'text-slate-300');
      tab.classList.add('bg-lime-500', 'text-black', 'font-bold');
      const day = tab.getAttribute('data-day') || 'Todos';
      renderDaySchedule(day);
    });
  });

  renderDaySchedule('Todos');
}

// ==========================================
// 6. TIENDA DE ROPA Y SUPLEMENTOS
// ==========================================
function initStore() {
  const grid = document.getElementById('store-grid');
  const filterBtns = document.querySelectorAll('.store-filter-btn');
  const searchInput = document.getElementById('store-search');
  if (!grid) return;

  function renderStore(cat = 'todos', search = '') {
    let filtered = PRODUCTS;
    if (cat !== 'todos') {
      filtered = filtered.filter(p => p.category === cat);
    }
    if (search.trim()) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()));
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-400">
          <i class="fa-solid fa-box-open text-4xl mb-3 text-slate-600"></i>
          <p>No encontramos productos con ese término de búsqueda.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(product => `
      <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-lime-500/40 hover:shadow-xl hover:shadow-lime-500/5 transition duration-300 group">
        <div>
          <div class="relative w-full h-44 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center p-4 mb-4 overflow-hidden shadow-inner">
            <div class="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
            <i class="${product.icon} text-6xl text-white drop-shadow-lg relative z-10 transform group-hover:scale-110 transition-transform duration-300"></i>
            <span class="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-lime-400 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-lime-500/30">
              ${product.badge}
            </span>
          </div>

          <span class="text-xs uppercase tracking-wider text-slate-400 font-semibold">${product.category}</span>
          <h4 class="text-white font-bold text-base md:text-lg mt-0.5 group-hover:text-lime-400 transition-colors">${product.name}</h4>
          <p class="text-xs text-slate-400 mt-1 line-clamp-2">${product.desc}</p>
        </div>

        <div class="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div>
            <span class="text-[11px] text-slate-400 block">Precio sede</span>
            <span class="text-lg md:text-xl font-black text-lime-400">$${product.price.toLocaleString('es-CO')}</span>
          </div>
          <button onclick="window.addToCart(${product.id})" class="px-3.5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-xl shadow-md flex items-center gap-1.5 transition">
            <i class="fa-solid fa-cart-plus"></i> Agregar
          </button>
        </div>
      </div>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-lime-500', 'text-black', 'font-bold');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      btn.classList.add('bg-lime-500', 'text-black', 'font-bold');
      const cat = btn.getAttribute('data-category') || 'todos';
      renderStore(cat, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeBtn = document.querySelector('.store-filter-btn.bg-lime-500');
      const cat = activeBtn ? activeBtn.getAttribute('data-category') : 'todos';
      renderStore(cat, e.target.value);
    });
  }

  renderStore('todos', '');
}

// ==========================================
// 7. CARRITO DE COMPRAS + WHATSAPP CHECKOUT
// ==========================================
function initCart() {
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartTotalAmount = document.getElementById('cart-total-amount');
  const checkoutWhatsappBtn = document.getElementById('cart-checkout-whatsapp');

  window.addToCart = function(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...prod, qty: 1 });
    }
    saveCart();
    renderCart();
    openCart();
  };

  window.updateCartQty = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart();
    renderCart();
  };

  window.removeFromCart = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    renderCart();
  };

  function saveCart() {
    localStorage.setItem('caf_cart', JSON.stringify(cart));
    updateCartBadges();
  }

  function updateCartBadges() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadges.forEach(badge => {
      badge.textContent = totalQty;
      badge.classList.toggle('hidden', totalQty === 0);
    });
  }

  function renderCart() {
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-16 text-slate-400">
          <i class="fa-solid fa-cart-shopping text-5xl mb-3 text-slate-700"></i>
          <p class="text-base font-semibold text-slate-300">Tu carrito está vacío</p>
          <p class="text-xs text-slate-500 mt-1">Explora nuestra sección de suplementación y ropa deportiva.</p>
        </div>
      `;
      if (cartTotalAmount) cartTotalAmount.textContent = "$0";
      return;
    }

    let subtotal = 0;

    cartItemsContainer.innerHTML = cart.map(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      return `
        <div class="flex items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl shrink-0">
              <i class="${item.icon}"></i>
            </div>
            <div>
              <h5 class="text-white font-bold text-sm leading-tight">${item.name}</h5>
              <span class="text-xs text-lime-400 font-semibold">$${item.price.toLocaleString('es-CO')}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-center bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
              <button onclick="window.updateCartQty(${item.id}, -1)" class="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-bold">-</button>
              <span class="w-7 text-center text-xs font-bold text-white">${item.qty}</span>
              <button onclick="window.updateCartQty(${item.id}, 1)" class="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-bold">+</button>
            </div>
            <button onclick="window.removeFromCart(${item.id})" class="text-slate-500 hover:text-rose-400 text-xs p-1">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (cartTotalAmount) {
      cartTotalAmount.textContent = `$${subtotal.toLocaleString('es-CO')}`;
    }
  }

  function openCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove('translate-x-full');
      cartOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('translate-x-full');
      cartOverlay.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  if (checkoutWhatsappBtn) {
    checkoutWhatsappBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Agrega al menos un producto a tu carrito.");
        return;
      }

      let orderText = "¡Hola CAF Anserma! Quiero realizar el siguiente pedido de la tienda:\n\n";
      let total = 0;
      cart.forEach((item, idx) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        orderText += `${idx + 1}. ${item.name} x${item.qty} = $${itemTotal.toLocaleString('es-CO')}\n`;
      });
      orderText += `\n*TOTAL A PAGAR: $${total.toLocaleString('es-CO')} COP*\n`;
      orderText += `¿Tienen disponibilidad para entrega en Anserma / recogida en la sede (Piso 2, Cra 5 # 22-32)?`;

      const encoded = encodeURIComponent(orderText);
      window.open(`https://wa.me/573100000000?text=${encoded}`, '_blank');
    });
  }

  updateCartBadges();
  renderCart();
}

// ==========================================
// 8. CONVENIO CONFA CALCULATOR
// ==========================================
function initConfaCalculator() {
  const catSelector = document.getElementById('confa-cat-select');
  const resultPrice = document.getElementById('confa-calc-price');
  const resultDiscount = document.getElementById('confa-calc-discount');
  const resultDesc = document.getElementById('confa-calc-desc');
  if (!catSelector || !resultPrice) return;

  const confaRates = {
    A: { price: 55000, discount: "Ahorras $76.000 COP vs Particular", desc: "Subsidio máximo para trabajadores con ingresos menores o iguales a 2 salarios mínimos (SMMLV)." },
    B: { price: 80000, discount: "Ahorras $51.000 COP vs Particular", desc: "Subsidio medio para trabajadores con ingresos entre 2 y 4 salarios mínimos (SMMLV)." },
    C: { price: 119000, discount: "Ahorras $12.000 COP vs Particular", desc: "Tarifa preferencial para trabajadores afiliados con ingresos superiores a 4 salarios mínimos." },
    particular: { price: 131000, discount: "Tarifa estándar plena sin subsidio", desc: "Para personas no afiliadas a Confa o trabajadores independientes sin convenio de compensación." }
  };

  catSelector.addEventListener('change', (e) => {
    const val = e.target.value;
    const rate = confaRates[val] || confaRates.A;

    resultPrice.textContent = `$${rate.price.toLocaleString('es-CO')} COP`;
    if (resultDiscount) resultDiscount.textContent = rate.discount;
    if (resultDesc) resultDesc.textContent = rate.desc;
  });
}

// ==========================================
// 9. FORMULARIO DE CONTACTO
// ==========================================
function initContactForm() {
  const contactForm = document.getElementById('contact-gym-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value || '';
    const phone = document.getElementById('contact-phone')?.value || '';
    const category = document.getElementById('contact-confa')?.value || 'Particular';
    const plan = document.getElementById('contact-plan')?.value || 'Mensualidad';
    const message = document.getElementById('contact-message')?.value || '';

    const text = `¡Hola CAF Anserma! Mi nombre es *${name}*.\n` +
                 `Teléfono: ${phone}\n` +
                 `Categoría Confa: ${category}\n` +
                 `Interés en plan: ${plan}\n` +
                 `Mensaje: ${message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/573100000000?text=${encoded}`, '_blank');
    contactForm.reset();
  });
}

// ==========================================
// 10. MENÚ MÓVIL Y NAVBAR RESPONSIVE
// ==========================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
}

// Check logged in user to update nav badge
function updateUserNavBadge() {
  const user = JSON.parse(localStorage.getItem('caf_current_user') || 'null');
  const authBtn = document.getElementById('nav-auth-btn');
  if (!authBtn) return;

  if (user) {
    authBtn.innerHTML = `
      <i class="fa-solid fa-user-check text-lime-400"></i>
      <span class="hidden sm:inline">${user.name.split(' ')[0]}</span>
      <span class="sm:hidden">Mi Cuenta</span>
    `;
    authBtn.href = "dashboard.html";
  } else {
    authBtn.innerHTML = `
      <i class="fa-regular fa-user"></i>
      <span>Mi Cuenta</span>
    `;
    authBtn.href = "dashboard.html";
  }
}
