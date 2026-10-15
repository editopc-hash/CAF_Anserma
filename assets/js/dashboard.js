/**
 * CAF - Centro de Acondicionamiento Físico & Centro de Entrenamiento Víctor Zamorano
 * Anserma, Caldas | User Dashboard & Authentication State
 */

// Default Demo User Profile
const DEFAULT_USER = {
  id: "CAF-USR-2026-089",
  name: "Carlos Andrés Ramírez",
  email: "carlos.ramirez@caf.com",
  phone: "312 456 7890",
  cedula: "1.053.840.123",
  confaCategory: "A",
  goal: "Pérdida de peso & Definición",
  initialWeight: 85.0,
  currentWeight: 78.4,
  targetWeight: 74.0,
  height: 175,
  membershipPlan: "Confa Categoría A",
  membershipPrice: 55000,
  paymentMethod: "Nequi",
  paymentMethodDetails: "Nequi terminada en 4589",
  balanceDue: 0,
  nextPaymentDate: "2026-10-28",
  membershipStatus: "Activo (Al día)",
  weightLogs: [
    { date: "01 Sep 2026", weight: 85.0 },
    { date: "08 Sep 2026", weight: 84.1 },
    { date: "15 Sep 2026", weight: 82.8 },
    { date: "22 Sep 2026", weight: 81.5 },
    { date: "29 Sep 2026", weight: 80.2 },
    { date: "06 Oct 2026", weight: 79.1 },
    { date: "13 Oct 2026", weight: 78.4 }
  ],
  paymentHistory: [
    { id: "REC-2026-104", date: "28 Sep 2026", concept: "Mensualidad CAF - Confa Cat A", amount: 55000, method: "Nequi", status: "Aprobado" },
    { id: "REC-2026-078", date: "28 Ago 2026", concept: "Mensualidad CAF - Confa Cat A", amount: 55000, method: "Nequi", status: "Aprobado" },
    { id: "REC-2026-042", date: "28 Jul 2026", concept: "Mensualidad CAF - Confa Cat A", amount: 55000, method: "Efectivo Taquilla", status: "Aprobado" },
    { id: "REC-2026-015", date: "28 Jun 2026", concept: "Matrícula e Inscripción Convenio", amount: 20000, method: "Daviplata", status: "Aprobado" }
  ],
  assignedRoutine: {
    title: "Programa Reducción de Peso & Hipertrofia Funcional",
    trainer: "Víctor Zamorano",
    days: [
      {
        day: "Lunes - Empuje (Pecho, Hombro y Tríceps)",
        items: [
          { name: "Press de banca plano con mancuernas", sets: "4x12", done: true },
          { name: "Press inclinado en multipower", sets: "4x10", done: true },
          { name: "Elevaciones laterales para deltoides", sets: "4x15", done: false },
          { name: "Fondos en paralelas o máquina asistida", sets: "3x12", done: false },
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
          { name: "Hip Thrust con barra", sets: "4x12", done: false },
          { name: "Curl femoral en máquina", sets: "4x15", done: false },
          { name: "WOD Funcional de alta intensidad", sets: "15 min", done: false }
        ]
      }
    ]
  },
  assignedDiet: {
    calories: "2,150 kcal",
    protein: "160g",
    carbs: "190g",
    fats: "55g",
    waterLiters: "3.2 Litros al día",
    notes: "Plan enfocado en reducción de grasa manteniendo masa muscular. Acompañamiento por instructores de sala CAF Anserma.",
    meals: [
      {
        meal: "Desayuno (7:00 AM)",
        desc: "3 huevos revueltos con tomate y cebolla, 1 arepa pequeña campesina sin mantequilla, café sin azúcar o con stevia, 1 porción de fruta (papaya o manzana)."
      },
      {
        meal: "Media Mañana (10:30 AM)",
        desc: "1 yogur griego natural sin azúcar + 1 puñado de frutos secos (almendras/maní sin sal)."
      },
      {
        meal: "Almuerzo (1:00 PM)",
        desc: "150g de pechuga a la plancha o carne magra, 1 taza de arroz blanco o papa al vapor, abundante ensalada verde con aceite de oliva y limón."
      },
      {
        meal: "Pre-Entreno / Snack (4:30 PM)",
        desc: "1 batido de Proteína Whey CAF con agua + 1 banano o avena en hojuelas."
      },
      {
        meal: "Cena (8:00 PM)",
        desc: "1 lata de atún en agua o 130g de tilapia a la plancha, vegetales salteados (brócoli, zanahoria, calabacín) y 1 taza de té caliente."
      }
    ]
  }
};

