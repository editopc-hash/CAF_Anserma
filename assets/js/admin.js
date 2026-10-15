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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
    status: "disponible"
  },
  {
    id: 10,
    name: "Straps de Agarre + Muñequeras Pro",
    category: "accesorios",
    price: 38000,
    desc: "Aumenta tus cargas en peso muerto y remos sin comprometer el agarre. Algodón reforzado.",
    badge: "Levantamiento",
    icon: "fa-solid fa-hand-fist",
    color: "from-amber-600 to-yellow-700",
    image: "",
    status: "disponible"
  }
];

// Helper to get formatted date offsets
function getRelativeDate(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}

// Default Members Database
const DEFAULT_MEMBERS = [
  {
    id: "SOC-001",
    name: "Carlos Andrés Ramírez",
    cedula: "1.053.840.123",
    phone: "312 456 7890",
    confaCategory: "A",
    planName: "Confa Categoría A",
    monthlyFee: 55000,
    paymentMethod: "Nequi",
    startDate: getRelativeDate(-45),
    expirationDate: getRelativeDate(15), // Al día (15 días restantes)
    notes: "Entrena en las mañanas, objetivo reducción de grasa."
  },
  {
    id: "SOC-002",
    name: "Marcela Gómez Duque",
    cedula: "1.054.912.450",
    phone: "310 987 6543",
    confaCategory: "B",
    planName: "Confa Categoría B",
    monthlyFee: 80000,
    paymentMethod: "Daviplata",
    startDate: getRelativeDate(-28),
    expirationDate: getRelativeDate(2), // Por vencer (2 días restantes)
    notes: "Clases de Rumbaterapia y zona de máquinas."
  },
  {
    id: "SOC-003",
    name: "Jhon Alexander Trejos",
    cedula: "75.084.219",
    phone: "314 555 8921",
    confaCategory: "Particular",
    planName: "Particular Mensual",
    monthlyFee: 131000,
    paymentMethod: "Efectivo Taquilla",
    startDate: getRelativeDate(-35),
    expirationDate: getRelativeDate(-5), // Vencido hace 5 días
    notes: "Entrenamiento de fuerza y halterofilia."
  },
  {
    id: "SOC-004",
    name: "Santiago Henao & Laura Vélez",
    cedula: "1.053.771.802",
    phone: "311 340 7622",
    confaCategory: "Particular",
    planName: "Plan Pareja Dúo CAF",
    monthlyFee: 220000,
    paymentMethod: "Nequi",
    startDate: getRelativeDate(-10),
    expirationDate: getRelativeDate(20), // Al día
    notes: "Entrenan juntos en las tardes (CrossFit y funcional)."
  },
  {
    id: "SOC-005",
    name: "Gloria Esperanza Morales",
    cedula: "24.901.344",
    phone: "320 612 9011",
    confaCategory: "A",
    planName: "Confa Categoría A",
    monthlyFee: 55000,
    paymentMethod: "Efectivo Confa",
    startDate: getRelativeDate(-40),
    expirationDate: getRelativeDate(-10), // Vencido hace 10 días
    notes: "Acondicionamiento físico para salud cardiovascular."
  },
  {
    id: "SOC-006",
    name: "Daniel Felipe Osorio",
    cedula: "1.053.660.198",
    phone: "315 889 0234",
    confaCategory: "C",
    planName: "Confa Categoría C",
    monthlyFee: 119000,
    paymentMethod: "Tarjeta Débito",
    startDate: getRelativeDate(-29),
    expirationDate: getRelativeDate(1), // Por vencer (mañana)
    notes: "CrossFit WOD noche y Krav Maga."
  },
  {
    id: "SOC-007",
    name: "Valentina Cardona Ríos",
    cedula: "1.054.321.789",
    phone: "313 777 4411",
    confaCategory: "A",
    planName: "Confa Fin de Semana",
    monthlyFee: 25000,
    paymentMethod: "Nequi",
    startDate: getRelativeDate(-12),
    expirationDate: getRelativeDate(18), // Al día
    notes: "Viernes, sábado y domingo."
  },
  {
    id: "SOC-008",
    name: "Mateo Restrepo Calvo",
    cedula: "1.053.992.114",
    phone: "317 222 5590",
    confaCategory: "Particular",
    planName: "Tiquetera 12 Días",
    monthlyFee: 75000,
    paymentMethod: "Efectivo Taquilla",
    startDate: getRelativeDate(-50),
    expirationDate: getRelativeDate(-2), // Vencido hace 2 días
    notes: "Tiquetera flexible."
  }
];

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

    if (u === '123456' && p === '123456') {
      localStorage.setItem('caf_admin_logged', 'true');
      if (errorMsg) errorMsg.classList.add('hidden');
      checkAdminAuth();
      renderAllAdminSections();
    } else {
      if (errorMsg) {
        errorMsg.classList.remove('hidden');
        errorMsg.textContent = "Usuario o contraseña incorrectos. Usa 123456 / 123456";
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

// ==========================================
// 3. STORAGE GETTERS & SETTERS
// ==========================================

function getBanners() {
  const data = localStorage.getItem('caf_banners');
  if (data) {
    try { return JSON.parse(data); } catch (e) { }
  }
  localStorage.setItem('caf_banners', JSON.stringify(DEFAULT_BANNERS));
  return DEFAULT_BANNERS;
}

function saveBanners(banners) {
  localStorage.setItem('caf_banners', JSON.stringify(banners));
}

function getProducts() {
  const data = localStorage.getItem('caf_products');
  if (data) {
    try { return JSON.parse(data); } catch (e) { }
  }
  localStorage.setItem('caf_products', JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem('caf_products', JSON.stringify(products));
}

function getMembers() {
  const data = localStorage.getItem('caf_members');
  if (data) {
    try { return JSON.parse(data); } catch (e) { }
  }
  localStorage.setItem('caf_members', JSON.stringify(DEFAULT_MEMBERS));
  return DEFAULT_MEMBERS;
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
          <div class="font-extrabold text-white text-xs sm:text-sm">${m.name}</div>
          <div class="text-[11px] text-slate-400 font-mono">CC: ${m.cedula}</div>
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
              <input type="text" id="banner-img-url-${b.id}" value="${b.image}" onchange="window.updateBannerField(${b.id}, 'image', this.value)" class="flex-1 bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">
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
            <input type="text" value="${b.badge}" onchange="window.updateBannerField(${b.id}, 'badge', this.value)" class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">
          </div>

          <!-- Title -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Título Principal (usa saltos de línea):</label>
            <textarea rows="2" onchange="window.updateBannerField(${b.id}, 'title', this.value)" class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">${b.title}</textarea>
          </div>

          <!-- Subtitle -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Subtítulo / Descripción:</label>
            <textarea rows="2" onchange="window.updateBannerField(${b.id}, 'subtitle', this.value)" class="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs focus:border-lime-500">${b.subtitle}</textarea>
          </div>

          <!-- Buttons Editor -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
            <div>
              <label class="block text-[11px] font-bold text-lime-400 uppercase mb-1">Botón 1 (Texto y Enlace):</label>
              <input type="text" placeholder="Texto" value="${b.btn1Text}" onchange="window.updateBannerField(${b.id}, 'btn1Text', this.value)" class="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-2 text-xs mb-1.5 focus:border-lime-500">
              <input type="text" placeholder="Enlace (ej: #planes)" value="${b.btn1Link}" onchange="window.updateBannerField(${b.id}, 'btn1Link', this.value)" class="w-full bg-slate-950 border border-slate-800 text-slate-400 rounded-lg px-3 py-2 text-xs focus:border-lime-500">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-cyan-400 uppercase mb-1">Botón 2 (Texto y Enlace):</label>
              <input type="text" placeholder="Texto" value="${b.btn2Text}" onchange="window.updateBannerField(${b.id}, 'btn2Text', this.value)" class="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-2 text-xs mb-1.5 focus:border-lime-500">
              <input type="text" placeholder="Enlace (ej: #convenios)" value="${b.btn2Link}" onchange="window.updateBannerField(${b.id}, 'btn2Link', this.value)" class="w-full bg-slate-950 border border-slate-800 text-slate-400 rounded-lg px-3 py-2 text-xs focus:border-lime-500">
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
            <div class="relative z-10 max-w-sm space-y-3">
              <span class="inline-block px-2.5 py-0.5 rounded-full bg-lime-500/20 border border-lime-500/40 text-lime-400 text-[9px] font-extrabold uppercase">
                ${b.badge}
              </span>
              <h3 class="text-xl sm:text-2xl font-black text-white leading-tight uppercase">
                ${b.title.replace(/\n/g, '<br>')}
              </h3>
              <p class="text-slate-300 text-[11px] line-clamp-3 leading-relaxed">
                ${b.subtitle}
              </p>
              <div class="flex items-center gap-2 pt-2">
                <span class="px-3 py-1.5 rounded-lg bg-lime-500 text-black font-extrabold text-[10px]">
                  ${b.btn1Text}
                </span>
                <span class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold text-[10px]">
                  ${b.btn2Text}
                </span>
              </div>
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

// Update field helper
window.updateBannerField = function(bannerId, field, value) {
  const banners = getBanners();
  const banner = banners.find(b => b.id === bannerId);
  if (banner) {
    banner[field] = value;
    saveBanners(banners);
    renderBannersEditor();
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

// Handle file upload -> Base64
window.handleBannerImageUpload = function(bannerId, inputEl) {
  if (inputEl.files && inputEl.files[0]) {
    const file = inputEl.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const banners = getBanners();
      const banner = banners.find(b => b.id === bannerId);
      if (banner) {
        banner.image = dataUrl;
        saveBanners(banners);
        renderBannersEditor();
        alert("¡Imagen cargada exitosamente para el banner!");
      }
    };
    reader.readAsDataURL(file);
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

        <div class="w-full h-36 rounded-xl bg-gradient-to-br ${p.color || 'from-slate-800 to-slate-950'} flex items-center justify-center mb-3 relative overflow-hidden">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">` : `<i class="${p.icon || 'fa-solid fa-dumbbell'} text-5xl text-white drop-shadow"></i>`}
          <span class="absolute top-2 left-2 bg-black/70 text-lime-400 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded">
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

      const products = getProducts();
      const p = products.find(item => item.id === id);
      if (p) {
        p.name = name;
        p.category = category;
        p.price = price;
        p.badge = badge;
        p.desc = desc;
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
    addBtn.addEventListener('click', () => addModal.classList.remove('hidden'));
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
        image: "",
        status: "disponible"
      };

      products.unshift(newProd);
      saveProducts(products);
      renderProductsEditor();
      addForm.reset();
      addModal.classList.add('hidden');
      alert(`¡Producto "${name}" agregado con éxito a la tienda!`);
    });
  }
}

// ==========================================
// 8. GLOBAL RENDER & INIT
// ==========================================

function renderAllAdminSections() {
  renderMembersAndFinances();
  renderBannersEditor();
  renderProductsEditor();
}

document.addEventListener('DOMContentLoaded', () => {
  initAdminLogin();
  checkAdminAuth();

  if (localStorage.getItem('caf_admin_logged') === 'true') {
    renderAllAdminSections();
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
  }
});
