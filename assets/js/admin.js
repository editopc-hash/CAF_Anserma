/**
 * CAF - Centro de Acondicionamiento Físico & Centro de Entrenamiento Víctor Zamorano
 * Anserma, Caldas | Admin Panel Logic (Gestión de Socios, Finanzas, Banners y Tienda)
 */

// ==========================================
// 1. DATA INITIALIZATION & CONSTANTS
// ==========================================

// Default Banners
const DEFAULT_BANNERS = [
  {
    id: 1,
    badge: "PISO 2, CRA 5 # 22 - 32 · AVENIDA LIBERTADOR · ANSERMA",
    badgeIcon: "fa-solid fa-location-dot",
    badgeColor: "lime",
    title: "EN ANSERMA,\nTU CAMBIO\nCOMIENZA HOY.",
    highlightWord: "TU CAMBIO",
    subtitle: "Centro de Acondicionamiento Físico CAF & Centro de Entrenamiento Víctor Zamorano. Musculación, CrossFit, Funcional, Rumbaterapia, Krav Maga y el convenio más completo de Caldas con Confa.",
    image: "assets/images/banner/banner-anserma-cambio.png",
    enabled: true,
    opacity: 75, // 0 to 100%
    btn1Text: "¡Inscríbete Hoy!",
    btn1Link: "#planes",
    btn2Text: "Convenio Confa",
    btn2Link: "#convenios"
  },
  {
    id: 2,
    badge: "RESULTADOS REALES CON ASESORÍA DE SALA",
    badgeIcon: "fa-solid fa-fire",
    badgeColor: "orange",
    title: "CAMBIA TU CUERPO,\nCAMBIA TU MENTE.",
    highlightWord: "CAMBIA TU MENTE.",
    subtitle: "Planes diseñados para cada meta: hipertrofia, reducción de peso, acondicionamiento y bienestar total. Entrena solo o aprovecha nuestro exclusivo Plan Pareja CAF.",
    image: "assets/images/banner/banner-cambia-cuerpo.png",
    enabled: true,
    opacity: 80, // 0 to 100%
    btn1Text: "Crear Mi Rutina",
    btn1Link: "#rutina",
    btn2Text: "Preguntar por WhatsApp",
    btn2Link: "https://wa.me/573100000000?text=Hola%20CAF%20Anserma,%20quiero%20conocer%20el%20Plan%20Pareja%20y%20tarifas."
  }
];

// Default Store Products
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Proteína Whey 100% Pura 2lb",
    category: "suplementos",
    price: 135000,
    desc: "25g de proteína aislada por porción, rápida absorción para desarrollo y recuperación muscular.",
    badge: "Más Vendido",
    icon: "fa-solid fa-bottle-droplet",
    color: "from-amber-500 to-yellow-600",
    image: "assets/images/tienda/proteina-whey-100.jpg",
    status: "disponible"
  },
  {
    id: 2,
    name: "Creatina Monohidratada 300g (Creapure)",
    category: "suplementos",
    price: 95000,
    desc: "100% micronizada sin sabor. Aumenta tu fuerza, resistencia y potencia en entrenamientos pesados.",
    badge: "Fuerza Pura",
    icon: "fa-solid fa-bolt",
    color: "from-lime-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80",
    status: "disponible"
  },
  {
    id: 3,
    name: "Pre-Entreno Nitro Pump 30 Serv",
    category: "suplementos",
    price: 110000,
    desc: "Energía explosiva, vascularización y concentración extrema para tus sesiones más intensas.",
    badge: "Energía",
    icon: "fa-solid fa-fire-flame-curved",
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80",
    status: "disponible"
  },
  {
    id: 4,
    name: "BCAA 2:1:1 + Electrolitos 300g",
    category: "suplementos",
    price: 85000,
    desc: "Aminoácidos esenciales para evitar el catabolismo e hidratarte durante la rutina.",
    badge: "Recuperación",
    icon: "fa-solid fa-heart-pulse",
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=600&q=80",
    status: "disponible"
  },
  {
    id: 5,
    name: "Camiseta Oversize Oficial CAF Zamorano",
    category: "ropa",
    price: 65000,
    desc: "Algodón premium de alto gramaje, corte holgado y diseño exclusivo de nuestra sede Anserma.",
    badge: "Exclusivo",
    icon: "fa-solid fa-shirt",
    color: "from-neutral-700 to-neutral-900",
    image: "assets/images/tienda/camiseta-negra-caf.png",
    status: "disponible"
  },
  {
    id: 6,
    name: "Licra Deportiva de Compresión Pro",
    category: "ropa",
    price: 55000,
    desc: "Tejido transpirable antitranspirante, soporte muscular óptimo para pesas y funcional.",
    badge: "Confort",
    icon: "fa-solid fa-person-running",
    color: "from-zinc-700 to-slate-900",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&q=80",
    status: "disponible"
  },
  {
    id: 7,
    name: "Top Deportivo Mujer CAF High Impact",
    category: "ropa",
    price: 50000,
    desc: "Soporte ergonómico de alto impacto, ideal para Rumbaterapia, CrossFit y musculación.",
    badge: "Mujer CAF",
    icon: "fa-solid fa-vest",
    color: "from-pink-600 to-rose-700",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
    status: "disponible"
  },
  {
    id: 8,
    name: "Gorra CAF Snapback Bordada",
    category: "ropa",
    price: 45000,
    desc: "Estilo urbano deportivo con logo en alto relieve de Víctor Zamorano CAF.",
    badge: "Accesorio",
    icon: "fa-solid fa-hat-cowboy-side",
    color: "from-slate-800 to-zinc-950",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
    status: "disponible"
  },
  {
    id: 9,
    name: "Shaker / Termo Mezclador 700ml Pro",
    category: "accesorios",
    price: 25000,
    desc: "Libre de BPA con rejilla mezcladora antiderrame y compartimento para pastillas o scoops.",
    badge: "Indispensable",
    icon: "fa-solid fa-glass-water",
    color: "from-emerald-600 to-teal-700",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    status: "disponible"
  },
  {
    id: 10,
    name: "Guantes de Entrenamiento + Straps de Agarre",
    category: "accesorios",
    price: 38000,
    desc: "Aumenta tus cargas en peso muerto y remos con protección palmar antiampollas y soporte de muñeca.",
    badge: "Protección",
    icon: "fa-solid fa-hand-fist",
    color: "from-amber-600 to-yellow-700",
    image: "assets/images/tienda/guantes.png",
    status: "disponible"
  }
];

// Helper to get formatted date offsets
function getRelativeDate(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}

// Routine Presets Available at CAF
const ROUTINE_PRESETS = {
  perdida_peso: {
    key: "perdida_peso",
    title: "Programa Reducción de Peso & Hipertrofia Funcional",
    trainer: "Víctor Zamorano (Piso 2 CAF)",
    days: [
      {
        day: "Lunes - Empuje (Pecho, Hombro y Tríceps)",
        items: [
          { name: "Press de banca plano con mancuernas", sets: "4x12", done: true },
          { name: "Press inclinado en multipower", sets: "4x10", done: true },
          { name: "Elevaciones laterales para deltoides", sets: "4x15", done: true },
          { name: "Fondos en máquina asistida o paralelas", sets: "3x12", done: false },
          { name: "Caminadora con inclinación al 10%", sets: "20 min", done: false }
        ]
      },
      {
        day: "Miércoles - Tracción (Espalda, Bíceps y Core)",
        items: [
          { name: "Jalón al pecho agarre cerrado neutro", sets: "4x12", done: false },
          { name: "Remo con mancuerna a una mano", sets: "4x10 por lado", done: false },
          { name: "Pájaros posteriores en polea", sets: "3x15", done: false },
          { name: "Curl de bíceps con barra Z", sets: "4x12", done: false },
          { name: "Circuito de planchas y elevación de piernas", sets: "4 rondas", done: false }
        ]
      },
      {
        day: "Viernes - Tren Inferior & Acondicionamiento",
        items: [
          { name: "Sentadilla profunda en rack", sets: "4x10", done: false },
          { name: "Prensa de 45° con buena bajada", sets: "4x12", done: false },
          { name: "Hip Thrust con barra olímpica", sets: "4x12", done: false },
          { name: "Curl femoral en máquina", sets: "4x15", done: false },
          { name: "WOD Funcional de alta intensidad", sets: "15 min", done: false }
        ]
      }
    ]
  },
  hipertrofia_fuerza: {
    key: "hipertrofia_fuerza",
    title: "Hipertrofia Máxima & Halterofilia Pesada",
    trainer: "Víctor Zamorano (Sala de Musculación CAF)",
    days: [
      {
        day: "Lunes - Fuerza Sentadilla & Tren Inferior",
        items: [
          { name: "Sentadilla libre trasera pesada", sets: "5x5", done: true },
          { name: "Prensa inclinada con cargas progresivas", sets: "4x10", done: true },
          { name: "Peso muerto rumano con mancuernas", sets: "4x10", done: false },
          { name: "Elevación de talones en máquina de pie", sets: "5x15", done: false }
        ]
      },
      {
        day: "Miércoles - Press Banca & Empuje Pesado",
        items: [
          { name: "Press de banca plano con barra", sets: "5x5", done: false },
          { name: "Press militar con barra", sets: "4x8", done: false },
          { name: "Aperturas en banco inclinado", sets: "4x12", done: false },
          { name: "Press francés con barra Z", sets: "4x10", done: false }
        ]
      },
      {
        day: "Viernes - Peso Muerto & Tracción Espalda",
        items: [
          { name: "Peso muerto convencional desde suelo", sets: "4x5", done: false },
          { name: "Dominadas con lastre o agarre prono", sets: "4x8", done: false },
          { name: "Remo con barra T en esquina", sets: "4x10", done: false },
          { name: "Curl martillo con mancuernas pesadas", sets: "4x10", done: false }
        ]
      }
    ]
  },
  funcional_crossfit: {
    key: "funcional_crossfit",
    title: "CrossFit WOD & Acondicionamiento Atlético",
    trainer: "Instructor Funcional CAF Anserma",
    days: [
      {
        day: "Martes - Cardio HIIT & Kettlebell Swings",
        items: [
          { name: "Kettlebell Swings pesados", sets: "5x20", done: true },
          { name: "Box Jumps al cajón de 60cm", sets: "4x15", done: true },
          { name: "Wall Balls con balón medicinal 20lb", sets: "4x15", done: false },
          { name: "Remo en máquina ergómetro", sets: "1000m", done: false }
        ]
      },
      {
        day: "Jueves - Gimnásticos & Potencia",
        items: [
          { name: "Toes to bar (Pies a la barra)", sets: "4x12", done: false },
          { name: "Flexiones en pino o dominadas estrictas", sets: "4x10", done: false },
          { name: "Burpees over the bar", sets: "4x15", done: false },
          { name: "Slam ball al piso con fuerza", sets: "4x20", done: false }
        ]
      },
      {
        day: "Sábado - WOD Élite en Pareja / Equipo",
        items: [
          { name: "Clean & Jerk con barra olímpica", sets: "5x5", done: false },
          { name: "Double Unders con cuerda rápida", sets: "100 reps", done: false },
          { name: "Carrera de 800m en exterior", sets: "3 rondas", done: false }
        ]
      }
    ]
  },
  rumba_tonificacion: {
    key: "rumba_tonificacion",
    title: "Rumbaterapia, Tonificación & GAP",
    trainer: "Instructora de Clases Grupales CAF",
    days: [
      {
        day: "Lunes - Sesión Grupal Rumbaterapia & Cardio",
        items: [
          { name: "Calentamiento aeróbico y ritmos latinos", sets: "45 min", done: true },
          { name: "Rutina de abdomen y core en colchoneta", sets: "15 min", done: true },
          { name: "Estiramiento dinámico", sets: "10 min", done: true }
        ]
      },
      {
        day: "Miércoles - GAP (Glúteos, Abdomen y Pierna)",
        items: [
          { name: "Sentadilla búlgara con mancuerna", sets: "4x12 por pierna", done: false },
          { name: "Patada de glúteo en polea baja", sets: "4x15 por pierna", done: false },
          { name: "Hip Thrust con banda y barra", sets: "4x12", done: false },
          { name: "Abductores en máquina", sets: "4x20", done: false }
        ]
      },
      {
        day: "Viernes - Circuito Full Body & Tonificación",
        items: [
          { name: "Circuito con mancuernas livianas", sets: "4 rondas", done: false },
          { name: "Escaladores y planchas dinámicas", sets: "4x40 seg", done: false },
          { name: "Elíptica con intervalos de resistencia", sets: "20 min", done: false }
        ]
      }
    ]
  },
  krav_maga: {
    key: "krav_maga",
    title: "Defensa Personal Krav Maga & Acondicionamiento",
    trainer: "Instructor Krav Maga Certificado CAF",
    days: [
      {
        day: "Martes - Técnicas de Golpeo & Guardia",
        items: [
          { name: "Directos, crochets y golpes de codo", sets: "5 rondas", done: true },
          { name: "Rodillazos al saco de potencia", sets: "4x25", done: true },
          { name: "Desplazamientos evasivos y bloqueos", sets: "15 min", done: false }
        ]
      },
      {
        day: "Jueves - Desarmes & Liberación de Agarres",
        items: [
          { name: "Defensa contra agarres y abrazos", sets: "6 series", done: false },
          { name: "Combate táctico en el suelo", sets: "20 min", done: false },
          { name: "Circuito de resistencia bajo estrés", sets: "15 min", done: false }
        ]
      },
      {
        day: "Sábado - Sparring Controlado & Resistencia",
        items: [
          { name: "Sparring con guantillas", sets: "5 rounds x 3 min", done: false },
          { name: "Golpeo continuo a manoplas", sets: "4 rounds", done: false },
          { name: "Circuito de abdominales y flexiones", sets: "100 reps", done: false }
        ]
      }
    ]
  }
};