// Global dashboard state
let currentUser = null;
let weightChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initUserSession();
});

function initUserSession() {
  const isSessionActive = localStorage.getItem('caf_session_active') === 'true';
  if (isSessionActive) {
    const stored = localStorage.getItem('caf_current_user');
    try {
      currentUser = JSON.parse(stored);
    } catch (e) {
      currentUser = null;
    }
  } else {
    currentUser = null;
    localStorage.removeItem('caf_current_user');
  }

  // Check if we are on dashboard.html
  if (document.getElementById('dashboard-app')) {
    checkDashboardAuth();
  }
}

function checkDashboardAuth() {
  const overlay = document.getElementById('dashboard-login-overlay');
  const mainView = document.getElementById('dashboard-main-view');

  if (!currentUser) {
    if (overlay) overlay.classList.remove('hidden');
    if (mainView) mainView.classList.add('hidden');
  } else {
    if (overlay) overlay.classList.add('hidden');
    if (mainView) mainView.classList.remove('hidden');
    renderDashboard();
    setupDashboardEvents();
  }
}

window.loginAsDemoSocio = function() {
  localStorage.setItem('caf_session_active', 'true');
  currentUser = { ...DEFAULT_USER };
  localStorage.setItem('caf_current_user', JSON.stringify(currentUser));
  checkDashboardAuth();
};

// ==========================================
// RENDER COMPLETE DASHBOARD
// ==========================================
function renderDashboard() {
  if (!currentUser) return;

  // 1. Header & Welcome
  const userNameEl = document.getElementById('dash-user-name');
  const userCategoryEl = document.getElementById('dash-user-category');
  const userPlanEl = document.getElementById('dash-user-plan');
  const userCedulaEl = document.getElementById('dash-user-cedula');

  if (userNameEl) userNameEl.textContent = currentUser.name;
  if (userCategoryEl) userCategoryEl.textContent = `Confa Cat ${currentUser.confaCategory}`;
  if (userPlanEl) userPlanEl.textContent = currentUser.membershipPlan;
  if (userCedulaEl) userCedulaEl.textContent = `CC: ${currentUser.cedula}`;

  // 2. Metrics (Peso inicial, actual, bajado)
  const initialWeightEl = document.getElementById('dash-initial-weight');
  const currentWeightEl = document.getElementById('dash-current-weight');
  const weightDiffEl = document.getElementById('dash-weight-diff');
  const weightProgressEl = document.getElementById('dash-weight-progress');
  const bmiEl = document.getElementById('dash-bmi-metric');

  if (initialWeightEl) initialWeightEl.textContent = `${currentUser.initialWeight} kg`;
  if (currentWeightEl) currentWeightEl.textContent = `${currentUser.currentWeight} kg`;

  const diff = (currentUser.initialWeight - currentUser.currentWeight).toFixed(1);
  if (weightDiffEl) {
    if (diff > 0) {
      weightDiffEl.innerHTML = `<span class="text-emerald-400 font-extrabold"><i class="fa-solid fa-arrow-trend-down mr-1"></i>-${diff} kg</span> <span class="text-xs text-slate-400 font-normal">bajados</span>`;
    } else if (diff < 0) {
      weightDiffEl.innerHTML = `<span class="text-amber-400 font-extrabold"><i class="fa-solid fa-arrow-trend-up mr-1"></i>+${Math.abs(diff)} kg</span> <span class="text-xs text-slate-400 font-normal">ganados</span>`;
    } else {
      weightDiffEl.innerHTML = `<span class="text-slate-300 font-bold">Sin cambios</span>`;
    }
  }

  // Target progress percentage
  const totalTargetDiff = currentUser.initialWeight - currentUser.targetWeight;
  const currentDiff = currentUser.initialWeight - currentUser.currentWeight;
  let progressPct = 0;
  if (totalTargetDiff > 0) {
    progressPct = Math.min(100, Math.max(0, Math.round((currentDiff / totalTargetDiff) * 100)));
  }
  if (weightProgressEl) {
    weightProgressEl.style.width = `${progressPct}%`;
    const progressTextEl = document.getElementById('dash-progress-pct-text');
    if (progressTextEl) progressTextEl.textContent = `${progressPct}% hacia tu meta (${currentUser.targetWeight} kg)`;
  }

  // BMI Calculation
  if (bmiEl && currentUser.height) {
    const hMeters = currentUser.height / 100;
    const bmi = (currentUser.currentWeight / (hMeters * hMeters)).toFixed(1);
    let bmiLabel = "Normal";
    let bmiColor = "text-emerald-400";
    if (bmi < 18.5) { bmiLabel = "Bajo peso"; bmiColor = "text-amber-400"; }
    else if (bmi >= 25 && bmi < 30) { bmiLabel = "Sobrepeso leve"; bmiColor = "text-yellow-400"; }
    else if (bmi >= 30) { bmiLabel = "Obesidad"; bmiColor = "text-rose-400"; }

    bmiEl.innerHTML = `<span class="${bmiColor} font-black">${bmi}</span> <span class="text-xs text-slate-400">(${bmiLabel})</span>`;
  }

  // 3. Balance Due / Ver cuánto debe
  const balanceDueEl = document.getElementById('dash-balance-due');
  const balanceBadgeEl = document.getElementById('dash-balance-badge');
  const nextPaymentDateEl = document.getElementById('dash-next-payment-date');
  const payNowBtn = document.getElementById('dash-pay-now-btn');

  if (balanceDueEl) {
    balanceDueEl.textContent = `$${currentUser.balanceDue.toLocaleString('es-CO')} COP`;
  }
  if (balanceBadgeEl) {
    if (currentUser.balanceDue === 0) {
      balanceBadgeEl.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold";
      balanceBadgeEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Estás al día!`;
      if (payNowBtn) payNowBtn.classList.add('hidden');
    } else {
      balanceBadgeEl.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-bold";
      balanceBadgeEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Cuota pendiente`;
      if (payNowBtn) payNowBtn.classList.remove('hidden');
    }
  }
  if (nextPaymentDateEl) {
    nextPaymentDateEl.textContent = currentUser.nextPaymentDate;
  }

  // 4. Render Chart
  renderWeightChart();

  // 5. Render Routine Checklist
  renderRoutineSection();

  // 6. Render Diet Section
  renderDietSection();

  // 7. Render Payment History
  renderPaymentHistory();

  // 8. Populate Profile Form
  populateProfileForm();

  // 9. Payment Method Details
  const payMethodEl = document.getElementById('dash-current-payment-method');
  if (payMethodEl) {
    payMethodEl.textContent = currentUser.paymentMethodDetails || currentUser.paymentMethod;
  }
}

// ==========================================
// WEIGHT CHART (Chart.js)
// ==========================================
function renderWeightChart() {
  const ctx = document.getElementById('weightHistoryChart');
  if (!ctx) return;

  const labels = currentUser.weightLogs.map(log => log.date);
  const dataPoints = currentUser.weightLogs.map(log => log.weight);

  if (weightChartInstance) {
    weightChartInstance.destroy();
  }

  weightChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Evolución de Peso (kg)',
          data: dataPoints,
          borderColor: '#84cc16',
          backgroundColor: 'rgba(132, 204, 22, 0.12)',
          borderWidth: 3,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: '#84cc16',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7
        },
        {
          label: `Meta (${currentUser.targetWeight} kg)`,
          data: Array(labels.length).fill(currentUser.targetWeight),
          borderColor: 'rgba(249, 115, 22, 0.6)',
          borderDash: [6, 6],
          borderWidth: 2,
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#94a3b8',
            font: { family: 'Plus Jakarta Sans', size: 12 }
          }
        },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#84cc16',
          bodyColor: '#fff',
          borderColor: '#334155',
          borderWidth: 1,
          padding: 10
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8', font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8', font: { size: 11 } }
        }
      }
    }
  });
}