// Default Members Database with Full Profiles
const DEFAULT_MEMBERS = [
  {
    id: "SOC-001",
    name: "Carlos Andrés Ramírez",
    cedula: "1.053.840.123",
    phone: "312 456 7890",
    email: "carlos.ramirez@caf.com",
    confaCategory: "A",
    planName: "Confa Categoría A",
    monthlyFee: 55000,
    paymentMethod: "Nequi",
    startDate: getRelativeDate(-45),
    expirationDate: getRelativeDate(15), // Al día (15 días restantes)
    notes: "Entrena en las mañanas, objetivo reducción de grasa y definición muscular.",
    height: 175,
    initialWeight: 85.0,
    currentWeight: 78.4,
    targetWeight: 74.0,
    weightLogs: [
      { date: "01 Sep 2026", weight: 85.0, diff: "0.0 kg" },
      { date: "15 Sep 2026", weight: 82.8, diff: "-2.2 kg" },
      { date: "29 Sep 2026", weight: 80.2, diff: "-2.6 kg" },
      { date: "13 Oct 2026", weight: 78.4, diff: "-1.8 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.perdida_peso,
    assignedDiet: {
      calories: "2,150 kcal",
      protein: "160g",
      carbs: "190g",
      fats: "55g",
      waterLiters: "3.2 Litros al día",
      notes: "Déficit calórico moderado para oxidación de grasa con alta ingesta proteica.",
      meals: [
        { meal: "Desayuno (7:00 AM)", desc: "3 huevos revueltos con vegetales, 1 arepa pequeña campesina sin mantequilla, café sin azúcar, 1 fruta." },
        { meal: "Media Mañana (10:30 AM)", desc: "1 yogur griego natural sin azúcar + 1 puñado de almendras." },
        { meal: "Almuerzo (1:00 PM)", desc: "150g pechuga a la plancha, 1 taza de arroz blanco, ensalada fresca con aceite de oliva." },
        { meal: "Snack / Pre-Entreno (4:30 PM)", desc: "1 batido de Proteína Whey CAF con agua + 1 banano mediano." },
        { meal: "Cena (8:00 PM)", desc: "Filete de pescado o atún en agua con vegetales salteados (brócoli y calabacín)." }
      ]
    },
    storePurchases: [
      { id: "VTA-901", date: "05 Oct 2026", product: "Proteína Whey 100% Pura 2lb", category: "Suplementos", qty: 1, price: 135000, paymentMethod: "Nequi" },
      { id: "VTA-840", date: "22 Sep 2026", product: "Camiseta Oversize Oficial CAF Zamorano", category: "Ropa", qty: 1, price: 65000, paymentMethod: "Nequi" },
      { id: "VTA-712", date: "10 Sep 2026", product: "Shaker / Termo Mezclador 700ml Pro", category: "Accesorios", qty: 1, price: 25000, paymentMethod: "Efectivo Taquilla" }
    ],
    balanceDue: 0,
    paymentHistory: [
      { id: "REC-2026-104", date: "28 Sep 2026", concept: "Mensualidad CAF - Confa Cat A", amount: 55000, method: "Nequi", status: "Aprobado" },
      { id: "REC-2026-078", date: "28 Ago 2026", concept: "Mensualidad CAF - Confa Cat A", amount: 55000, method: "Nequi", status: "Aprobado" },
      { id: "REC-2026-042", date: "28 Jul 2026", concept: "Mensualidad CAF - Confa Cat A", amount: 55000, method: "Efectivo Taquilla", status: "Aprobado" }
    ]
  },
  {
    id: "SOC-002",
    name: "Marcela Gómez Duque",
    cedula: "1.054.912.450",
    phone: "310 987 6543",
    email: "marcela.gomez@gmail.com",
    confaCategory: "B",
    planName: "Confa Categoría B",
    monthlyFee: 80000,
    paymentMethod: "Daviplata",
    startDate: getRelativeDate(-28),
    expirationDate: getRelativeDate(2), // Por vencer (2 días restantes)
    notes: "Clases de Rumbaterapia y zona de máquinas con énfasis en tonificación y glúteos.",
    height: 164,
    initialWeight: 67.0,
    currentWeight: 63.5,
    targetWeight: 60.0,
    weightLogs: [
      { date: "05 Sep 2026", weight: 67.0, diff: "0.0 kg" },
      { date: "19 Sep 2026", weight: 65.2, diff: "-1.8 kg" },
      { date: "03 Oct 2026", weight: 63.5, diff: "-1.7 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.rumba_tonificacion,
    assignedDiet: {
      calories: "1,850 kcal",
      protein: "130g",
      carbs: "170g",
      fats: "48g",
      waterLiters: "2.8 Litros al día",
      notes: "Plan de tonificación enfocado en densidad energética moderada y buena hidratación.",
      meals: [
        { meal: "Desayuno (7:30 AM)", desc: "Omelette de 2 huevos con espinaca y queso campesino, 1 arepa delgada, té verde." },
        { meal: "Media Mañana (10:30 AM)", desc: "1 manzana verde con 1 cucharada de mantequilla de maní sin azúcar." },
        { meal: "Almuerzo (1:30 PM)", desc: "130g de pechuga a la plancha, ensalada de quinoa con aguacate y limón." },
        { meal: "Snack (5:00 PM)", desc: "Batido de BCAA con agua fría + 1 puñado de nueces." },
        { meal: "Cena (8:00 PM)", desc: "Crema casera de calabaza y zanahoria + 100g de pollo desmechado." }
      ]
    },
    storePurchases: [
      { id: "VTA-922", date: "02 Oct 2026", product: "Top Deportivo Mujer CAF High Impact", category: "Ropa", qty: 1, price: 50000, paymentMethod: "Daviplata" },
      { id: "VTA-865", date: "18 Sep 2026", product: "BCAA 2:1:1 + Electrolitos 300g", category: "Suplementos", qty: 1, price: 85000, paymentMethod: "Daviplata" }
    ],
    balanceDue: 0,
    paymentHistory: [
      { id: "REC-2026-108", date: "16 Sep 2026", concept: "Mensualidad CAF - Confa Cat B", amount: 80000, method: "Daviplata", status: "Aprobado" },
      { id: "REC-2026-065", date: "16 Ago 2026", concept: "Mensualidad CAF - Confa Cat B", amount: 80000, method: "Daviplata", status: "Aprobado" }
    ]
  },
  {
    id: "SOC-003",
    name: "Jhon Alexander Trejos",
    cedula: "75.084.219",
    phone: "314 555 8921",
    email: "jhon.trejos@gmail.com",
    confaCategory: "Particular",
    planName: "Particular Mensual",
    monthlyFee: 131000,
    paymentMethod: "Efectivo Taquilla",
    startDate: getRelativeDate(-35),
    expirationDate: getRelativeDate(-5), // Vencido hace 5 días
    notes: "Entrenamiento de fuerza y halterofilia, levantamiento pesado y powerlifting.",
    height: 180,
    initialWeight: 88.0,
    currentWeight: 92.5,
    targetWeight: 94.0,
    weightLogs: [
      { date: "01 Sep 2026", weight: 88.0, diff: "0.0 kg" },
      { date: "15 Sep 2026", weight: 89.5, diff: "+1.5 kg" },
      { date: "30 Sep 2026", weight: 91.0, diff: "+1.5 kg" },
      { date: "10 Oct 2026", weight: 92.5, diff: "+1.5 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.hipertrofia_fuerza,
    assignedDiet: {
      calories: "3,200 kcal",
      protein: "205g",
      carbs: "380g",
      fats: "75g",
      waterLiters: "4.0 Litros al día",
      notes: "Superávit calórico controlado para aumento de fuerza e hipertrofia pesada.",
      meals: [
        { meal: "Desayuno (6:30 AM)", desc: "4 huevos enteros con jamón magro, 2 arepas con queso, avena cocida con leche y banano." },
        { meal: "Media Mañana (10:00 AM)", desc: "Sandwich de pechuga con pan integral y frutos secos." },
        { meal: "Almuerzo (1:00 PM)", desc: "200g de carne de res o cerdo magro, 2 tazas de arroz, frijoles y ensalada." },
        { meal: "Pre-Entreno (4:30 PM)", desc: "Pre-Entreno Nitro Pump CAF + 5g Creatina Creapure + 1 porción de fruta." },
        { meal: "Cena (8:30 PM)", desc: "200g de pechuga al horno, puré de papa o plátano asado y ensalada mixta." }
      ]
    },
    storePurchases: [
      { id: "VTA-934", date: "08 Oct 2026", product: "Creatina Monohidratada 300g (Creapure)", category: "Suplementos", qty: 1, price: 95000, paymentMethod: "Efectivo Taquilla" },
      { id: "VTA-810", date: "15 Sep 2026", product: "Straps de Agarre + Muñequeras Pro", category: "Accesorios", qty: 1, price: 38000, paymentMethod: "Efectivo Taquilla" },
      { id: "VTA-755", date: "28 Ago 2026", product: "Pre-Entreno Nitro Pump 30 Serv", category: "Suplementos", qty: 1, price: 110000, paymentMethod: "Efectivo Taquilla" }
    ],
    balanceDue: 131000,
    paymentHistory: [
      { id: "REC-2026-061", date: getRelativeDate(-35), concept: "Mensualidad Particular Mensual", amount: 131000, method: "Efectivo Taquilla", status: "Aprobado" },
      { id: "REC-2026-029", date: getRelativeDate(-65), concept: "Mensualidad Particular Mensual", amount: 131000, method: "Efectivo Taquilla", status: "Aprobado" }
    ]
  },
  {
    id: "SOC-004",
    name: "Santiago Henao & Laura Vélez",
    cedula: "1.053.771.802",
    phone: "311 340 7622",
    email: "pareja.henao.velez@hotmail.com",
    confaCategory: "Particular",
    planName: "Plan Pareja Dúo CAF",
    monthlyFee: 220000,
    paymentMethod: "Nequi",
    startDate: getRelativeDate(-10),
    expirationDate: getRelativeDate(20), // Al día
    notes: "Entrenan juntos en las tardes (CrossFit, WOD y acondicionamiento funcional en equipo).",
    height: 176,
    initialWeight: 75.0,
    currentWeight: 72.8,
    targetWeight: 70.0,
    weightLogs: [
      { date: "10 Sep 2026", weight: 75.0, diff: "0.0 kg" },
      { date: "25 Sep 2026", weight: 73.8, diff: "-1.2 kg" },
      { date: "09 Oct 2026", weight: 72.8, diff: "-1.0 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.funcional_crossfit,
    assignedDiet: {
      calories: "2,400 kcal",
      protein: "165g",
      carbs: "250g",
      fats: "60g",
      waterLiters: "3.5 Litros al día",
      notes: "Enfoque en alta energía y rápida reposición de glucógeno para sesiones intensas de WOD.",
      meals: [
        { meal: "Desayuno (7:00 AM)", desc: "Bowls de avena con proteína en polvo, frutas del bosque y semillas de chía." },
        { meal: "Media Mañana (10:30 AM)", desc: "Frutos secos con fruta fresca o yogur." },
        { meal: "Almuerzo (1:30 PM)", desc: "Pechuga o lomo de res con papas al vapor y ensalada de vegetales coloridos." },
        { meal: "Snack / Pre-WOD (5:00 PM)", desc: "1 banano con miel y 1 porción de aminoácidos." },
        { meal: "Cena (8:30 PM)", desc: "Omelette de claras con atún y verduras al vapor." }
      ]
    },
    storePurchases: [
      { id: "VTA-940", date: "06 Oct 2026", product: "Camiseta Oversize Oficial CAF Zamorano", category: "Ropa", qty: 2, price: 130000, paymentMethod: "Nequi" },
      { id: "VTA-880", date: "20 Sep 2026", product: "Shaker / Termo Mezclador 700ml Pro", category: "Accesorios", qty: 1, price: 25000, paymentMethod: "Nequi" }
    ],
    balanceDue: 0,
    paymentHistory: [
      { id: "REC-2026-115", date: getRelativeDate(-10), concept: "Mensualidad Plan Pareja Dúo CAF", amount: 220000, method: "Nequi", status: "Aprobado" },
      { id: "REC-2026-081", date: getRelativeDate(-40), concept: "Mensualidad Plan Pareja Dúo CAF", amount: 220000, method: "Nequi", status: "Aprobado" }
    ]
  },
  {
    id: "SOC-005",
    name: "Gloria Esperanza Morales",
    cedula: "24.901.344",
    phone: "320 612 9011",
    email: "gloria.morales@gmail.com",
    confaCategory: "A",
    planName: "Confa Categoría A",
    monthlyFee: 55000,
    paymentMethod: "Efectivo Confa",
    startDate: getRelativeDate(-40),
    expirationDate: getRelativeDate(-10), // Vencido hace 10 días
    notes: "Acondicionamiento físico para salud cardiovascular, movilidad articular y bienestar general.",
    height: 158,
    initialWeight: 72.0,
    currentWeight: 69.4,
    targetWeight: 65.0,
    weightLogs: [
      { date: "01 Sep 2026", weight: 72.0, diff: "0.0 kg" },
      { date: "18 Sep 2026", weight: 70.8, diff: "-1.2 kg" },
      { date: "04 Oct 2026", weight: 69.4, diff: "-1.4 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.rumba_tonificacion,
    assignedDiet: {
      calories: "1,650 kcal",
      protein: "110g",
      carbs: "160g",
      fats: "45g",
      waterLiters: "2.5 Litros al día",
      notes: "Dieta cardioprotectora baja en sodio y rica en fibra vegetal.",
      meals: [
        { meal: "Desayuno (8:00 AM)", desc: "2 huevos cocidos, arepa campesina sin sal añadida, infusión de hierbas sin azúcar." },
        { meal: "Media Mañana (10:30 AM)", desc: "1 porción de papaya con semillas de linaza." },
        { meal: "Almuerzo (12:30 PM)", desc: "120g de pechuga o pescado blanco, verduras cocidas al vapor y 1 porción pequeña de arroz." },
        { meal: "Cena (7:00 PM)", desc: "Sopa de verduras con trozos de pollo y 1 aromática caliente." }
      ]
    },
    storePurchases: [
      { id: "VTA-812", date: "12 Sep 2026", product: "Licra Deportiva de Compresión Pro", category: "Ropa", qty: 1, price: 55000, paymentMethod: "Efectivo Taquilla" }
    ],
    balanceDue: 55000,
    paymentHistory: [
      { id: "REC-2026-055", date: getRelativeDate(-40), concept: "Mensualidad CAF - Confa Cat A", amount: 55000, method: "Efectivo Confa", status: "Aprobado" }
    ]
  },
  {
    id: "SOC-006",
    name: "Daniel Felipe Osorio",
    cedula: "1.053.660.198",
    phone: "315 889 0234",
    email: "daniel.osorio@gmail.com",
    confaCategory: "C",
    planName: "Confa Categoría C",
    monthlyFee: 119000,
    paymentMethod: "Tarjeta Débito",
    startDate: getRelativeDate(-29),
    expirationDate: getRelativeDate(1), // Por vencer (mañana)
    notes: "CrossFit WOD noche y Krav Maga defensa personal.",
    height: 178,
    initialWeight: 81.0,
    currentWeight: 78.5,
    targetWeight: 77.0,
    weightLogs: [
      { date: "08 Sep 2026", weight: 81.0, diff: "0.0 kg" },
      { date: "22 Sep 2026", weight: 79.6, diff: "-1.4 kg" },
      { date: "06 Oct 2026", weight: 78.5, diff: "-1.1 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.krav_maga,
    assignedDiet: {
      calories: "2,600 kcal",
      protein: "175g",
      carbs: "290g",
      fats: "65g",
      waterLiters: "3.5 Litros al día",
      notes: "Nutrición deportiva para atletas de deportes de contacto y resistencia.",
      meals: [
        { meal: "Desayuno (7:00 AM)", desc: "3 huevos, tostadas integrales con aguacate, jugo natural sin azúcar." },
        { meal: "Almuerzo (1:00 PM)", desc: "180g de carne o pollo, pasta o arroz con vegetales salteados." },
        { meal: "Pre-Entreno (5:30 PM)", desc: "Nitro Pump CAF con agua fría + 1 banano." },
        { meal: "Cena (9:00 PM)", desc: "Pechuga a la plancha con puré de camote y ensalada verde." }
      ]
    },
    storePurchases: [
      { id: "VTA-944", date: "09 Oct 2026", product: "Gorra CAF Snapback Bordada", category: "Ropa", qty: 1, price: 45000, paymentMethod: "Tarjeta" },
      { id: "VTA-911", date: "01 Oct 2026", product: "Pre-Entreno Nitro Pump 30 Serv", category: "Suplementos", qty: 1, price: 110000, paymentMethod: "Tarjeta" }
    ],
    balanceDue: 0,
    paymentHistory: [
      { id: "REC-2026-118", date: getRelativeDate(-29), concept: "Mensualidad CAF - Confa Cat C", amount: 119000, method: "Tarjeta Débito", status: "Aprobado" }
    ]
  },
  {
    id: "SOC-007",
    name: "Valentina Cardona Ríos",
    cedula: "1.054.321.789",
    phone: "313 777 4411",
    email: "vale.cardona@yahoo.com",
    confaCategory: "A",
    planName: "Confa Fin de Semana",
    monthlyFee: 25000,
    paymentMethod: "Nequi",
    startDate: getRelativeDate(-12),
    expirationDate: getRelativeDate(18), // Al día
    notes: "Entrena los fines de semana (Viernes, sábado y domingo).",
    height: 168,
    initialWeight: 62.0,
    currentWeight: 59.8,
    targetWeight: 58.0,
    weightLogs: [
      { date: "15 Sep 2026", weight: 62.0, diff: "0.0 kg" },
      { date: "30 Sep 2026", weight: 60.8, diff: "-1.2 kg" },
      { date: "10 Oct 2026", weight: 59.8, diff: "-1.0 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.perdida_peso,
    assignedDiet: {
      calories: "1,900 kcal",
      protein: "125g",
      carbs: "185g",
      fats: "50g",
      waterLiters: "2.8 Litros al día",
      notes: "Enfoque de mantenimiento saludable con buena tonificación.",
      meals: [
        { meal: "Desayuno (8:00 AM)", desc: "2 huevos revueltos con arepa pequeña campesina y café negro." },
        { meal: "Almuerzo (1:00 PM)", desc: "Pechuga a la plancha con arroz blanco y ensalada verde abundante." },
        { meal: "Cena (7:30 PM)", desc: "Atún en agua con vegetales salteados y té aromático." }
      ]
    },
    storePurchases: [
      { id: "VTA-890", date: "24 Sep 2026", product: "Shaker / Termo Mezclador 700ml Pro", category: "Accesorios", qty: 1, price: 25000, paymentMethod: "Nequi" }
    ],
    balanceDue: 0,
    paymentHistory: [
      { id: "REC-2026-120", date: getRelativeDate(-12), concept: "Mensualidad Confa Fin de Semana", amount: 25000, method: "Nequi", status: "Aprobado" }
    ]
  },
  {
    id: "SOC-008",
    name: "Mateo Restrepo Calvo",
    cedula: "1.053.992.114",
    phone: "317 222 5590",
    email: "mateo.restrepo@outlook.com",
    confaCategory: "Particular",
    planName: "Tiquetera 12 Días",
    monthlyFee: 75000,
    paymentMethod: "Efectivo Taquilla",
    startDate: getRelativeDate(-50),
    expirationDate: getRelativeDate(-2), // Vencido hace 2 días
    notes: "Tiquetera flexible de uso libre para máquinas y pesas.",
    height: 174,
    initialWeight: 76.0,
    currentWeight: 74.2,
    targetWeight: 72.0,
    weightLogs: [
      { date: "01 Sep 2026", weight: 76.0, diff: "0.0 kg" },
      { date: "20 Sep 2026", weight: 75.0, diff: "-1.0 kg" },
      { date: "05 Oct 2026", weight: 74.2, diff: "-0.8 kg" }
    ],
    assignedRoutine: ROUTINE_PRESETS.perdida_peso,
    assignedDiet: {
      calories: "2,200 kcal",
      protein: "150g",
      carbs: "220g",
      fats: "55g",
      waterLiters: "3.0 Litros al día",
      notes: "Nutrición general balanceada para entrenamiento funcional y pesas.",
      meals: [
        { meal: "Desayuno (7:00 AM)", desc: "3 huevos, arepa con queso, café negro." },
        { meal: "Almuerzo (12:30 PM)", desc: "150g carne o pollo, arroz y ensalada." },
        { meal: "Cena (8:00 PM)", desc: "Sandwich de atún o pollo con verduras." }
      ]
    },
    storePurchases: [
      { id: "VTA-875", date: "19 Sep 2026", product: "BCAA 2:1:1 + Electrolitos 300g", category: "Suplementos", qty: 1, price: 85000, paymentMethod: "Efectivo Taquilla" }
    ],
    balanceDue: 75000,
    paymentHistory: [
      { id: "REC-2026-049", date: getRelativeDate(-50), concept: "Tiquetera 12 Días Flexible", amount: 75000, method: "Efectivo Taquilla", status: "Aprobado" }
    ]
  }
];

// Ensure any loaded member object has all fields filled
function ensureMemberDetails(m) {
  if (!m) return m;

  if (!m.height) m.height = 172;
  if (!m.initialWeight) m.initialWeight = 80.0;
  if (!m.currentWeight) m.currentWeight = 76.5;
  if (!m.targetWeight) m.targetWeight = 72.0;

  if (!m.weightLogs || !m.weightLogs.length) {
    m.weightLogs = [
      { date: "01 Sep 2026", weight: m.initialWeight, diff: "0.0 kg" },
      { date: "15 Sep 2026", weight: Number((m.initialWeight - 1.5).toFixed(1)), diff: "-1.5 kg" },
      { date: "30 Sep 2026", weight: Number((m.initialWeight - 2.8).toFixed(1)), diff: "-1.3 kg" },
      { date: "12 Oct 2026", weight: m.currentWeight, diff: Number((m.currentWeight - (m.initialWeight - 2.8)).toFixed(1)) + " kg" }
    ];
  }

  if (!m.assignedRoutine) {
    const notesLower = (m.notes || '').toLowerCase();
    if (notesLower.includes('fuerza') || notesLower.includes('halterofilia')) {
      m.assignedRoutine = ROUTINE_PRESETS.hipertrofia_fuerza;
    } else if (notesLower.includes('rumba') || notesLower.includes('tonificación')) {
      m.assignedRoutine = ROUTINE_PRESETS.rumba_tonificacion;
    } else if (notesLower.includes('crossfit') || notesLower.includes('pareja')) {
      m.assignedRoutine = ROUTINE_PRESETS.funcional_crossfit;
    } else if (notesLower.includes('krav') || notesLower.includes('defensa')) {
      m.assignedRoutine = ROUTINE_PRESETS.krav_maga;
    } else {
      m.assignedRoutine = ROUTINE_PRESETS.perdida_peso;
    }
  }

  if (!m.assignedDiet) {
    m.assignedDiet = {
      calories: "2,150 kcal",
      protein: "150g",
      carbs: "190g",
      fats: "55g",
      waterLiters: "3.0 Litros al día",
      notes: "Plan diseñado por los instructores de sala de CAF Anserma.",
      meals: [
        { meal: "Desayuno (7:00 AM)", desc: "3 huevos revueltos con vegetales, 1 arepa campesina, café sin azúcar." },
        { meal: "Media Mañana (10:30 AM)", desc: "1 yogur griego o fruta con almendras." },
        { meal: "Almuerzo (1:00 PM)", desc: "150g pechuga a la plancha, 1 taza de arroz, ensalada verde con limón." },
        { meal: "Snack / Pre-Entreno (4:30 PM)", desc: "Batido de Proteína Whey o fruta fresca." },
        { meal: "Cena (8:00 PM)", desc: "Filete de pescado o atún con vegetales al vapor." }
      ]
    };
  }

  if (!m.storePurchases || !m.storePurchases.length) {
    m.storePurchases = [
      { id: "VTA-990", date: "05 Oct 2026", product: "Proteína Whey 100% Pura 2lb", category: "Suplementos", qty: 1, price: 135000, paymentMethod: m.paymentMethod || "Nequi" }
    ];
  }

  if (!m.paymentHistory || !m.paymentHistory.length) {
    m.paymentHistory = [
      { id: `REC-${m.id}-02`, date: getRelativeDate(-30), concept: `Mensualidad ${m.planName}`, amount: m.monthlyFee, method: m.paymentMethod, status: "Aprobado" },
      { id: `REC-${m.id}-01`, date: getRelativeDate(-60), concept: `Inscripción y Matrícula CAF`, amount: 20000, method: m.paymentMethod, status: "Aprobado" }
    ];
  }

  const statusInfo = getMemberPlanStatus(m.expirationDate);
  if (statusInfo.isOverdue) {
    m.balanceDue = m.monthlyFee;
  } else {
    m.balanceDue = 0;
  }

  return m;
}

// Financial Baseline Data
const DEFAULT_FINANCES = {
  storeMonthlySales: 1890000, // Ventas de ropa y suplementos
  otherMonthlyIncome: 650000  // Inscripciones, pases por día y tiqueteras
};

// ==========================================
// 2. ADMIN AUTHENTICATION
// ==========================================

function checkAdminAuth() {
  const isLogged = localStorage.getItem('caf_admin_logged') === 'true';
  const loginOverlay = document.getElementById('admin-login-overlay');
  const mainApp = document.getElementById('admin-main-app');

  if (!isLogged) {
    if (loginOverlay) loginOverlay.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    const uInput = document.getElementById('admin-user-input');
    const pInput = document.getElementById('admin-pass-input');
    if (uInput) uInput.value = '';
    if (pInput) pInput.value = '';
  } else {
    if (loginOverlay) loginOverlay.classList.add('hidden');
    if (mainApp) mainApp.classList.remove('hidden');
  }
}

function initAdminLogin() {
  const form = document.getElementById('admin-login-form');
  const errorMsg = document.getElementById('admin-login-error');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('admin-user-input')?.value.trim();
    const p = document.getElementById('admin-pass-input')?.value.trim();

    if (u === '123456' && p === 'cristal') {
      localStorage.setItem('caf_admin_logged', 'true');
      if (errorMsg) errorMsg.classList.add('hidden');
      checkAdminAuth();
      initAdminApp();
      showAdminToast("¡Bienvenido al Panel de Control de CAF!");
    } else {
      if (errorMsg) {
        errorMsg.classList.remove('hidden');
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
      }
    }
  });

  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm("¿Cerrar sesión de administrador?")) {
        localStorage.removeItem('caf_admin_logged');
        checkAdminAuth();
      }
    });
  }
}

// Client-side image compression utility via HTML5 Canvas
function compressImage(file, maxWidth, maxHeight, quality, callback) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      let w = img.width;
      let h = img.height;
      if (w > maxWidth || h > maxHeight) {
        const ratio = Math.min(maxWidth / w, maxHeight / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', quality || 0.85);
      callback(dataUrl);
    };
    img.onerror = function() {
      callback(e.target.result);
    };
    img.src = e.target.result;
  };
  reader.onerror = function() {
    alert("Error al leer el archivo de imagen.");
  };
  reader.readAsDataURL(file);
}

// Safe storage writing with IndexedDB and quota guard
function safeSave(key, data) {
  // 1. Save directly to IndexedDB (virtually unlimited capacity)
  if (window.CafDB && typeof window.CafDB.set === 'function') {
    window.CafDB.set(key, data);
  }

  // 2. Save to localStorage for instant synchronous rendering
  try {
    localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
    return true;
  } catch (e) {
    console.warn("LocalStorage quota exceeded, optimizing cache for IndexedDB...", e);
    // Purge legacy bloated items so localStorage is never stuck
    if (window.CafDB && typeof window.CafDB.purgeBloatedLocalStorage === 'function') {
      window.CafDB.purgeBloatedLocalStorage();
    }
    try {
      if (Array.isArray(data)) {
        const light = data.map(item => {
          const clone = Object.assign({}, item);
          if (clone.image && clone.image.startsWith('data:image') && clone.image.length > 50000) {
            clone.image = clone.defaultImage || 'assets/images/banner/banner-anserma-cambio.png';
          }
          return clone;
        });
        localStorage.setItem(key, JSON.stringify(light));
      }
    } catch(err2) {
      console.warn("Retrying with minimal payload", err2);
    }
    return true; // Successfully saved to IndexedDB!
  }
}

// Clean and optimize admin storage
window.cleanAdminStorage = function() {
  if (window.CafDB && typeof window.CafDB.purgeBloatedLocalStorage === 'function') {
    window.CafDB.purgeBloatedLocalStorage();
    showAdminToast("¡Memoria optimizada! Base de datos de alta capacidad activa.");
    renderAllAdminSections();
  } else {
    showAdminToast("Memoria verificada y al día.");
  }
};

// Floating Toast Notification
function showAdminToast(msg) {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-lime-500 text-black font-extrabold text-xs px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 transform transition-all duration-300 pointer-events-none opacity-0 translate-y-4';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-base"></i><span>${msg}</span>`;
  toast.classList.remove('opacity-0', 'translate-y-4');
  clearTimeout(window._adminToastTimeout);
  window._adminToastTimeout = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 3000);
}

// ==========================================
// 3. STORAGE GETTERS & SETTERS
// ==========================================

function getBanners() {
  const data = localStorage.getItem('caf_banners');
  if (data) {
    try { return JSON.parse(data); } catch (e) { }
  }
  safeSave('caf_banners', DEFAULT_BANNERS);
  return DEFAULT_BANNERS;
}

function saveBanners(banners) {
  safeSave('caf_banners', banners);
}

function getProducts() {
  const data = localStorage.getItem('caf_products');
  let products = DEFAULT_PRODUCTS;
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        products = parsed;
      }
    } catch (e) { }
  }
  return products.map(p => {
    if (!p.image) {
      const def = DEFAULT_PRODUCTS.find(d => d.id === p.id);
      if (def && def.image) p.image = def.image;
    }
    return p;
  });
}

function saveProducts(products) {
  safeSave('caf_products', products);
}

const DEFAULT_GALLERY = [
  {
    id: 1,
    title: "Plan Pareja y Motivación",
    category: "pareja",
    categoryLabel: "Plan Pareja",
    desc: "Entrenar en pareja multiplica los resultados. En CAF Anserma diseñamos planes a la medida para dos.",
    image: "assets/images/galeria/galeria-1.jpg",
    enabled: true
  },
  {
    id: 2,
    title: "Área de CrossFit & Entrenamiento Funcional",
    category: "funcional",
    categoryLabel: "CrossFit & Funcional",
    desc: "Zona industrial equipada para entrenamientos de alta intensidad, fuerza y resistencia metabólica.",
    image: "assets/images/galeria/galeria-2.jpg",
    enabled: true
  },
  {
    id: 3,
    title: "Zona de Calistenia & Peso Corporal",
    category: "funcional",
    categoryLabel: "Calistenia",
    desc: "Barras, anillas y estructuras especializadas para dominar el control y fuerza corporal.",
    image: "assets/images/galeria/galeria-3.jpg",
    enabled: true
  },
  {
    id: 4,
    title: "Sala de Halterofilia & Levantamiento de Pesas",
    category: "musculacion",
    categoryLabel: "Pesas Libres",
    desc: "Plataformas de levantamiento, barras olímpicas y discos bumpers para desarrollo de potencia.",
    image: "assets/images/galeria/galeria-4.jpg",
    enabled: true
  },
  {
    id: 5,
    title: "Estudio de Rumbaterapia & Clases Grupales",
    category: "clases",
    categoryLabel: "Rumbaterapia",
    desc: "Ritmo, diversión y quema calórica con los mejores instructores en un ambiente con luces y energía.",
    image: "assets/images/galeria/galeria-5.jpg",
    enabled: true
  },
  {
    id: 6,
    title: "Musculación e Hipertrofia Dirigida",
    category: "musculacion",
    categoryLabel: "Musculación",
    desc: "Mancuernas de todos los pesos y máquinas guiadas para desarrollo muscular seguro y progresivo.",
    image: "assets/images/galeria/galeria-6.jpg",
    enabled: true
  },
  {
    id: 7,
    title: "Programas de Reducción de Peso y Salud Integral",
    category: "salud",
    categoryLabel: "Reducción de Peso",
    desc: "Acompañamiento sin juzgar: planes amables y efectivos adaptados a personas de todas las edades y tallas.",
    image: "assets/images/galeria/galeria-7.jpg",
    enabled: true
  },
  {
    id: 8,
    title: "Zona Cardiovascular Moderna",
    category: "salud",
    categoryLabel: "Cardio & Salud",
    desc: "Caminadoras de última generación, elípticas y bicicletas para acondicionamiento aeróbico.",
    image: "assets/images/galeria/galeria-8.jpg",
    enabled: true
  }
];

function getGallery() {
  const data = localStorage.getItem('caf_gallery');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  safeSave('caf_gallery', DEFAULT_GALLERY);
  return DEFAULT_GALLERY;
}

function saveGallery(gallery) {
  safeSave('caf_gallery', gallery);
}

function getMembers() {
  const data = localStorage.getItem('caf_members');
  let members = [];
  if (data) {
    try {
      members = JSON.parse(data);
    } catch (e) {
      members = DEFAULT_MEMBERS;
    }
  } else {
    members = DEFAULT_MEMBERS;
  }
  return members.map(m => ensureMemberDetails(m));
}

function saveMembers(members) {
  localStorage.setItem('caf_members', JSON.stringify(members));
}

function getFinances() {
  const data = localStorage.getItem('caf_finances');
  if (data) {
    try { return JSON.parse(data); } catch (e) { }
  }
  localStorage.setItem('caf_finances', JSON.stringify(DEFAULT_FINANCES));
  return DEFAULT_FINANCES;
}

function saveFinances(finances) {
  localStorage.setItem('caf_finances', JSON.stringify(finances));
}

// ==========================================
// 4. PLAN STATUS & OVERDUE DAYS CALCULATOR
// ==========================================

function getMemberPlanStatus(expirationDateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expDate = new Date(expirationDateStr + 'T00:00:00');
  const diffTime = expDate - today;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    const overdueDays = Math.abs(diffDays);
    return {
      status: "Vencido",
      isOverdue: true,
      overdueDays: overdueDays,
      badgeClass: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
      textClass: "text-rose-400 font-extrabold",
      message: `Vencido hace ${overdueDays} día${overdueDays > 1 ? 's' : ''}`
    };
  } else if (diffDays <= 3) {
    return {
      status: "Por vencer",
      isOverdue: false,
      overdueDays: 0,
      badgeClass: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
      textClass: "text-amber-400 font-bold",
      message: diffDays === 0 ? "¡Vence hoy!" : `Vence en ${diffDays} día${diffDays > 1 ? 's' : ''}`
    };
  } else {
    return {
      status: "Al día",
      isOverdue: false,
      overdueDays: 0,
      badgeClass: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      textClass: "text-emerald-400 font-semibold",
      message: `Al día (${diffDays} días restantes)`
    };
  }
}

// ==========================================
// 5. SECTION 1: DASHBOARD DE INSCRITOS & FINANZAS
// ==========================================

function renderMembersAndFinances(filterStatus = 'todos', searchTerm = '') {
  const members = getMembers();
  const finances = getFinances();

  // 1. Calculate Financials
  // Sum monthly active membership fees
  const gymRevenue = members.reduce((sum, m) => sum + (m.monthlyFee || 0), 0);
  const storeRevenue = finances.storeMonthlySales || 0;
  const otherRevenue = finances.otherMonthlyIncome || 0;
  const totalRevenue = gymRevenue + storeRevenue + otherRevenue;

  // Counts
  let countAlDia = 0;
  let countPorVencer = 0;
  let countVencidos = 0;

  members.forEach(m => {
    const statusInfo = getMemberPlanStatus(m.expirationDate);
    if (statusInfo.status === "Vencido") countVencidos++;
    else if (statusInfo.status === "Por vencer") countPorVencer++;
    else countAlDia++;
  });

  // Render KPI cards
  const elTotalRevenue = document.getElementById('admin-total-revenue');
  const elGymRevenue = document.getElementById('admin-gym-revenue');
  const elStoreRevenue = document.getElementById('admin-store-revenue');
  const elOtherRevenue = document.getElementById('admin-other-revenue');

  const elTotalMembers = document.getElementById('admin-total-members');
  const elMembersAlDia = document.getElementById('admin-members-aldia');
  const elMembersPorVencer = document.getElementById('admin-members-porvencer');
  const elMembersVencidos = document.getElementById('admin-members-vencidos');

  if (elTotalRevenue) elTotalRevenue.textContent = `$${totalRevenue.toLocaleString('es-CO')} COP`;
  if (elGymRevenue) elGymRevenue.textContent = `$${gymRevenue.toLocaleString('es-CO')} COP`;
  if (elStoreRevenue) elStoreRevenue.textContent = `$${storeRevenue.toLocaleString('es-CO')} COP`;
  if (elOtherRevenue) elOtherRevenue.textContent = `$${otherRevenue.toLocaleString('es-CO')} COP`;

  if (elTotalMembers) elTotalMembers.textContent = members.length;
  if (elMembersAlDia) elMembersAlDia.textContent = countAlDia;
  if (elMembersPorVencer) elMembersPorVencer.textContent = countPorVencer;
  if (elMembersVencidos) elMembersVencidos.textContent = countVencidos;

  // 2. Filter Members Table
  let filtered = [...members];
  if (filterStatus !== 'todos') {
    filtered = filtered.filter(m => {
      const info = getMemberPlanStatus(m.expirationDate);
      return info.status.toLowerCase() === filterStatus.toLowerCase();
    });
  }

  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase();
    filtered = filtered.filter(m => 
      m.name.toLowerCase().includes(q) || 
      m.cedula.toLowerCase().includes(q) || 
      m.phone.toLowerCase().includes(q) ||
      m.planName.toLowerCase().includes(q)
    );
  }

  // Render Table Rows
  const tbody = document.getElementById('admin-members-tbody');
  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-10 text-center text-slate-400">
          <i class="fa-solid fa-users-slash text-4xl mb-2 text-slate-600 block"></i>
          No se encontraron socios con los filtros aplicados.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(m => {
    const statusInfo = getMemberPlanStatus(m.expirationDate);
    const cleanPhone = m.phone.replace(/[^0-9]/g, '');
    const intPhone = cleanPhone.startsWith('57') ? cleanPhone : '57' + cleanPhone;

    // Pre-composed WhatsApp overdue message
    let whatsappText = "";
    if (statusInfo.isOverdue) {
      whatsappText = `Hola *${m.name}*, te saludamos de *CAF Anserma Caldas (Víctor Zamorano)*. Te recordamos cordialmente que tu membresía *${m.planName}* se encuentra *vencida hace ${statusInfo.overdueDays} días* (venció el ${m.expirationDate}). Puedes renovar hoy por Nequi o en taquilla del Piso 2 Cra 5 # 22-32. ¡Te esperamos para seguir entrenando!`;
    } else if (statusInfo.status === "Por vencer") {
      whatsappText = `Hola *${m.name}*, te saludamos de *CAF Anserma*. Te recordamos que tu plan *${m.planName}* está próximo a vencer el *${m.expirationDate}*. Puedes renovar con anticipación para no interrumpir tu entrenamiento.`;
    } else {
      whatsappText = `Hola *${m.name}*, te saludamos de *CAF Anserma*. ¡Esperamos que sigas disfrutando tu entrenamiento!`;
    }

    const encodedMsg = encodeURIComponent(whatsappText);

    return `
      <tr class="border-b border-slate-800 hover:bg-slate-900/50 transition">
        <td class="py-3.5 px-4">
          <button type="button" onclick="window.openMemberDashboard('${m.id}')" class="text-left group cursor-pointer focus:outline-none">
            <div class="font-extrabold text-white text-xs sm:text-sm group-hover:text-lime-400 transition flex items-center gap-1.5 underline decoration-lime-500/40 decoration-2 underline-offset-2">
              <span>${m.name}</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-lime-400 opacity-60 group-hover:opacity-100 transition"></i>
            </div>
            <div class="text-[11px] text-slate-400 font-mono mt-0.5 flex items-center gap-1.5">
              <span>CC: ${m.cedula}</span>
              <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-lime-400 border border-slate-700 font-sans font-bold">Ver Ficha</span>
            </div>
          </button>
        </td>
        <td class="py-3.5 px-4">
          <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
            m.confaCategory === 'A' ? 'bg-lime-500/20 text-lime-400' :
            m.confaCategory === 'B' ? 'bg-cyan-500/20 text-cyan-400' :
            m.confaCategory === 'C' ? 'bg-amber-500/20 text-amber-400' :
            'bg-slate-800 text-slate-300'
          }">
            ${m.planName}
          </span>
          <div class="text-[11px] text-slate-400 mt-0.5">$${m.monthlyFee.toLocaleString('es-CO')} COP</div>
        </td>
        <td class="py-3.5 px-4 text-xs font-mono text-slate-300">
          ${m.expirationDate}
        </td>
        <td class="py-3.5 px-4">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${statusInfo.badgeClass}">
            <i class="fa-solid ${statusInfo.status === 'Vencido' ? 'fa-triangle-exclamation' : statusInfo.status === 'Por vencer' ? 'fa-clock' : 'fa-check'} text-[10px]"></i>
            ${statusInfo.status}
          </span>
        </td>
        <td class="py-3.5 px-4">
          <span class="text-xs ${statusInfo.textClass}">
            ${statusInfo.message}
          </span>
        </td>
        <td class="py-3.5 px-4 text-xs text-slate-400">
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-credit-card text-slate-500"></i> ${m.paymentMethod}
          </div>
        </td>
        <td class="py-3.5 px-4 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button onclick="window.openMemberDashboard('${m.id}')" class="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-black transition" title="Ver Dashboard Completo del Socio (Rutina, Avance, Compras, Pagos)">
              <i class="fa-solid fa-address-card text-sm"></i>
            </button>
            <a href="https://wa.me/${intPhone}?text=${encodedMsg}" target="_blank" class="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white transition" title="Enviar recordatorio WhatsApp">
              <i class="fa-brands fa-whatsapp text-sm"></i>
            </a>
            <button onclick="window.renewMemberPlan('${m.id}')" class="p-2 rounded-lg bg-lime-500/20 hover:bg-lime-500 text-lime-400 hover:text-black transition" title="Renovar 30 días">
              <i class="fa-solid fa-arrows-rotate text-sm"></i>
            </button>
            <button onclick="window.deleteMember('${m.id}')" class="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white transition" title="Eliminar socio">
              <i class="fa-solid fa-trash-can text-sm"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Renew Member by 30 days
window.renewMemberPlan = function(memberId) {
  const members = getMembers();
  const idx = members.findIndex(m => m.id === memberId);
  if (idx === -1) return;

  const currentExp = new Date(members[idx].expirationDate);
  const now = new Date();

  // If already expired, start from today + 30 days. If active, add 30 days to existing exp
  let baseDate = currentExp < now ? now : currentExp;
  baseDate.setDate(baseDate.getDate() + 30);

  members[idx].expirationDate = baseDate.toISOString().split('T')[0];
  saveMembers(members);
  renderMembersAndFinances();
  alert(`¡Membresía de ${members[idx].name} renovada con éxito hasta el ${members[idx].expirationDate}!`);
};

// Delete Member
window.deleteMember = function(memberId) {
  if (!confirm("¿Seguro que deseas eliminar este socio de la base de datos?")) return;
  let members = getMembers();
  members = members.filter(m => m.id !== memberId);
  saveMembers(members);
  renderMembersAndFinances();
};

// Add New Member Modal Form
function initAddMemberForm() {
  const form = document.getElementById('admin-new-member-form');
  const modal = document.getElementById('admin-new-member-modal');
  const openBtn = document.getElementById('admin-open-add-member-btn');
  const closeBtn = document.getElementById('admin-close-add-member-btn');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-mem-name').value.trim();
      const cedula = document.getElementById('new-mem-cedula').value.trim();
      const phone = document.getElementById('new-mem-phone').value.trim();
      const planSelect = document.getElementById('new-mem-plan');
      const planName = planSelect.options[planSelect.selectedIndex].text;
      const planPrice = parseInt(planSelect.value);
      const category = document.getElementById('new-mem-category').value;
      const paymentMethod = document.getElementById('new-mem-payment').value;
      const days = parseInt(document.getElementById('new-mem-days').value) || 30;

      const newId = "SOC-" + Math.floor(100 + Math.random() * 900);
      const expDate = getRelativeDate(days);

      const newMember = {
        id: newId,
        name,
        cedula,
        phone,
        confaCategory: category,
        planName,
        monthlyFee: planPrice,
        paymentMethod,
        startDate: getRelativeDate(0),
        expirationDate: expDate,
        notes: "Inscrito desde el Panel de Administrador."
      };

      const members = getMembers();
      members.unshift(newMember);
      saveMembers(members);

      renderMembersAndFinances();
      form.reset();
      modal.classList.add('hidden');
      alert(`¡Socio ${name} inscrito exitosamente! Vence el ${expDate}.`);
    });
  }
}

// Edit Finances Values (Tienda / Otros ingresos)
function initFinancesEditor() {
  const btn = document.getElementById('admin-edit-finances-btn');
  const modal = document.getElementById('admin-finances-modal');
  const form = document.getElementById('admin-finances-form');
  const closeBtn = document.getElementById('admin-close-finances-btn');

  if (btn && modal) {
    btn.addEventListener('click', () => {
      const f = getFinances();
      document.getElementById('fin-store-sales').value = f.storeMonthlySales;
      document.getElementById('fin-other-income').value = f.otherMonthlyIncome;
      modal.classList.remove('hidden');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = {
        storeMonthlySales: parseInt(document.getElementById('fin-store-sales').value) || 0,
        otherMonthlyIncome: parseInt(document.getElementById('fin-other-income').value) || 0
      };
      saveFinances(f);
      renderMembersAndFinances();
      modal.classList.add('hidden');
      alert("¡Parámetros de ingresos de tienda y otros conceptos actualizados!");
    });
  }
}

// ==========================================
// 6. SECTION 2: EDITOR DE BANNERS (OPACIDAD, IMÁGENES, TEXTOS, BOTONES)
// ==========================================

function renderBannersEditor() {
  const container = document.getElementById('admin-banners-list');
  if (!container) return;

  const banners = getBanners();

  container.innerHTML = banners.map((b, idx) => `
    <div class="bg-slate-900 border ${b.enabled ? 'border-slate-800' : 'border-rose-900/40 opacity-70'} rounded-3xl p-6 sm:p-7 relative transition" id="banner-card-${b.id}">
      
      <!-- Top Bar: Index, Switch & Delete -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-xl bg-lime-500/20 text-lime-400 font-black flex items-center justify-center text-sm">
            #${idx + 1}
          </span>
          <div>
            <h4 class="text-white font-extrabold text-base">Banner ${idx + 1}: ${b.title.split('\n')[0].replace(/<[^>]*>?/gm, '')}</h4>
            <span class="text-xs text-slate-400">ID: BANNER-${b.id}</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <!-- Enable/Disable Switch -->
          <label class="flex items-center gap-2 cursor-pointer">
            <span class="text-xs font-bold ${b.enabled ? 'text-lime-400' : 'text-slate-500'}">${b.enabled ? 'Habilitado' : 'Deshabilitado'}</span>
            <input type="checkbox" ${b.enabled ? 'checked' : ''} onchange="window.toggleBannerEnable(${b.id})" class="sr-only peer">
            <div class="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-500"></div>
          </label>

          <button onclick="window.deleteBanner(${b.id})" class="p-2 text-slate-500 hover:text-rose-400 transition" title="Eliminar este banner">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      <!-- Banner Editor Form -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Left Column: Inputs -->
        <div class="space-y-4">
          
          <!-- Image upload and preview -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Imagen del Banner:</label>
            <div class="flex items-center gap-3">
              <input type="text" id="banner-img-url-${b.id}" value="${b.image}" oninput="window.updateBannerFieldLive(${b.id}, 'image', this.value)" onchange="window.updateBannerField(${b.id}, 'image', this.value)" class="flex-1 bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">
              <label class="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl cursor-pointer transition flex items-center gap-1.5 shrink-0">
                <i class="fa-solid fa-upload text-lime-400"></i> Subir Foto
                <input type="file" accept="image/*" class="hidden" onchange="window.handleBannerImageUpload(${b.id}, this)">
              </label>
            </div>
          </div>

          <!-- OPACITY SLIDER (Rango de 0% a 100%) -->
          <div class="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl">
            <div class="flex items-center justify-between mb-2">
              <label class="text-xs font-bold text-slate-300 uppercase flex items-center gap-2">
                <i class="fa-solid fa-circle-half-stroke text-lime-400"></i> Opacidad del Overlay Oscuro:
              </label>
              <span id="banner-opacity-val-${b.id}" class="text-xs font-black text-lime-400 bg-lime-500/10 px-2.5 py-1 rounded-lg border border-lime-500/30">
                ${b.opacity}%
              </span>
            </div>
            <input type="range" min="0" max="100" value="${b.opacity}" id="banner-opacity-slider-${b.id}" oninput="window.updateBannerOpacityLive(${b.id}, this.value)" class="w-full accent-lime-500 cursor-pointer">
            <div class="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>0% (Imagen 100% clara sin sombra)</span>
              <span>100% (Oscuro total)</span>
            </div>
          </div>

          <!-- Badge text -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Badge Superior:</label>
            <input type="text" value="${b.badge || ''}" oninput="window.updateBannerFieldLive(${b.id}, 'badge', this.value)" onchange="window.updateBannerField(${b.id}, 'badge', this.value)" placeholder="Ej: PISO 2, CRA 5 # 22 - 32..." class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">
          </div>

          <!-- Title -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Título Principal (usa saltos de línea):</label>
            <textarea rows="2" oninput="window.updateBannerFieldLive(${b.id}, 'title', this.value)" onchange="window.updateBannerField(${b.id}, 'title', this.value)" placeholder="Título del banner..." class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">${b.title || ''}</textarea>
          </div>

          <!-- Subtitle -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Subtítulo / Descripción:</label>
            <textarea rows="2" oninput="window.updateBannerFieldLive(${b.id}, 'subtitle', this.value)" onchange="window.updateBannerField(${b.id}, 'subtitle', this.value)" placeholder="Descripción o detalles del banner..." class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">${b.subtitle || ''}</textarea>
          </div>

          <!-- Buttons Editor -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
            <div>
              <label class="block text-[11px] font-bold text-lime-400 uppercase mb-1">Botón 1 (Texto y Enlace):</label>
              <input type="text" placeholder="Texto (dejar vacío si no deseas botón)" value="${b.btn1Text || ''}" oninput="window.updateBannerFieldLive(${b.id}, 'btn1Text', this.value)" onchange="window.updateBannerField(${b.id}, 'btn1Text', this.value)" class="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-2 text-xs mb-1.5 focus:border-lime-500">
              <input type="text" placeholder="Enlace (ej: #planes)" value="${b.btn1Link || ''}" oninput="window.updateBannerFieldLive(${b.id}, 'btn1Link', this.value)" onchange="window.updateBannerField(${b.id}, 'btn1Link', this.value)" class="w-full bg-slate-950 border border-slate-800 text-slate-400 rounded-lg px-3 py-2 text-xs focus:border-lime-500">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-cyan-400 uppercase mb-1">Botón 2 (Texto y Enlace):</label>
              <input type="text" placeholder="Texto (dejar vacío si no deseas botón)" value="${b.btn2Text || ''}" oninput="window.updateBannerFieldLive(${b.id}, 'btn2Text', this.value)" onchange="window.updateBannerField(${b.id}, 'btn2Text', this.value)" class="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-2 text-xs mb-1.5 focus:border-lime-500">
              <input type="text" placeholder="Enlace (ej: #convenios)" value="${b.btn2Link || ''}" oninput="window.updateBannerFieldLive(${b.id}, 'btn2Link', this.value)" onchange="window.updateBannerField(${b.id}, 'btn2Link', this.value)" class="w-full bg-slate-950 border border-slate-800 text-slate-400 rounded-lg px-3 py-2 text-xs focus:border-lime-500">
            </div>
          </div>

        </div>

        <!-- Right Column: Live Visual Preview -->
        <div>
          <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Vista Previa en Tiempo Real:</label>
          <div class="relative w-full h-[360px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex items-center p-6 bg-black" id="banner-live-box-${b.id}">
            <!-- Background Image -->
            <img id="banner-preview-img-${b.id}" src="${b.image}" alt="Banner" class="absolute inset-0 w-full h-full object-cover">
            
            <!-- Dynamic Opacity Overlay -->
            <div id="banner-preview-overlay-${b.id}" class="absolute inset-0 transition-opacity" style="background-color: rgba(9, 13, 22, ${b.opacity / 100});"></div>
            
            <!-- Content overlay -->
            <div id="banner-preview-content-${b.id}" class="relative z-10 max-w-sm space-y-3">
              ${b.badge && b.badge.trim() ? `
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-lime-500/20 border border-lime-500/40 text-lime-400 text-[9px] font-extrabold uppercase">
                  ${b.badge}
                </span>
              ` : ''}
              ${b.title && b.title.trim() ? `
                <h3 class="text-xl sm:text-2xl font-black text-white leading-tight uppercase">
                  ${b.title.replace(/\n/g, '<br>')}
                </h3>
              ` : ''}
              ${b.subtitle && b.subtitle.trim() ? `
                <p class="text-slate-300 text-[11px] line-clamp-3 leading-relaxed">
                  ${b.subtitle}
                </p>
              ` : ''}
              ${((b.btn1Text && b.btn1Text.trim()) || (b.btn2Text && b.btn2Text.trim())) ? `
                <div class="flex items-center gap-2 pt-2">
                  ${b.btn1Text && b.btn1Text.trim() ? `
                    <span class="px-3 py-1.5 rounded-lg bg-lime-500 text-black font-extrabold text-[10px]">
                      ${b.btn1Text}
                    </span>
                  ` : ''}
                  ${b.btn2Text && b.btn2Text.trim() ? `
                    <span class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold text-[10px]">
                      ${b.btn2Text}
                    </span>
                  ` : ''}
                </div>
              ` : ''}
            </div>
          </div>

          <div class="mt-4 flex justify-end">
            <button onclick="window.saveAllBannersNow()" class="px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-xl shadow-lg transition flex items-center gap-2">
              <i class="fa-solid fa-floppy-disk"></i> Guardar Cambios de este Banner
            </button>
          </div>
        </div>

      </div>

    </div>
  `).join('');
}

// Live Opacity Slider feedback
window.updateBannerOpacityLive = function(bannerId, value) {
  const valBadge = document.getElementById(`banner-opacity-val-${bannerId}`);
  const overlay = document.getElementById(`banner-preview-overlay-${bannerId}`);
  if (valBadge) valBadge.textContent = `${value}%`;
  if (overlay) overlay.style.backgroundColor = `rgba(9, 13, 22, ${value / 100})`;

  const banners = getBanners();
  const banner = banners.find(b => b.id === bannerId);
  if (banner) {
    banner.opacity = parseInt(value);
    saveBanners(banners);
  }
};

// Real-time Banner Field Preview Update (Does not destroy form focus)
window.updateBannerFieldLive = function(bannerId, field, value) {
  const banners = getBanners();
  const banner = banners.find(b => b.id === bannerId);
  if (banner) {
    banner[field] = value;
    saveBanners(banners);
    if (field === 'image') {
      const previewImg = document.getElementById(`banner-preview-img-${bannerId}`);
      if (previewImg) previewImg.src = value;
    } else {
      updateBannerPreviewDOM(banner);
    }
  }
};

function updateBannerPreviewDOM(banner) {
  const container = document.getElementById(`banner-preview-content-${banner.id}`);
  if (!container) return;

  const hasBadge = banner.badge && banner.badge.trim();
  const hasTitle = banner.title && banner.title.trim();
  const hasSubtitle = banner.subtitle && banner.subtitle.trim();
  const hasBtn1 = banner.btn1Text && banner.btn1Text.trim();
  const hasBtn2 = banner.btn2Text && banner.btn2Text.trim();

  let html = '';
  if (hasBadge) {
    html += `
      <span class="inline-block px-2.5 py-0.5 rounded-full bg-lime-500/20 border border-lime-500/40 text-lime-400 text-[9px] font-extrabold uppercase">
        ${banner.badge}
      </span>
    `;
  }
  if (hasTitle) {
    html += `
      <h3 class="text-xl sm:text-2xl font-black text-white leading-tight uppercase">
        ${banner.title.replace(/\n/g, '<br>')}
      </h3>
    `;
  }
  if (hasSubtitle) {
    html += `
      <p class="text-slate-300 text-[11px] line-clamp-3 leading-relaxed">
        ${banner.subtitle}
      </p>
    `;
  }
  if (hasBtn1 || hasBtn2) {
    html += `<div class="flex items-center gap-2 pt-2">`;
    if (hasBtn1) {
      html += `
        <span class="px-3 py-1.5 rounded-lg bg-lime-500 text-black font-extrabold text-[10px]">
          ${banner.btn1Text}
        </span>
      `;
    }
    if (hasBtn2) {
      html += `
        <span class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold text-[10px]">
          ${banner.btn2Text}
        </span>
      `;
    }
    html += `</div>`;
  }

  container.innerHTML = html;
}

// Update field helper
window.updateBannerField = function(bannerId, field, value) {
  const banners = getBanners();
  const banner = banners.find(b => b.id === bannerId);
  if (banner) {
    banner[field] = value;
    saveBanners(banners);
    updateBannerPreviewDOM(banner);
  }
};

// Toggle Enable/Disable
window.toggleBannerEnable = function(bannerId) {
  const banners = getBanners();
  const banner = banners.find(b => b.id === bannerId);
  if (banner) {
    banner.enabled = !banner.enabled;
    saveBanners(banners);
    renderBannersEditor();
  }
};

// Delete Banner
window.deleteBanner = function(bannerId) {
  let banners = getBanners();
  if (banners.length <= 1) {
    alert("Debes mantener al menos un banner en el sitio web.");
    return;
  }
  if (!confirm("¿Deseas eliminar este banner?")) return;
  banners = banners.filter(b => b.id !== bannerId);
  saveBanners(banners);
  renderBannersEditor();
};

// Handle banner file upload -> compressed Image with live preview
window.handleBannerImageUpload = function(bannerId, inputEl) {
  if (inputEl.files && inputEl.files[0]) {
    const file = inputEl.files[0];
    compressImage(file, 1280, 720, 0.78, function(dataUrl) {
      const banners = getBanners();
      const banner = banners.find(b => b.id === bannerId);
      if (banner) {
        banner.image = dataUrl;
        saveBanners(banners);
        
        // Update live preview in real time
        const previewImg = document.getElementById(`banner-preview-img-${bannerId}`);
        if (previewImg) previewImg.src = dataUrl;

        // Update image url input field
        const txtInput = document.getElementById(`banner-img-url-${bannerId}`);
        if (txtInput) txtInput.value = dataUrl;

        showAdminToast("¡Imagen del banner actualizada en tiempo real!");
      }
    });
  }
};

window.saveAllBannersNow = function() {
  alert("¡Banners guardados con éxito! Los cambios se verán reflejados de inmediato en la página principal.");
};

// Add new banner button
function initAddNewBanner() {
  const btn = document.getElementById('admin-add-banner-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const banners = getBanners();
    const newId = banners.length > 0 ? Math.max(...banners.map(b => b.id)) + 1 : 1;
    const newBanner = {
      id: newId,
      badge: "NUEVA PROMOCIÓN O EVENTO CAF",
      badgeIcon: "fa-solid fa-star",
      badgeColor: "lime",
      title: "ENTRENA CON LOS MEJORES\nEN ANSERMA.",
      highlightWord: "LOS MEJORES",
      subtitle: "Nuevos programas de acondicionamiento físico, asesoría de sala y clases dirigidas.",
      image: "assets/images/galeria/galeria-2.jpg",
      enabled: true,
      opacity: 75,
      btn1Text: "Ver Planes",
      btn1Link: "#planes",
      btn2Text: "Contáctanos",
      btn2Link: "#contacto"
    };

    banners.push(newBanner);
    saveBanners(banners);
    renderBannersEditor();
    alert("¡Nuevo banner creado! Ahora puedes editar sus textos, opacidad e imagen.");
  });
}

// ==========================================
// 7. SECTION 3: EDITOR DE ROPA Y SUPLEMENTOS (CRUD TIENDA)
// ==========================================

function renderProductsEditor(categoryFilter = 'todos', searchTerm = '') {
  const container = document.getElementById('admin-products-list');
  if (!container) return;

  let products = getProducts();

  if (categoryFilter !== 'todos') {
    products = products.filter(p => p.category === categoryFilter);
  }

  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }

  if (products.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <i class="fa-solid fa-box-open text-4xl mb-3 text-slate-600 block"></i>
        No se encontraron productos en esta categoría o búsqueda.
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(p => `
    <div class="bg-slate-900 border ${p.status === 'agotado' ? 'border-amber-900/40 opacity-75' : 'border-slate-800'} rounded-2xl p-5 flex flex-col justify-between hover:border-lime-500/30 transition">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
            p.category === 'suplementos' ? 'bg-amber-500/20 text-amber-400' :
            p.category === 'ropa' ? 'bg-cyan-500/20 text-cyan-400' :
            'bg-purple-500/20 text-purple-400'
          }">
            ${p.category}
          </span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${p.status === 'agotado' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}">
            ${p.status === 'agotado' ? 'Agotado' : 'Disponible'}
          </span>
        </div>

        <div class="w-full h-44 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-center mb-3 relative overflow-hidden group">
          ${p.image ? `
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
            <div class="hidden w-full h-full bg-gradient-to-br ${p.color || 'from-slate-800 to-slate-950'} flex items-center justify-center">
              <i class="${p.icon || 'fa-solid fa-dumbbell'} text-4xl text-white drop-shadow"></i>
            </div>
          ` : `
            <div class="w-full h-full bg-gradient-to-br ${p.color || 'from-slate-800 to-slate-950'} flex items-center justify-center">
              <i class="${p.icon || 'fa-solid fa-dumbbell'} text-4xl text-white drop-shadow"></i>
            </div>
          `}
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none"></div>
          <span class="absolute top-2 left-2 bg-black/80 text-lime-400 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border border-lime-500/30">
            ${p.badge}
          </span>
        </div>

        <h4 class="text-white font-extrabold text-sm sm:text-base leading-tight">${p.name}</h4>
        <p class="text-xs text-slate-400 mt-1 line-clamp-2">${p.desc}</p>
        
        <div class="mt-3">
          <span class="text-[10px] text-slate-400 uppercase block">Precio en sede:</span>
          <span class="text-lg font-black text-lime-400">$${p.price.toLocaleString('es-CO')} COP</span>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
        <button onclick="window.toggleProductStatus(${p.id})" class="text-xs font-bold px-2.5 py-1.5 rounded-lg ${p.status === 'agotado' ? 'bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white' : 'bg-amber-600/20 text-amber-400 hover:bg-amber-600 hover:text-white'} transition" title="Cambiar disponibilidad">
          <i class="fa-solid fa-power-off mr-1"></i> ${p.status === 'agotado' ? 'Reactivar' : 'Agotar'}
        </button>

        <div class="flex items-center gap-1.5">
          <button onclick="window.editProductModal(${p.id})" class="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs transition" title="Editar producto">
            <i class="fa-solid fa-pen-to-square text-cyan-400"></i>
          </button>
          <button onclick="window.deleteProduct(${p.id})" class="p-2 bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-400 rounded-lg text-xs transition" title="Eliminar producto">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

    </div>
  `).join('');
}

// Toggle product stock
window.toggleProductStatus = function(productId) {
  const products = getProducts();
  const prod = products.find(p => p.id === productId);
  if (prod) {
    prod.status = prod.status === 'agotado' ? 'disponible' : 'agotado';
    saveProducts(products);
    renderProductsEditor();
  }
};

// Delete product
window.deleteProduct = function(productId) {
  if (!confirm("¿Deseas eliminar este producto de la tienda?")) return;
  let products = getProducts();
  products = products.filter(p => p.id !== productId);
  saveProducts(products);
  renderProductsEditor();
};

// Product Image Upload with canvas compression
window.handleProductImageUpload = function(mode, inputEl) {
  if (inputEl.files && inputEl.files[0]) {
    const file = inputEl.files[0];
    compressImage(file, 600, 600, 0.78, function(dataUrl) {
      const input = document.getElementById(`${mode}-prod-image`);
      if (input) input.value = dataUrl;
      window.previewProductImageLive(mode, dataUrl);
      showAdminToast("¡Foto de producto cargada y optimizada!");
    });
  }
};

window.openAddProductModal = function() {
  const addModal = document.getElementById('admin-product-add-modal');
  const addForm = document.getElementById('admin-product-add-form');
  if (addForm) addForm.reset();
  const imgInput = document.getElementById('add-prod-image');
  if (imgInput) imgInput.value = '';
  window.previewProductImageLive('add', '');
  if (addModal) addModal.classList.remove('hidden');
};

// Preview product image live
window.previewProductImageLive = function(mode, val) {
  const img = document.getElementById(`${mode}-prod-img-preview`);
  const ph = document.getElementById(`${mode}-prod-img-placeholder`);
  if (!img || !ph) return;

  if (val && val.trim()) {
    img.src = val.trim();
    img.classList.remove('hidden');
    ph.classList.add('hidden');
  } else {
    img.src = '';
    img.classList.add('hidden');
    ph.classList.remove('hidden');
  }
};

// Remove product image
window.removeProductImage = function(mode) {
  const input = document.getElementById(`${mode}-prod-image`);
  const fileInput = document.getElementById(`${mode}-prod-file`);
  if (input) input.value = '';
  if (fileInput) fileInput.value = '';
  window.previewProductImageLive(mode, '');
};

// Open Edit Product Modal
window.editProductModal = function(productId) {
  const products = getProducts();
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('admin-product-edit-modal');
  if (!modal) return;

  document.getElementById('edit-prod-id').value = prod.id;
  document.getElementById('edit-prod-name').value = prod.name;
  document.getElementById('edit-prod-category').value = prod.category;
  document.getElementById('edit-prod-price').value = prod.price;
  document.getElementById('edit-prod-badge').value = prod.badge;
  document.getElementById('edit-prod-desc').value = prod.desc;

  const imgInput = document.getElementById('edit-prod-image');
  if (imgInput) imgInput.value = prod.image || '';
  window.previewProductImageLive('edit', prod.image || '');

  modal.classList.remove('hidden');
};

// Init Product Edit & Add forms
function initProductsForms() {
  // Edit Form Submit
  const editForm = document.getElementById('admin-product-edit-form');
  const editModal = document.getElementById('admin-product-edit-modal');
  const closeEditBtn = document.getElementById('admin-close-product-edit-btn');

  if (closeEditBtn && editModal) {
    closeEditBtn.addEventListener('click', () => editModal.classList.add('hidden'));
  }

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = parseInt(document.getElementById('edit-prod-id').value);
      const name = document.getElementById('edit-prod-name').value.trim();
      const category = document.getElementById('edit-prod-category').value;
      const price = parseInt(document.getElementById('edit-prod-price').value);
      const badge = document.getElementById('edit-prod-badge').value.trim();
      const desc = document.getElementById('edit-prod-desc').value.trim();
      const image = document.getElementById('edit-prod-image')?.value.trim() || '';

      const products = getProducts();
      const p = products.find(item => item.id === id);
      if (p) {
        p.name = name;
        p.category = category;
        p.price = price;
        p.badge = badge;
        p.desc = desc;
        p.image = image;
        saveProducts(products);
        renderProductsEditor();
        editModal.classList.add('hidden');
        alert("¡Producto actualizado exitosamente!");
      }
    });
  }

  // Add Form
  const addBtn = document.getElementById('admin-open-add-product-btn');
  const addModal = document.getElementById('admin-product-add-modal');
  const addForm = document.getElementById('admin-product-add-form');
  const closeAddBtn = document.getElementById('admin-close-product-add-btn');

  if (addBtn && addModal) {
    addBtn.addEventListener('click', () => {
      window.openAddProductModal();
    });
  }
  if (closeAddBtn && addModal) {
    closeAddBtn.addEventListener('click', () => addModal.classList.add('hidden'));
  }

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('add-prod-name').value.trim();
      const category = document.getElementById('add-prod-category').value;
      const price = parseInt(document.getElementById('add-prod-price').value);
      const badge = document.getElementById('add-prod-badge').value.trim() || 'Nuevo';
      const desc = document.getElementById('add-prod-desc').value.trim();
      const icon = document.getElementById('add-prod-icon')?.value.trim() || 'fa-solid fa-tag';
      const image = document.getElementById('add-prod-image')?.value.trim() || '';

      const products = getProducts();
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

      const colors = {
        suplementos: "from-amber-500 to-yellow-600",
        ropa: "from-neutral-700 to-neutral-900",
        accesorios: "from-emerald-600 to-teal-700"
      };

      const newProd = {
        id: newId,
        name,
        category,
        price,
        badge,
        desc,
        icon,
        color: colors[category] || "from-slate-700 to-slate-900",
        image: image,
        status: "disponible"
      };

      products.unshift(newProd);
      saveProducts(products);
      renderProductsEditor();
      addForm.reset();
      window.previewProductImageLive('add', '');
      addModal.classList.add('hidden');
      showAdminToast(`¡Producto "${name}" agregado con éxito a la tienda!`);
    });
  }
}

// ==========================================
// 8. ADMINISTRATOR MEMBER DASHBOARD CONTROLLER
// ==========================================

let activeDashboardMemberId = null;

// Open member dashboard modal
window.openMemberDashboard = function(memberId) {
  const members = getMembers();
  const member = members.find(m => m.id === memberId);
  if (!member) {
    alert("No se encontró la información del socio.");
    return;
  }

  activeDashboardMemberId = member.id;
  const statusInfo = getMemberPlanStatus(member.expirationDate);

  // Initials
  const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const avatarEl = document.getElementById('admin-mem-avatar');
  if (avatarEl) avatarEl.textContent = initials;

  // Header info
  const nameEl = document.getElementById('admin-mem-name');
  if (nameEl) nameEl.textContent = member.name;

  const catBadgeEl = document.getElementById('admin-mem-category-badge');
  if (catBadgeEl) {
    catBadgeEl.textContent = member.confaCategory === 'Particular' ? 'Particular CAF' : `Confa Cat ${member.confaCategory}`;
    catBadgeEl.className = `px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
      member.confaCategory === 'A' ? 'bg-lime-500/20 text-lime-400 border-lime-500/40' :
      member.confaCategory === 'B' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' :
      member.confaCategory === 'C' ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' :
      'bg-slate-800 text-slate-300 border-slate-700'
    }`;
  }

  const statusBadgeEl = document.getElementById('admin-mem-status-badge');
  if (statusBadgeEl) {
    statusBadgeEl.textContent = statusInfo.message;
    statusBadgeEl.className = `px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${statusInfo.badgeClass}`;
  }

  const cedulaEl = document.getElementById('admin-mem-cedula');
  if (cedulaEl) cedulaEl.innerHTML = `<i class="fa-solid fa-id-card text-slate-500 mr-1"></i>CC: ${member.cedula}`;

  const phoneEl = document.getElementById('admin-mem-phone');
  if (phoneEl) phoneEl.innerHTML = `<i class="fa-solid fa-phone text-slate-500 mr-1"></i>${member.phone}`;

  const planEl = document.getElementById('admin-mem-plan');
  if (planEl) planEl.innerHTML = `<i class="fa-solid fa-dumbbell text-slate-500 mr-1"></i>${member.planName} ($${member.monthlyFee.toLocaleString('es-CO')} COP)`;

  // WhatsApp quick button
  const cleanPhone = member.phone.replace(/[^0-9]/g, '');
  const intPhone = cleanPhone.startsWith('57') ? cleanPhone : '57' + cleanPhone;
  let waText = "";
  if (statusInfo.isOverdue) {
    waText = `Hola *${member.name}*, te saludamos de *CAF Anserma Caldas (Víctor Zamorano)*. Te recordamos cordialmente que tu plan *${member.planName}* tiene *${statusInfo.overdueDays} días vencido* (venció el ${member.expirationDate}). Puedes renovar hoy mismo en nuestra sede o por Nequi. ¡Te esperamos para seguir entrenando!`;
  } else if (statusInfo.status === "Por vencer") {
    waText = `Hola *${member.name}*, te saludamos de *CAF Anserma*. Te recordamos que tu plan *${member.planName}* vence pronto el *${member.expirationDate}*. ¡Puedes renovar para continuar tu progreso sin interrupciones!`;
  } else {
    waText = `Hola *${member.name}*, te saludamos de *CAF Anserma*. ¿Cómo va tu plan de entrenamiento hoy? Estamos para apoyarte en tu evolución física.`;
  }
  const waBtn = document.getElementById('admin-mem-whatsapp-btn');
  if (waBtn) waBtn.href = `https://wa.me/${intPhone}?text=${encodeURIComponent(waText)}`;

  // Quick KPIs
  const diffKg = Number((member.currentWeight - member.initialWeight).toFixed(1));
  const diffText = diffKg <= 0 ? `${diffKg} kg` : `+${diffKg} kg`;
  const diffColorClass = diffKg <= 0 ? 'text-lime-400 bg-lime-500/10' : 'text-amber-400 bg-amber-500/10';

  const weightKpi = document.getElementById('admin-mem-weight-kpi');
  if (weightKpi) {
    weightKpi.innerHTML = `
      <span>${member.currentWeight} kg</span>
      <span class="text-xs font-bold ${diffColorClass} px-1.5 py-0.5 rounded">${diffText}</span>
    `;
  }

  // IMC Calculation
  const hMeters = member.height / 100;
  const imc = Number((member.currentWeight / (hMeters * hMeters)).toFixed(1));
  let imcCategory = "Saludable";
  let imcColor = "text-emerald-400 bg-emerald-500/10";
  if (imc < 18.5) {
    imcCategory = "Bajo peso";
    imcColor = "text-amber-400 bg-amber-500/10";
  } else if (imc >= 25 && imc < 29.9) {
    imcCategory = "Sobrepeso leve";
    imcColor = "text-yellow-400 bg-yellow-500/10";
  } else if (imc >= 30) {
    imcCategory = "Obesidad";
    imcColor = "text-rose-400 bg-rose-500/10";
  }

  const imcKpi = document.getElementById('admin-mem-imc-kpi');
  if (imcKpi) {
    imcKpi.innerHTML = `
      <span>${imc} IMC</span>
      <span class="text-[10px] ${imcColor} px-1.5 py-0.5 rounded">${imcCategory}</span>
    `;
  }

  // Store purchases total
  const totalStore = (member.storePurchases || []).reduce((acc, p) => acc + (p.price * (p.qty || 1)), 0);
  const storeKpi = document.getElementById('admin-mem-store-kpi');
  if (storeKpi) {
    storeKpi.innerHTML = `
      <span>$${totalStore.toLocaleString('es-CO')} COP</span>
      <div class="text-[10px] text-slate-400 font-normal mt-0.5">${(member.storePurchases || []).length} compras registradas</div>
    `;
  }

  // Debt KPI
  const debtKpi = document.getElementById('admin-mem-debt-kpi');
  if (debtKpi) {
    if (member.balanceDue > 0) {
      debtKpi.innerHTML = `<span class="text-rose-400 font-bold">$${member.balanceDue.toLocaleString('es-CO')} COP Pendiente</span>`;
    } else {
      debtKpi.innerHTML = `<span class="text-emerald-400 font-bold">Al día ($0 COP)</span>`;
    }
  }

  // Footer info
  const footerInfo = document.getElementById('admin-mem-footer-info');
  if (footerInfo) {
    footerInfo.innerHTML = `Socio ID: <span class="text-white font-mono font-bold">${member.id}</span> · Inscrito desde: <span class="text-white font-mono">${member.startDate}</span>`;
  }

  // Footer renew button
  const renewBtn = document.getElementById('admin-mem-renew-btn');
  if (renewBtn) {
    renewBtn.onclick = () => window.renewMemberFromModal(member.id);
  }

  // Default to first tab
  window.switchMemberDashboardTab('avance');

  // Open modal
  const modal = document.getElementById('admin-member-dashboard-modal');
  if (modal) modal.classList.remove('hidden');
};

// Close modal
window.closeMemberDashboard = function() {
  const modal = document.getElementById('admin-member-dashboard-modal');
  if (modal) modal.classList.add('hidden');
  activeDashboardMemberId = null;
};

// Switch Tab inside Member Dashboard
window.switchMemberDashboardTab = function(tabKey) {
  if (!activeDashboardMemberId) return;
  const member = getMembers().find(m => m.id === activeDashboardMemberId);
  if (!member) return;

  // Toggle button styles
  document.querySelectorAll('.admin-mem-tab-btn').forEach(btn => {
    btn.classList.remove('bg-lime-500', 'text-black');
    btn.classList.add('bg-slate-900', 'text-slate-400');
  });

  const activeBtn = document.getElementById(`admin-mem-tab-btn-${tabKey}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-slate-900', 'text-slate-400');
    activeBtn.classList.add('bg-lime-500', 'text-black');
  }

  // Hide panels
  document.querySelectorAll('.admin-mem-tab-panel').forEach(p => p.classList.add('hidden'));

  const activePanel = document.getElementById(`admin-mem-tab-content-${tabKey}`);
  if (activePanel) {
    activePanel.classList.remove('hidden');
  }

  // Render content according to tab
  if (tabKey === 'avance') window.renderMemberTabAvance(member);
  if (tabKey === 'rutina') window.renderMemberTabRutina(member);
  if (tabKey === 'dieta') window.renderMemberTabDieta(member);
  if (tabKey === 'compras') window.renderMemberTabCompras(member);
  if (tabKey === 'pagos') window.renderMemberTabPagos(member);
};

// TAB 1: RENDER AVANCE & MEDIDAS
window.renderMemberTabAvance = function(member) {
  const container = document.getElementById('admin-mem-tab-content-avance');
  if (!container) return;

  const hMeters = member.height / 100;
  const imc = Number((member.currentWeight / (hMeters * hMeters)).toFixed(1));
  const diffKg = Number((member.currentWeight - member.initialWeight).toFixed(1));

  container.innerHTML = `
    <!-- Biometrics Card -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
        <span class="text-[10px] text-slate-400 font-bold uppercase block">Estatura</span>
        <span class="text-base font-black text-white">${member.height} cm</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
        <span class="text-[10px] text-slate-400 font-bold uppercase block">Peso Inicial</span>
        <span class="text-base font-black text-slate-300">${member.initialWeight} kg</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
        <span class="text-[10px] text-lime-400 font-bold uppercase block">Peso Actual</span>
        <span class="text-base font-black text-lime-400">${member.currentWeight} kg</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
        <span class="text-[10px] text-slate-400 font-bold uppercase block">Peso Meta</span>
        <span class="text-base font-black text-white">${member.targetWeight} kg</span>
      </div>
    </div>

    <!-- Weight Progress History Table -->
    <div class="bg-slate-900/40 rounded-2xl border border-slate-800 p-4 sm:p-5">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-xs sm:text-sm font-extrabold text-white uppercase flex items-center gap-2">
          <i class="fa-solid fa-weight-scale text-lime-400"></i> Historial de Pesajes & Evolución
        </h3>
        <span class="text-[11px] text-slate-400 font-mono">${(member.weightLogs || []).length} registros</span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="text-slate-400 border-b border-slate-800 uppercase text-[10px]">
              <th class="py-2 px-3">Fecha</th>
              <th class="py-2 px-3">Peso Registrado</th>
              <th class="py-2 px-3">Variación</th>
              <th class="py-2 px-3">Evaluación</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60 font-mono">
            ${(member.weightLogs || []).map((log, idx) => `
              <tr class="hover:bg-slate-800/30">
                <td class="py-2.5 px-3 text-slate-300">${log.date}</td>
                <td class="py-2.5 px-3 font-bold text-white">${log.weight} kg</td>
                <td class="py-2.5 px-3 font-bold ${
                  log.diff.includes('-') ? 'text-lime-400' :
                  log.diff.includes('+') ? 'text-amber-400' : 'text-slate-400'
                }">
                  ${log.diff}
                </td>
                <td class="py-2.5 px-3 font-sans text-[11px] text-slate-400">
                  ${idx === 0 ? 'Pesaje inicial de ingreso' : 'Seguimiento en sala CAF'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Add Weight Form -->
      <form onsubmit="window.saveNewMemberWeight(event, '${member.id}')" class="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
        <div class="text-xs font-bold text-slate-300">Registrar Nuevo Pesaje:</div>
        <input type="date" id="admin-new-weight-date" required value="${new Date().toISOString().split('T')[0]}" class="bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-1.5 text-xs focus:border-lime-500">
        <input type="number" step="0.1" id="admin-new-weight-val" required placeholder="Peso en kg (ej: 77.8)" class="bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-1.5 text-xs w-36 focus:border-lime-500">
        <button type="submit" class="px-3.5 py-1.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-lg transition">
          <i class="fa-solid fa-plus"></i> Guardar Pesaje
        </button>
      </form>
    </div>

    <!-- Trainer Assessment Note -->
    <div class="bg-lime-500/10 border border-lime-500/30 p-4 rounded-2xl text-xs space-y-1">
      <div class="font-extrabold text-lime-400 uppercase flex items-center gap-2">
        <i class="fa-solid fa-clipboard-user"></i> Observaciones del Entrenador Víctor Zamorano:
      </div>
      <p class="text-slate-300 leading-relaxed">
        ${member.notes || 'Socio con asistencia constante. Se recomienda mantener sobrecarga progresiva y control de hidratación.'}
      </p>
    </div>
  `;
};

// TAB 2: RENDER RUTINA ASIGNADA
window.renderMemberTabRutina = function(member) {
  const container = document.getElementById('admin-mem-tab-content-rutina');
  if (!container) return;

  const routine = member.assignedRoutine || ROUTINE_PRESETS.perdida_peso;

  container.innerHTML = `
    <!-- Routine Header & Preset Switcher -->
    <div class="bg-slate-900/40 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
      <div>
        <span class="text-[10px] text-lime-400 font-bold uppercase tracking-wider block">Plan de Entrenamiento Activo</span>
        <h3 class="text-base font-black text-white mt-0.5">${routine.title}</h3>
        <p class="text-xs text-slate-400 mt-0.5"><i class="fa-solid fa-user-ninja text-slate-500 mr-1"></i>Entrenador a cargo: <strong class="text-slate-300">${routine.trainer || 'Víctor Zamorano'}</strong></p>
      </div>

      <!-- Quick Preset Change -->
      <div class="flex items-center gap-2">
        <select id="admin-routine-preset-select" class="bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:border-lime-500">
          <option value="perdida_peso" ${routine.key === 'perdida_peso' ? 'selected' : ''}>Programa Reducción & Hipertrofia</option>
          <option value="hipertrofia_fuerza" ${routine.key === 'hipertrofia_fuerza' ? 'selected' : ''}>Hipertrofia Máxima & Halterofilia</option>
          <option value="funcional_crossfit" ${routine.key === 'funcional_crossfit' ? 'selected' : ''}>CrossFit WOD & Funcional</option>
          <option value="rumba_tonificacion" ${routine.key === 'rumba_tonificacion' ? 'selected' : ''}>Rumbaterapia, Tonificación & GAP</option>
          <option value="krav_maga" ${routine.key === 'krav_maga' ? 'selected' : ''}>Defensa Personal Krav Maga</option>
        </select>
        <button onclick="window.applyRoutinePreset('${member.id}')" class="px-3.5 py-2 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-xl transition">
          Asignar Rutina
        </button>
      </div>
    </div>

    <!-- Days & Exercises Checklist -->
    <div class="space-y-3">
      ${(routine.days || []).map((d, dayIdx) => `
        <div class="bg-slate-900/30 rounded-2xl border border-slate-800/80 p-4">
          <div class="font-black text-white text-xs sm:text-sm uppercase flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-lime-500"></span>
            ${d.day}
          </div>

          <div class="space-y-2">
            ${(d.items || []).map((ex, itemIdx) => `
              <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/60 hover:border-slate-700 transition">
                <label class="flex items-center gap-3 cursor-pointer flex-1 select-none">
                  <input type="checkbox" ${ex.done ? 'checked' : ''} onchange="window.toggleMemberExerciseDone('${member.id}', ${dayIdx}, ${itemIdx})" class="w-4 h-4 rounded accent-lime-500 cursor-pointer">
                  <span class="text-xs font-semibold ${ex.done ? 'line-through text-slate-500' : 'text-slate-200'}">
                    ${ex.name}
                  </span>
                </label>
                <span class="text-xs font-mono font-bold text-lime-400 bg-lime-500/10 px-2 py-0.5 rounded-lg border border-lime-500/20">
                  ${ex.sets}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

// TAB 3: RENDER DIETA & NUTRICION
window.renderMemberTabDieta = function(member) {
  const container = document.getElementById('admin-mem-tab-content-dieta');
  if (!container) return;

  const diet = member.assignedDiet || {
    calories: "2,150 kcal",
    protein: "150g",
    carbs: "190g",
    fats: "55g",
    waterLiters: "3.0 L/día",
    meals: []
  };

  container.innerHTML = `
    <!-- Macronutrients Summary Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
        <span class="text-[10px] text-amber-400 font-bold uppercase block">Calorías Diarias</span>
        <span class="text-base font-black text-white mt-0.5">${diet.calories}</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
        <span class="text-[10px] text-lime-400 font-bold uppercase block">Proteína</span>
        <span class="text-base font-black text-white mt-0.5">${diet.protein}</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
        <span class="text-[10px] text-cyan-400 font-bold uppercase block">Carbohidratos</span>
        <span class="text-base font-black text-white mt-0.5">${diet.carbs}</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
        <span class="text-[10px] text-rose-400 font-bold uppercase block">Grasas Buenas</span>
        <span class="text-base font-black text-white mt-0.5">${diet.fats}</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center col-span-2 sm:col-span-1">
        <span class="text-[10px] text-blue-400 font-bold uppercase block">Hidratación</span>
        <span class="text-base font-black text-white mt-0.5">${diet.waterLiters}</span>
      </div>
    </div>

    <!-- Meals Plan -->
    <div class="bg-slate-900/30 rounded-2xl border border-slate-800 p-4 sm:p-5 space-y-3">
      <h3 class="text-xs sm:text-sm font-extrabold text-white uppercase flex items-center gap-2 mb-2">
        <i class="fa-solid fa-utensils text-lime-400"></i> Plan Diario de Comidas
      </h3>

      <div class="space-y-2.5">
        ${(diet.meals || []).map(m => `
          <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
            <div class="font-extrabold text-lime-400 text-xs uppercase mb-1 flex items-center gap-2">
              <i class="fa-regular fa-clock text-slate-500"></i> ${m.meal}
            </div>
            <p class="text-xs text-slate-300 leading-relaxed font-sans">
              ${m.desc}
            </p>
          </div>
        `).join('')}
      </div>

      <div class="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
        <strong class="text-white">Pauta del Acompañamiento:</strong> ${diet.notes || 'Orientación nutricional de sala para optimizar el rendimiento y composición corporal.'}
      </div>
    </div>
  `;
};

// TAB 4: RENDER COMPRAS EN TIENDA (ROPA & SUPLEMENTOS)
window.renderMemberTabCompras = function(member) {
  const container = document.getElementById('admin-mem-tab-content-compras');
  if (!container) return;

  const purchases = member.storePurchases || [];
  const totalSpent = purchases.reduce((acc, p) => acc + (p.price * (p.qty || 1)), 0);
  const products = getProducts();

  container.innerHTML = `
    <!-- Purchases Summary Header -->
    <div class="bg-slate-900/40 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
      <div>
        <span class="text-[10px] text-lime-400 font-bold uppercase tracking-wider block">Gasto Total en Tienda CAF</span>
        <div class="text-xl font-black text-white mt-0.5">$${totalSpent.toLocaleString('es-CO')} COP</div>
        <div class="text-xs text-slate-400 mt-0.5">${purchases.length} compras de suplementos y ropa realizadas en la sede</div>
      </div>
    </div>

    <!-- Purchases Table -->
    <div class="bg-slate-900/30 rounded-2xl border border-slate-800 p-4 overflow-x-auto">
      <table class="w-full text-left text-xs">
        <thead>
          <tr class="text-slate-400 border-b border-slate-800 uppercase text-[10px]">
            <th class="py-2.5 px-3">Fecha</th>
            <th class="py-2.5 px-3">Producto</th>
            <th class="py-2.5 px-3">Categoría</th>
            <th class="py-2.5 px-3">Cant.</th>
            <th class="py-2.5 px-3">Total COP</th>
            <th class="py-2.5 px-3">Método Pago</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60 font-mono">
          ${purchases.length === 0 ? `
            <tr>
              <td colspan="6" class="py-6 text-center text-slate-500 font-sans">
                El socio no registra compras de ropa o suplementos todavía.
              </td>
            </tr>
          ` : purchases.map(p => `
            <tr class="hover:bg-slate-800/30">
              <td class="py-2.5 px-3 text-slate-300">${p.date}</td>
              <td class="py-2.5 px-3 font-bold text-white font-sans">${p.product}</td>
              <td class="py-2.5 px-3 font-sans">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                  p.category.toLowerCase().includes('suple') ? 'bg-amber-500/20 text-amber-400' :
                  p.category.toLowerCase().includes('ropa') ? 'bg-lime-500/20 text-lime-400' :
                  'bg-cyan-500/20 text-cyan-400'
                }">
                  ${p.category}
                </span>
              </td>
              <td class="py-2.5 px-3 font-bold text-slate-300">${p.qty || 1}</td>
              <td class="py-2.5 px-3 font-bold text-lime-400">$${(p.price * (p.qty || 1)).toLocaleString('es-CO')}</td>
              <td class="py-2.5 px-3 text-slate-400 font-sans">${p.paymentMethod}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Quick Form: Register new store purchase for this member -->
    <div class="bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-slate-800">
      <h4 class="text-xs font-black text-white uppercase mb-3 flex items-center gap-2">
        <i class="fa-solid fa-cart-plus text-lime-400"></i> Registrar Nueva Compra en Tienda para este Socio:
      </h4>

      <form onsubmit="window.saveNewMemberStorePurchase(event, '${member.id}')" class="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div class="sm:col-span-2">
          <label class="block text-[11px] font-bold text-slate-300 uppercase mb-1">Producto:</label>
          <select id="admin-purchase-prod-select" required class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:border-lime-500">
            ${products.map(pr => `
              <option value="${pr.id}">${pr.name} - $${pr.price.toLocaleString('es-CO')} COP (${pr.category})</option>
            `).join('')}
          </select>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-slate-300 uppercase mb-1">Cantidad:</label>
          <input type="number" id="admin-purchase-qty" min="1" value="1" required class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:border-lime-500">
        </div>

        <div>
          <label class="block text-[11px] font-bold text-slate-300 uppercase mb-1">Método de Pago:</label>
          <select id="admin-purchase-payment" class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:border-lime-500">
            <option value="Nequi">Nequi</option>
            <option value="Daviplata">Daviplata</option>
            <option value="Efectivo Taquilla">Efectivo Taquilla</option>
            <option value="Tarjeta">Tarjeta Débito/Crédito</option>
          </select>
        </div>

        <div class="sm:col-span-4 pt-2 flex justify-end">
          <button type="submit" class="px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-xl transition flex items-center gap-2">
            <i class="fa-solid fa-check"></i> Registrar Venta al Socio
          </button>
        </div>
      </form>
    </div>
  `;
};

// TAB 5: RENDER HISTORIAL DE PAGOS & MEMBRESIA
window.renderMemberTabPagos = function(member) {
  const container = document.getElementById('admin-mem-tab-content-pagos');
  if (!container) return;

  const receipts = member.paymentHistory || [];
  const statusInfo = getMemberPlanStatus(member.expirationDate);

  container.innerHTML = `
    <!-- Membership Status Bar -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-[10px] text-slate-400 font-bold uppercase block">Plan Actual</span>
        <span class="text-sm font-extrabold text-white mt-0.5 block">${member.planName}</span>
        <span class="text-xs text-lime-400 font-mono font-bold">$${member.monthlyFee.toLocaleString('es-CO')} COP / mes</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-[10px] text-slate-400 font-bold uppercase block">Fecha de Vencimiento</span>
        <span class="text-sm font-extrabold text-white font-mono mt-0.5 block">${member.expirationDate}</span>
        <span class="text-xs ${statusInfo.textClass} font-bold">${statusInfo.message}</span>
      </div>
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-[10px] text-slate-400 font-bold uppercase block">Estado de Deuda</span>
        <span class="text-sm font-extrabold ${member.balanceDue > 0 ? 'text-rose-400' : 'text-emerald-400'} mt-0.5 block">
          ${member.balanceDue > 0 ? `$${member.balanceDue.toLocaleString('es-CO')} COP Pendiente` : 'Sin deuda ($0 COP)'}
        </span>
        <span class="text-xs text-slate-400 font-sans">Pago habitual: ${member.paymentMethod}</span>
      </div>
    </div>

    <!-- Receipts History Table -->
    <div class="bg-slate-900/30 rounded-2xl border border-slate-800 p-4 overflow-x-auto">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-xs sm:text-sm font-extrabold text-white uppercase flex items-center gap-2">
          <i class="fa-solid fa-receipt text-lime-400"></i> Comprobantes de Pago y Mensualidades
        </h3>
        <button onclick="window.renewMemberFromModal('${member.id}')" class="px-3 py-1.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-lg transition flex items-center gap-1.5">
          <i class="fa-solid fa-arrows-rotate"></i> Renovar +30 Días
        </button>
      </div>

      <table class="w-full text-left text-xs">
        <thead>
          <tr class="text-slate-400 border-b border-slate-800 uppercase text-[10px]">
            <th class="py-2.5 px-3">Recibo #</th>
            <th class="py-2.5 px-3">Fecha</th>
            <th class="py-2.5 px-3">Concepto</th>
            <th class="py-2.5 px-3">Monto COP</th>
            <th class="py-2.5 px-3">Método</th>
            <th class="py-2.5 px-3">Estado</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60 font-mono">
          ${receipts.map(r => `
            <tr class="hover:bg-slate-800/30">
              <td class="py-2.5 px-3 text-slate-300 font-bold">${r.id}</td>
              <td class="py-2.5 px-3 text-slate-400">${r.date}</td>
              <td class="py-2.5 px-3 font-sans text-white">${r.concept}</td>
              <td class="py-2.5 px-3 font-bold text-lime-400">$${r.amount.toLocaleString('es-CO')}</td>
              <td class="py-2.5 px-3 font-sans text-slate-300">${r.method}</td>
              <td class="py-2.5 px-3 font-sans">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ${r.status || 'Aprobado'}
                </span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
};

// HANDLER: Save new weight log for member
window.saveNewMemberWeight = function(event, memberId) {
  event.preventDefault();
  const dateVal = document.getElementById('admin-new-weight-date')?.value;
  const weightVal = parseFloat(document.getElementById('admin-new-weight-val')?.value);

  if (!dateVal || isNaN(weightVal) || weightVal <= 0) {
    alert("Por favor ingresa un peso válido.");
    return;
  }

  const members = getMembers();
  const member = members.find(m => m.id === memberId);
  if (!member) return;

  const prevWeight = member.currentWeight;
  const diff = Number((weightVal - prevWeight).toFixed(1));
  const diffStr = diff <= 0 ? `${diff} kg` : `+${diff} kg`;

  member.currentWeight = weightVal;
  if (!member.weightLogs) member.weightLogs = [];
  member.weightLogs.push({
    date: dateVal,
    weight: weightVal,
    diff: diffStr
  });

  saveMembers(members);
  window.openMemberDashboard(memberId);
  window.switchMemberDashboardTab('avance');
  renderMembersAndFinances();
};

// HANDLER: Apply routine preset to member
window.applyRoutinePreset = function(memberId) {
  const select = document.getElementById('admin-routine-preset-select');
  if (!select) return;

  const presetKey = select.value;
  const preset = ROUTINE_PRESETS[presetKey];
  if (!preset) return;

  const members = getMembers();
  const member = members.find(m => m.id === memberId);
  if (!member) return;

  member.assignedRoutine = JSON.parse(JSON.stringify(preset));
  saveMembers(members);
  window.openMemberDashboard(memberId);
  window.switchMemberDashboardTab('rutina');
};

// HANDLER: Toggle exercise done
window.toggleMemberExerciseDone = function(memberId, dayIdx, itemIdx) {
  const members = getMembers();
  const member = members.find(m => m.id === memberId);
  if (!member || !member.assignedRoutine || !member.assignedRoutine.days) return;

  const day = member.assignedRoutine.days[dayIdx];
  if (day && day.items && day.items[itemIdx]) {
    day.items[itemIdx].done = !day.items[itemIdx].done;
    saveMembers(members);
    window.renderMemberTabRutina(member);
  }
};

// HANDLER: Save store purchase for member
window.saveNewMemberStorePurchase = function(event, memberId) {
  event.preventDefault();
  const prodId = parseInt(document.getElementById('admin-purchase-prod-select')?.value);
  const qty = parseInt(document.getElementById('admin-purchase-qty')?.value) || 1;
  const paymentMethod = document.getElementById('admin-purchase-payment')?.value || 'Nequi';

  const products = getProducts();
  const prod = products.find(p => p.id === prodId);
  if (!prod) return;

  const members = getMembers();
  const member = members.find(m => m.id === memberId);
  if (!member) return;

  const purchaseItem = {
    id: `VTA-${Math.floor(1000 + Math.random() * 9000)}`,
    date: new Date().toISOString().split('T')[0],
    product: prod.name,
    category: prod.category === 'suplementos' ? 'Suplementos' : prod.category === 'ropa' ? 'Ropa' : 'Accesorios',
    qty: qty,
    price: prod.price,
    paymentMethod: paymentMethod
  };

  if (!member.storePurchases) member.storePurchases = [];
  member.storePurchases.unshift(purchaseItem);
  saveMembers(members);

  // Update overall financial figures
  const finances = getFinances();
  finances.storeMonthlySales = (finances.storeMonthlySales || 0) + (prod.price * qty);
  saveFinances(finances);

  // Refresh view
  window.openMemberDashboard(memberId);
  window.switchMemberDashboardTab('compras');
  renderMembersAndFinances();
};

// HANDLER: Renew member from inside dashboard
window.renewMemberFromModal = function(memberId) {
  const members = getMembers();
  const member = members.find(m => m.id === memberId);
  if (!member) return;

  // Add 30 days from current expiration date or today if already overdue
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentExp = new Date(member.expirationDate + 'T00:00:00');
  const baseDate = currentExp < today ? today : currentExp;

  baseDate.setDate(baseDate.getDate() + 30);
  member.expirationDate = baseDate.toISOString().split('T')[0];
  member.balanceDue = 0;

  // Add receipt to payment history
  if (!member.paymentHistory) member.paymentHistory = [];
  member.paymentHistory.unshift({
    id: `REC-${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toISOString().split('T')[0],
    concept: `Renovación Mensualidad 30 Días (${member.planName})`,
    amount: member.monthlyFee,
    method: member.paymentMethod,
    status: "Aprobado"
  });

  saveMembers(members);
  window.openMemberDashboard(memberId);
  window.switchMemberDashboardTab('pagos');
  renderMembersAndFinances();
};

// ==========================================
// 9. GALLERY MANAGEMENT CONTROLLER
// ==========================================

function renderGalleryEditor(categoryFilter = 'todas', searchTerm = '') {
  const container = document.getElementById('admin-gallery-list');
  if (!container) return;

  const gallery = getGallery();
  let filtered = gallery;

  if (categoryFilter !== 'todas') {
    filtered = filtered.filter(g => g.category === categoryFilter);
  }

  if (searchTerm && searchTerm.trim()) {
    const q = searchTerm.toLowerCase().trim();
    filtered = filtered.filter(g => 
      (g.title && g.title.toLowerCase().includes(q)) || 
      (g.desc && g.desc.toLowerCase().includes(q)) ||
      (g.categoryLabel && g.categoryLabel.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-slate-900/40 rounded-3xl border border-slate-800">
        <i class="fa-solid fa-camera-retro text-4xl text-slate-600 mb-3 block"></i>
        <p class="text-sm text-slate-400">No se encontraron fotografías con los filtros seleccionados.</p>
        <button onclick="window.openAddGalleryModal()" class="mt-4 px-4 py-2 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-xl shadow transition">
          + Agregar Primera Foto
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(g => {
    const isEnabled = g.enabled !== false;
    return `
      <div class="bg-slate-900 border ${isEnabled ? 'border-slate-800' : 'border-rose-900/40 opacity-70'} rounded-3xl p-5 flex flex-col justify-between hover:border-lime-500/30 transition shadow-lg group relative" id="gallery-card-${g.id}">
        <div>
          <!-- Thumbnail with overlay badges -->
          <div class="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 mb-4 shadow-inner">
            <img src="${g.image}" alt="${g.title}" id="gal-card-img-${g.id}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-lime-400 border border-lime-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
              ${g.categoryLabel || g.category}
            </span>
            <span class="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${isEnabled ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}">
              ${isEnabled ? 'Visible' : 'Oculto'}
            </span>
          </div>

          <!-- Title and Category info -->
          <h4 class="text-white font-black text-sm uppercase leading-tight line-clamp-2 mb-1" id="gal-card-title-${g.id}">
            ${g.title}
          </h4>
          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            ${g.desc || 'Sin descripción'}
          </p>
        </div>

        <!-- Action Controls -->
        <div class="space-y-3 pt-3 border-t border-slate-800/80">
          <!-- Quick Image Change Bar -->
          <div class="flex items-center gap-2">
            <input type="text" value="${g.image}" oninput="window.updateGalleryItemLive(${g.id}, 'image', this.value)" placeholder="Ruta o enlace..." class="flex-1 bg-slate-950 border border-slate-800 text-slate-300 rounded-xl px-3 py-1.5 text-[11px] focus:border-lime-500 font-mono">
            <label class="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold rounded-xl cursor-pointer transition flex items-center gap-1 shrink-0" title="Subir foto desde tu dispositivo">
              <i class="fa-solid fa-cloud-arrow-up text-lime-400"></i>
              <input type="file" accept="image/*" class="hidden" onchange="window.handleGalleryCardImageUpload(${g.id}, this)">
            </label>
          </div>

          <!-- Bottom Button Row -->
          <div class="flex items-center justify-between gap-2">
            <button onclick="window.toggleGalleryItem(${g.id})" class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isEnabled ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black border border-emerald-500/30'}">
              <i class="fa-solid ${isEnabled ? 'fa-eye-slash' : 'fa-eye'}"></i>
              <span>${isEnabled ? 'Ocultar' : 'Activar'}</span>
            </button>

            <div class="flex items-center gap-1.5">
              <button onclick="window.openEditGalleryModal(${g.id})" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1">
                <i class="fa-solid fa-pen text-lime-400"></i> Editar
              </button>
              <button onclick="window.deleteGalleryItem(${g.id})" class="w-8 h-8 rounded-xl bg-slate-950 hover:bg-rose-500/20 text-slate-500 hover:text-rose-400 border border-slate-800 transition flex items-center justify-center" title="Eliminar foto">
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// Live update field on gallery item
window.updateGalleryItemLive = function(id, field, value) {
  const gallery = getGallery();
  const item = gallery.find(g => g.id === id);
  if (item) {
    item[field] = value;
    saveGallery(gallery);
    if (field === 'image') {
      const img = document.getElementById(`gal-card-img-${id}`);
      if (img) img.src = value;
    }
  }
};

// Upload photo directly on card
window.handleGalleryCardImageUpload = function(id, inputEl) {
  if (inputEl.files && inputEl.files[0]) {
    const file = inputEl.files[0];
    compressImage(file, 900, 700, 0.78, function(dataUrl) {
      const gallery = getGallery();
      const item = gallery.find(g => g.id === id);
      if (item) {
        item.image = dataUrl;
        saveGallery(gallery);
        const img = document.getElementById(`gal-card-img-${id}`);
        if (img) img.src = dataUrl;
        showAdminToast("¡Foto de galería actualizada con éxito!");
      }
    });
  }
};

// Toggle enable/disable gallery photo
window.toggleGalleryItem = function(id) {
  const gallery = getGallery();
  const item = gallery.find(g => g.id === id);
  if (item) {
    item.enabled = item.enabled === false ? true : false;
    saveGallery(gallery);
    const cat = document.getElementById('admin-gallery-filter')?.value || 'todas';
    const q = document.getElementById('admin-gallery-search')?.value || '';
    renderGalleryEditor(cat, q);
    showAdminToast(item.enabled ? "Foto activada en la galería" : "Foto ocultada de la galería");
  }
};

// Delete gallery item
window.deleteGalleryItem = function(id) {
  if (!confirm("¿Deseas eliminar esta fotografía de la galería?")) return;
  let gallery = getGallery();
  gallery = gallery.filter(g => g.id !== id);
  saveGallery(gallery);
  const cat = document.getElementById('admin-gallery-filter')?.value || 'todas';
  const q = document.getElementById('admin-gallery-search')?.value || '';
  renderGalleryEditor(cat, q);
  showAdminToast("Fotografía eliminada");
};

// Modal handlers
window.openAddGalleryModal = function() {
  const form = document.getElementById('admin-gallery-add-form');
  const modal = document.getElementById('admin-gallery-add-modal');
  if (form) form.reset();
  window.previewGalleryImageLive('add', '');
  if (modal) modal.classList.remove('hidden');
};

window.closeAddGalleryModal = function() {
  const modal = document.getElementById('admin-gallery-add-modal');
  if (modal) modal.classList.add('hidden');
};

window.saveNewGalleryItem = function(e) {
  e.preventDefault();
  const title = document.getElementById('add-gal-title')?.value.trim();
  const category = document.getElementById('add-gal-category')?.value;
  const badge = document.getElementById('add-gal-badge')?.value.trim() || '';
  const image = document.getElementById('add-gal-image')?.value.trim();
  const desc = document.getElementById('add-gal-desc')?.value.trim() || '';

  if (!title || !image) {
    alert("Por favor ingresa un título y una imagen para la foto.");
    return;
  }

  const categoryLabels = {
    musculacion: "Musculación & Pesas",
    funcional: "CrossFit & Calistenia",
    clases: "Rumbaterapia",
    salud: "Cardio & Salud",
    pareja: "Plan Pareja"
  };

  const gallery = getGallery();
  const newId = gallery.length > 0 ? Math.max(...gallery.map(g => g.id)) + 1 : 1;
  const newItem = {
    id: newId,
    title,
    category,
    categoryLabel: badge || categoryLabels[category] || category,
    desc,
    image,
    enabled: true
  };

  gallery.unshift(newItem);
  saveGallery(gallery);
  window.closeAddGalleryModal();
  const cat = document.getElementById('admin-gallery-filter')?.value || 'todas';
  const q = document.getElementById('admin-gallery-search')?.value || '';
  renderGalleryEditor(cat, q);
  showAdminToast(`¡Foto "${title}" agregada con éxito a la galería!`);
};

window.openEditGalleryModal = function(id) {
  const gallery = getGallery();
  const item = gallery.find(g => g.id === id);
  if (!item) return;

  const modal = document.getElementById('admin-gallery-edit-modal');
  document.getElementById('edit-gal-id').value = item.id;
  document.getElementById('edit-gal-title').value = item.title;
  document.getElementById('edit-gal-category').value = item.category;
  document.getElementById('edit-gal-badge').value = item.categoryLabel || '';
  document.getElementById('edit-gal-image').value = item.image;
  document.getElementById('edit-gal-desc').value = item.desc || '';
  window.previewGalleryImageLive('edit', item.image);

  if (modal) modal.classList.remove('hidden');
};

window.closeEditGalleryModal = function() {
  const modal = document.getElementById('admin-gallery-edit-modal');
  if (modal) modal.classList.add('hidden');
};

window.saveEditGalleryItem = function(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('edit-gal-id').value);
  const title = document.getElementById('edit-gal-title')?.value.trim();
  const category = document.getElementById('edit-gal-category')?.value;
  const badge = document.getElementById('edit-gal-badge')?.value.trim() || '';
  const image = document.getElementById('edit-gal-image')?.value.trim();
  const desc = document.getElementById('edit-gal-desc')?.value.trim() || '';

  const gallery = getGallery();
  const item = gallery.find(g => g.id === id);
  if (item) {
    item.title = title;
    item.category = category;
    item.categoryLabel = badge || item.categoryLabel;
    item.image = image;
    item.desc = desc;
    saveGallery(gallery);
    window.closeEditGalleryModal();
    const cat = document.getElementById('admin-gallery-filter')?.value || 'todas';
    const q = document.getElementById('admin-gallery-search')?.value || '';
    renderGalleryEditor(cat, q);
    showAdminToast("¡Cambios de la fotografía guardados!");
  }
};

window.handleGalleryImageUpload = function(mode, inputEl) {
  if (inputEl.files && inputEl.files[0]) {
    const file = inputEl.files[0];
    compressImage(file, 900, 700, 0.78, function(dataUrl) {
      const input = document.getElementById(`${mode}-gal-image`);
      if (input) input.value = dataUrl;
      window.previewGalleryImageLive(mode, dataUrl);
      showAdminToast("¡Foto cargada y optimizada!");
    });
  }
};

window.previewGalleryImageLive = function(mode, val) {
  const img = document.getElementById(`${mode}-gal-img-preview`);
  const ph = document.getElementById(`${mode}-gal-img-placeholder`);
  if (!img || !ph) return;

  if (val && val.trim()) {
    img.src = val.trim();
    img.classList.remove('hidden');
    ph.classList.add('hidden');
  } else {
    img.src = '';
    img.classList.add('hidden');
    ph.classList.remove('hidden');
  }
};

// ==========================================
// 10. GLOBAL RENDER & INIT
// ==========================================

function renderAllAdminSections() {
  renderMembersAndFinances();
  renderBannersEditor();
  renderProductsEditor();
  renderGalleryEditor();
}

let adminAppInitialized = false;
function initAdminApp() {
  renderAllAdminSections();
  if (adminAppInitialized) return;
  adminAppInitialized = true;

  initAddMemberForm();
  initFinancesEditor();
  initAddNewBanner();
  initProductsForms();

  // Members search & filter listeners
  const memberSearch = document.getElementById('admin-member-search');
  const memberFilter = document.getElementById('admin-member-filter');
  if (memberSearch) {
    memberSearch.addEventListener('input', (e) => {
      const status = memberFilter ? memberFilter.value : 'todos';
      renderMembersAndFinances(status, e.target.value);
    });
  }
  if (memberFilter) {
    memberFilter.addEventListener('change', (e) => {
      const q = memberSearch ? memberSearch.value : '';
      renderMembersAndFinances(e.target.value, q);
    });
  }

  // Product search & filter listeners
  const prodSearch = document.getElementById('admin-prod-search');
  const prodFilter = document.getElementById('admin-prod-filter');
  if (prodSearch) {
    prodSearch.addEventListener('input', (e) => {
      const cat = prodFilter ? prodFilter.value : 'todos';
      renderProductsEditor(cat, e.target.value);
    });
  }
  if (prodFilter) {
    prodFilter.addEventListener('change', (e) => {
      const q = prodSearch ? prodSearch.value : '';
      renderProductsEditor(e.target.value, q);
    });
  }

  // Gallery search & filter listeners
  const galSearch = document.getElementById('admin-gallery-search');
  const galFilter = document.getElementById('admin-gallery-filter');
  if (galSearch) {
    galSearch.addEventListener('input', (e) => {
      const cat = galFilter ? galFilter.value : 'todas';
      renderGalleryEditor(cat, e.target.value);
    });
  }
  if (galFilter) {
    galFilter.addEventListener('change', (e) => {
      const q = galSearch ? galSearch.value : '';
      renderGalleryEditor(e.target.value, q);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initAdminLogin();
  checkAdminAuth();

  if (localStorage.getItem('caf_admin_logged') === 'true') {
    initAdminApp();
  }
});