// ==========================================
// ROUTINE CHECKLIST
// ==========================================
function renderRoutineSection() {
  const container = document.getElementById('dash-routine-container');
  if (!container || !currentUser.assignedRoutine) return;

  const routine = currentUser.assignedRoutine;

  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div>
        <h4 class="text-white font-extrabold text-lg">${routine.title}</h4>
        <p class="text-xs text-slate-400">Diseñado por: <span class="text-lime-400 font-bold">${routine.trainer}</span></p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="window.openExerciseLibrary()" class="text-xs text-lime-400 hover:text-black hover:bg-lime-500 px-3 py-1.5 bg-lime-500/10 border border-lime-500/30 rounded-xl transition flex items-center gap-1.5 font-bold shadow-sm">
          <i class="fa-solid fa-book-open"></i> Biblioteca (1,324 Ejercicios)
        </button>
        <button onclick="window.resetRoutineChecklist()" class="text-xs text-slate-400 hover:text-white px-2.5 py-1.5 bg-slate-800 rounded-xl transition">
          <i class="fa-solid fa-arrows-rotate mr-1"></i> Reiniciar
        </button>
      </div>
    </div>
    <div class="space-y-4">
      ${routine.days.map((d, dIdx) => `
        <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
          <h5 class="text-sm font-bold text-lime-400 mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-calendar-check"></i> ${d.day}
          </h5>
          <div class="space-y-2">
            ${d.items.map((item, itemIdx) => `
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition">
                <label class="flex items-center gap-3 cursor-pointer flex-1 min-w-0 pr-2">
                  <input type="checkbox" ${item.done ? 'checked' : ''} onchange="window.toggleRoutineItem(${dIdx}, ${itemIdx})" class="w-4 h-4 rounded text-lime-500 focus:ring-lime-400 bg-slate-900 border-slate-700 shrink-0">
                  <span class="text-xs sm:text-sm font-medium truncate ${item.done ? 'line-through text-slate-500' : 'text-slate-200'}">${item.name}</span>
                </label>
                <div class="flex items-center gap-2 shrink-0">
                  <button type="button" onclick="window.openExerciseGuide('${item.name.replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-lime-500 hover:text-black border border-slate-800 text-slate-300 hover:border-lime-500 text-[11px] font-bold transition flex items-center gap-1.5 shadow-sm" title="Ver animación técnica en GIF y pasos de ejecución">
                    <i class="fa-solid fa-play text-lime-400 text-[9px]"></i>
                    <span class="hidden sm:inline">Técnica</span>
                  </button>
                  <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 ${item.done ? 'text-slate-500' : 'text-lime-400'}">${item.sets}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.toggleRoutineItem = function(dayIndex, itemIndex) {
  if (!currentUser.assignedRoutine) return;
  currentUser.assignedRoutine.days[dayIndex].items[itemIndex].done = !currentUser.assignedRoutine.days[dayIndex].items[itemIndex].done;
  saveUser();
  renderRoutineSection();
};

window.resetRoutineChecklist = function() {
  if (!currentUser.assignedRoutine) return;
  currentUser.assignedRoutine.days.forEach(d => {
    d.items.forEach(i => i.done = false);
  });
  saveUser();
  renderRoutineSection();
};

// ==========================================
// DIET SECTION
// ==========================================
function renderDietSection() {
  const container = document.getElementById('dash-diet-container');
  if (!container || !currentUser.assignedDiet) return;

  const diet = currentUser.assignedDiet;

  container.innerHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
      <div class="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
        <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Calorías meta</span>
        <span class="text-base sm:text-lg font-black text-amber-400">${diet.calories}</span>
      </div>
      <div class="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
        <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Proteína</span>
        <span class="text-base sm:text-lg font-black text-lime-400">${diet.protein}</span>
      </div>
      <div class="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
        <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Carbohidratos</span>
        <span class="text-base sm:text-lg font-black text-cyan-400">${diet.carbs}</span>
      </div>
      <div class="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
        <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Hidratación</span>
        <span class="text-base sm:text-lg font-black text-blue-400">${diet.waterLiters}</span>
      </div>
    </div>

    <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-4">
      <p class="text-xs text-slate-300 italic"><i class="fa-solid fa-quote-left text-lime-400 mr-2"></i>${diet.notes}</p>
    </div>

    <div class="space-y-3">
      ${diet.meals.map(m => `
        <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 hover:border-slate-700 transition">
          <div class="flex items-center justify-between mb-1">
            <h5 class="text-xs font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-utensils text-lime-400"></i> ${m.meal}
            </h5>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">${m.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================
// PAYMENT HISTORY
// ==========================================
function renderPaymentHistory() {
  const tbody = document.getElementById('dash-payment-history-tbody');
  if (!tbody) return;

  tbody.innerHTML = currentUser.paymentHistory.map(rec => `
    <tr class="border-b border-slate-800 hover:bg-slate-900/50 transition">
      <td class="py-3 px-4 font-mono text-xs text-slate-300">${rec.id}</td>
      <td class="py-3 px-4 text-xs text-slate-300">${rec.date}</td>
      <td class="py-3 px-4 text-xs font-medium text-white">${rec.concept}</td>
      <td class="py-3 px-4 text-xs font-bold text-lime-400">$${rec.amount.toLocaleString('es-CO')}</td>
      <td class="py-3 px-4 text-xs text-slate-300">${rec.method}</td>
      <td class="py-3 px-4">
        <span class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <i class="fa-solid fa-check text-[10px]"></i> ${rec.status}
        </span>
      </td>
      <td class="py-3 px-4 text-right">
        <button onclick="window.viewReceipt('${rec.id}')" class="text-xs text-slate-400 hover:text-lime-400 transition" title="Ver comprobante">
          <i class="fa-solid fa-file-invoice"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

window.viewReceipt = function(receiptId) {
  const rec = currentUser.paymentHistory.find(r => r.id === receiptId);
  if (!rec) return;

  const modal = document.getElementById('receipt-modal');
  const details = document.getElementById('receipt-details-content');
  if (!modal || !details) return;

  details.innerHTML = `
    <div class="text-center pb-4 border-b border-slate-800">
      <h3 class="text-xl font-black text-white">CAF Anserma Caldas</h3>
      <p class="text-xs text-slate-400">Centro de Entrenamiento Víctor Zamorano</p>
      <p class="text-xs text-slate-400">Cra 5 # 22-32 Piso 2 (Av. Libertador)</p>
      <p class="text-xs text-lime-400 font-mono mt-1">Comprobante Oficial #${rec.id}</p>
    </div>
    <div class="py-4 space-y-2 text-xs text-slate-300 border-b border-slate-800">
      <div class="flex justify-between"><span>Socio:</span><span class="font-bold text-white">${currentUser.name}</span></div>
      <div class="flex justify-between"><span>Cédula:</span><span>${currentUser.cedula}</span></div>
      <div class="flex justify-between"><span>Convenio:</span><span>Confa Categoría ${currentUser.confaCategory}</span></div>
      <div class="flex justify-between"><span>Fecha de Pago:</span><span>${rec.date}</span></div>
      <div class="flex justify-between"><span>Concepto:</span><span>${rec.concept}</span></div>
      <div class="flex justify-between"><span>Método:</span><span>${rec.method}</span></div>
      <div class="flex justify-between"><span>Estado:</span><span class="text-emerald-400 font-bold">${rec.status}</span></div>
    </div>
    <div class="pt-4 flex justify-between items-center text-sm">
      <span class="font-bold text-white">Total Pagado:</span>
      <span class="font-black text-lg text-lime-400">$${rec.amount.toLocaleString('es-CO')} COP</span>
    </div>
  `;

  modal.classList.remove('hidden');
};

// ==========================================
// PROFILE EDIT FORM
// ==========================================
function populateProfileForm() {
  const form = document.getElementById('dash-profile-form');
  if (!form) return;

  const nameInput = document.getElementById('prof-name');
  const emailInput = document.getElementById('prof-email');
  const phoneInput = document.getElementById('prof-phone');
  const cedulaInput = document.getElementById('prof-cedula');
  const confaInput = document.getElementById('prof-confa');
  const currentWeightInput = document.getElementById('prof-current-weight');
  const initialWeightInput = document.getElementById('prof-initial-weight');
  const targetWeightInput = document.getElementById('prof-target-weight');
  const goalInput = document.getElementById('prof-goal');

  if (nameInput) nameInput.value = currentUser.name;
  if (emailInput) emailInput.value = currentUser.email;
  if (phoneInput) phoneInput.value = currentUser.phone;
  if (cedulaInput) cedulaInput.value = currentUser.cedula;
  if (confaInput) confaInput.value = currentUser.confaCategory;
  if (currentWeightInput) currentWeightInput.value = currentUser.currentWeight;
  if (initialWeightInput) initialWeightInput.value = currentUser.initialWeight;
  if (targetWeightInput) targetWeightInput.value = currentUser.targetWeight;
  if (goalInput) goalInput.value = currentUser.goal;
}

// Setup form submit & action events
function setupDashboardEvents() {
  // Profile form submit
  const profileForm = document.getElementById('dash-profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();

      currentUser.name = document.getElementById('prof-name').value;
      currentUser.email = document.getElementById('prof-email').value;
      currentUser.phone = document.getElementById('prof-phone').value;
      currentUser.cedula = document.getElementById('prof-cedula').value;
      currentUser.confaCategory = document.getElementById('prof-confa').value;
      
      const newWeight = parseFloat(document.getElementById('prof-current-weight').value);
      if (newWeight && newWeight !== currentUser.currentWeight) {
        currentUser.currentWeight = newWeight;
        const today = new Date();
        const dateStr = today.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' });
        currentUser.weightLogs.push({ date: dateStr, weight: newWeight });
      }

      currentUser.initialWeight = parseFloat(document.getElementById('prof-initial-weight').value) || currentUser.initialWeight;
      currentUser.targetWeight = parseFloat(document.getElementById('prof-target-weight').value) || currentUser.targetWeight;
      currentUser.goal = document.getElementById('prof-goal').value;

      saveUser();
      renderDashboard();
      alert("¡Tus datos personales y de progreso han sido actualizados con éxito!");
    });
  }

  // Quick Add Weight Form
  const addWeightForm = document.getElementById('dash-add-weight-form');
  if (addWeightForm) {
    addWeightForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const weightVal = parseFloat(document.getElementById('new-weight-val').value);
      if (!weightVal) return;

      const dateVal = document.getElementById('new-weight-date').value || new Date().toISOString().split('T')[0];
      const parts = dateVal.split('-');
      const formattedDate = `${parts[2]}/${parts[1]}`;

      currentUser.currentWeight = weightVal;
      currentUser.weightLogs.push({ date: formattedDate, weight: weightVal });
      saveUser();
      renderDashboard();
      addWeightForm.reset();
      alert(`¡Nuevo peso de ${weightVal} kg registrado en tu gráfico!`);
    });
  }

  // Change Plan Modal & Action
  const changePlanBtn = document.getElementById('dash-change-plan-btn');
  const changePlanModal = document.getElementById('change-plan-modal');
  const changePlanForm = document.getElementById('change-plan-form');

  if (changePlanBtn && changePlanModal) {
    changePlanBtn.addEventListener('click', () => {
      changePlanModal.classList.remove('hidden');
    });
  }

  if (changePlanForm) {
    changePlanForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedPlan = document.querySelector('input[name="new_plan_selection"]:checked')?.value;
      if (!selectedPlan) return;

      const plansCatalog = {
        'confa_a': { name: "Confa Categoría A", price: 55000 },
        'confa_b': { name: "Confa Categoría B", price: 80000 },
        'confa_c': { name: "Confa Categoría C", price: 119000 },
        'particular': { name: "Particular Mensual", price: 131000 },
        'pareja': { name: "Plan Pareja Dúo CAF", price: 220000 },
        'trimestral': { name: "Plan Trimestral VIP", price: 350000 },
        'tiquetera': { name: "Tiquetera 12 Días Flexible", price: 75000 }
      };

      const newPlan = plansCatalog[selectedPlan];
      if (newPlan) {
        currentUser.membershipPlan = newPlan.name;
        currentUser.membershipPrice = newPlan.price;
        saveUser();
        renderDashboard();
        if (changePlanModal) changePlanModal.classList.add('hidden');
        alert(`¡Tu plan se ha cambiado exitosamente a: ${newPlan.name} ($${newPlan.price.toLocaleString('es-CO')} COP)!`);
      }
    });
  }

  // Modify Payment Method Modal
  const modifyPaymentBtn = document.getElementById('dash-modify-payment-btn');
  const modifyPaymentModal = document.getElementById('modify-payment-modal');
  const modifyPaymentForm = document.getElementById('modify-payment-form');

  if (modifyPaymentBtn && modifyPaymentModal) {
    modifyPaymentBtn.addEventListener('click', () => {
      modifyPaymentModal.classList.remove('hidden');
    });
  }

  if (modifyPaymentForm) {
    modifyPaymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const method = document.querySelector('input[name="new_payment_method"]:checked')?.value;
      const details = document.getElementById('payment-method-custom-details')?.value || '';

      if (method) {
        currentUser.paymentMethod = method;
        currentUser.paymentMethodDetails = details ? `${method} (${details})` : method;
        saveUser();
        renderDashboard();
        if (modifyPaymentModal) modifyPaymentModal.classList.add('hidden');
        alert(`¡Forma de pago actualizada a: ${currentUser.paymentMethodDetails}!`);
      }
    });
  }

  // Pay Now Modal / Simulación de Pago
  const payNowBtn = document.getElementById('dash-pay-now-btn');
  const payModal = document.getElementById('pay-now-modal');
  const confirmPayBtn = document.getElementById('confirm-payment-action-btn');

  if (payNowBtn && payModal) {
    payNowBtn.addEventListener('click', () => {
      payModal.classList.remove('hidden');
    });
  }

  if (confirmPayBtn) {
    confirmPayBtn.addEventListener('click', () => {
      const recNumber = `REC-2026-${Math.floor(100 + Math.random() * 900)}`;
      const todayStr = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
      const amountPaid = currentUser.balanceDue > 0 ? currentUser.balanceDue : currentUser.membershipPrice;

      currentUser.paymentHistory.unshift({
        id: recNumber,
        date: todayStr,
        concept: `Mensualidad ${currentUser.membershipPlan}`,
        amount: amountPaid,
        method: currentUser.paymentMethod,
        status: "Aprobado"
      });

      currentUser.balanceDue = 0;
      currentUser.membershipStatus = "Activo (Al día)";
      
      // Extend next payment date by 30 days
      const d = new Date();
      d.setDate(d.getDate() + 30);
      currentUser.nextPaymentDate = d.toISOString().split('T')[0];

      saveUser();
      renderDashboard();
      if (payModal) payModal.classList.add('hidden');
      alert(`¡Pago de $${amountPaid.toLocaleString('es-CO')} COP registrado con éxito! Recibo: ${recNumber}. Estás al día.`);
    });
  }

  // Logout action
  const logoutBtn = document.getElementById('dash-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm("¿Deseas cerrar tu sesión?")) {
        localStorage.removeItem('caf_current_user');
        window.location.href = "index.html";
      }
    });
  }

  // Reset Demo Data
  const resetDemoBtn = document.getElementById('dash-reset-demo-btn');
  if (resetDemoBtn) {
    resetDemoBtn.addEventListener('click', () => {
      if (confirm("¿Restaurar datos de demostración de Carlos Andrés Ramírez?")) {
        currentUser = { ...DEFAULT_USER };
        saveUser();
        renderDashboard();
        alert("Datos restaurados a valores de demostración iniciales.");
      }
    });
  }
}

function saveUser() {
  localStorage.setItem('caf_current_user', JSON.stringify(currentUser));
}
