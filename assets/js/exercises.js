/**
 * CAF - Centro de Acondicionamiento Físico & Centro de Entrenamiento Víctor Zamorano
 * Anserma, Caldas | Exercises Dataset Integration (1,324 Exercises with GIFs & Spanish Guide)
 * Source: https://github.com/hasaneyldrm/exercises-dataset
 */

(function() {
  'use strict';

  const MEDIA_BASE_URL = "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/";
  const FALLBACK_MEDIA_URL = "https://cdn.jsdelivr.net/gh/hasaneyldrm/exercises-dataset@main/";
  const DATASET_URL = "assets/data/exercises.json";

  let exercisesCache = null;
  let isLoadingDataset = false;
  let datasetPromise = null;

  // Spanish mappings for muscles and equipment
  const BODY_PART_ES = {
    "waist": "Abdomen & Core",
    "upper legs": "Piernas (Cuádriceps / Femoral)",
    "back": "Espalda & Dorsales",
    "lower legs": "Pantorrillas / Gemelos",
    "chest": "Pecho / Pectorales",
    "upper arms": "Brazos (Bíceps / Tríceps)",
    "cardio": "Cardio & Acondicionamiento",
    "shoulders": "Hombros / Deltoides",
    "lower arms": "Antebrazos & Agarre",
    "neck": "Cuello"
  };

  const EQUIPMENT_ES = {
    "body weight": "Peso Corporal / Calistenia",
    "barbell": "Barra Libre",
    "dumbbell": "Mancuernas",
    "cable": "Poleas / Cables",
    "leverage machine": "Máquina de Palanca",
    "smith machine": "Máquina Smith",
    "kettlebell": "Pesa Rusa (Kettlebell)",
    "band": "Banda Elástica",
    "resistance band": "Banda de Resistencia",
    "stability ball": "Balón Fitball",
    "medicine ball": "Balón Medicinal",
    "ez barbell": "Barra Z",
    "sled machine": "Trineo (Prowler)",
    "wheel roller": "Rueda Abdominal",
    "stationary bike": "Bicicleta Estática",
    "rope": "Cuerda",
    "tire": "Llanta de Fuerza",
    "trap bar": "Barra Hexagonal",
    "elliptical machine": "Elíptica",
    "stepmill machine": "Escaladora",
    "assisted": "Máquina Asistida",
    "weighted": "Con Lastre / Peso Extra"
  };

  const SPANISH_SYNONYMS = {
    "press de banca plano con barra": "barbell bench press",
    "press de banca con barra": "barbell bench press",
    "press de banca plano": "barbell bench press",
    "press banca": "barbell bench press",
    "press plano con mancuernas": "dumbbell bench press",
    "press inclinado con mancuernas": "dumbbell incline bench press",
    "press inclinado con barra": "barbell incline bench press",
    "press declinado con mancuernas": "dumbbell decline bench press",
    "aperturas en poleas (cruces)": "cable standing fly",
    "aperturas en poleas": "cable standing fly",
    "aperturas con mancuernas": "dumbbell fly",
    "press militar sentado": "barbell seated shoulder press",
    "press militar con mancuernas": "dumbbell seated shoulder press",
    "press militar": "barbell standing overhead press",
    "elevaciones laterales": "dumbbell lateral raise",
    "elevaciones frontales": "dumbbell front raise",
    "pajaros o elevaciones posteriores": "dumbbell rear lateral raise",
    "fondos en barras paralelas": "chest dip",
    "fondos para triceps": "bench dip",
    "fondos": "chest dip",
    "extension de triceps en polea con cuerda": "cable triceps pushdown",
    "extension de triceps": "cable triceps pushdown",
    "press frances": "barbell lying triceps extension",
    "patada de triceps con mancuerna": "dumbbell kickback",
    "curl de biceps con barra z": "ez barbell curl",
    "curl de biceps con mancuernas": "dumbbell curl",
    "curl martillo": "dumbbell hammer curl",
    "curl concentrado": "dumbbell concentration curl",
    "curl en banco predicador": "ez barbell preacher curl",
    "dominadas o jalon al pecho abierto": "pull-up",
    "dominadas pronas": "pull-up",
    "dominadas supinas (chin-ups)": "chin-up",
    "dominadas": "pull-up",
    "jalon al pecho agarre prono": "cable lat pulldown",
    "jalon al pecho": "cable lat pulldown",
    "jalón al pecho": "cable lat pulldown",
    "remo con barra 90°": "barbell bent over row",
    "remo con barra": "barbell bent over row",
    "remo con mancuerna a una mano": "dumbbell one arm bent-over row",
    "remo en polea baja": "cable seated row",
    "remo en punta (barra t)": "t-bar row",
    "peso muerto rumano": "barbell romanian deadlift",
    "peso muerto convencional": "barbell deadlift",
    "peso muerto": "barbell deadlift",
    "sentadilla libre o goblet": "barbell full squat",
    "sentadilla libre con barra": "barbell full squat",
    "sentadilla goblet": "dumbbell goblet squat",
    "sentadilla": "barbell full squat",
    "sentadillas": "barbell full squat",
    "prensa de piernas 45°": "sled 45° leg press",
    "prensa inclinada": "sled 45° leg press",
    "prensa": "sled 45° leg press",
    "hip thrust o puente de gluteo": "barbell hip thrust",
    "hip thrust": "barbell hip thrust",
    "zancadas dinamicas con mancuernas": "dumbbell lunge",
    "zancadas con mancuernas": "dumbbell lunge",
    "zancadas": "dumbbell lunge",
    "desplantes": "dumbbell lunge",
    "extension de cuadriceps en maquina": "lever leg extension",
    "extension de pierna": "lever leg extension",
    "curl femoral acostado en maquina": "lever lying leg curl",
    "curl femoral sentado": "lever seated leg curl",
    "curl femoral": "lever lying leg curl",
    "elevacion de talones": "standing calf raise",
    "elevacion de pantorrillas": "standing calf raise",
    "pantorrilla en maquina": "standing calf raise",
    "plancha abdominal isometrica": "plank",
    "plancha abdominal": "plank",
    "plancha": "plank",
    "rueda abdominal": "wheel roller",
    "kettlebell swing en zona funcional": "kettlebell two arm swing",
    "kettlebell swing": "kettlebell two arm swing",
    "burpees": "burpee",
    "toes to bar (pies a la barra)": "hanging leg raise",
    "caminadora": "stationary bike",
    "caminadora con inclinacion": "stationary bike"
  };

  /**
   * Asynchronously load dataset with caching in memory and IndexedDB
   */
  async function loadExercises() {
    if (exercisesCache && exercisesCache.length > 0) return exercisesCache;

    if (datasetPromise) return datasetPromise;

    datasetPromise = (async () => {
      // 1. Check IndexedDB if CafDB is available
      if (window.CafDB && typeof window.CafDB.get === 'function') {
        try {
          const stored = await window.CafDB.get('caf_exercises_dataset');
          if (stored && Array.isArray(stored) && stored.length > 500) {
            exercisesCache = stored;
            return exercisesCache;
          }
        } catch (e) {}
      }

      // 2. Fetch from local assets/data/exercises.json
      try {
        const resp = await fetch(DATASET_URL);
        if (resp.ok) {
          const data = await resp.json();
          if (Array.isArray(data) && data.length > 0) {
            exercisesCache = data;
            if (window.CafDB && typeof window.CafDB.set === 'function') {
              try { window.CafDB.set('caf_exercises_dataset', data); } catch (e) {}
            }
            return exercisesCache;
          }
        }
      } catch (err) {
        console.warn("Could not load local exercises.json, attempting online fallback...", err);
      }

      // 3. Fallback: try raw github directly
      try {
        const resp = await fetch("https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/data/exercises.json");
        if (resp.ok) {
          const raw = await resp.json();
          const trimmed = raw.map(x => ({
            id: x.id,
            name: x.name,
            body_part: x.body_part,
            equipment: x.equipment,
            target: x.target,
            gif: x.gif_url,
            img: x.image,
            inst: (x.instructions && x.instructions.es ? x.instructions.es.join(" ") : (x.instructions && x.instructions.en ? x.instructions.en.join(" ") : ""))
          }));
          exercisesCache = trimmed;
          return exercisesCache;
        }
      } catch (err) {
        console.error("All exercise dataset fetch attempts failed.", err);
      }

      return [];
    })();

    return datasetPromise;
  }

  /**
   * Smart finder for an exercise by name, query or id
   */
  function findExercise(query, list) {
    if (!query || !list || list.length === 0) return null;

    const qClean = query.toString().trim().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // 1. Direct ID match
    let found = list.find(ex => ex.id === query || ex.id === query.toString().padStart(4, '0'));
    if (found) return found;

    // 2. Exact match in synonyms
    if (SPANISH_SYNONYMS[qClean]) {
      const syn = SPANISH_SYNONYMS[qClean];
      found = list.find(ex => ex.name.toLowerCase() === syn);
      if (found) return found;
    }

    // Check partial matches in synonyms
    for (const [esKey, enVal] of Object.entries(SPANISH_SYNONYMS)) {
      if (qClean.includes(esKey) || esKey.includes(qClean)) {
        found = list.find(ex => ex.name.toLowerCase() === enVal || ex.name.toLowerCase().includes(enVal));
        if (found) return found;
      }
    }

    // 3. Search by English name exact/contains
    found = list.find(ex => ex.name.toLowerCase() === qClean);
    if (found) return found;

    found = list.find(ex => ex.name.toLowerCase().includes(qClean));
    if (found) return found;

    // 4. Token-based word search in name
    const tokens = qClean.split(/[\s,()/-]+/).filter(t => t.length > 2);
    if (tokens.length > 0) {
      let bestScore = 0;
      let bestMatch = null;
      for (const ex of list) {
        let score = 0;
        const exName = ex.name.toLowerCase();
        const exInst = (ex.inst || "").toLowerCase();
        tokens.forEach(tok => {
          if (exName.includes(tok)) score += 3;
          if (exInst.includes(tok)) score += 1;
        });
        if (score > bestScore) {
          bestScore = score;
          bestMatch = ex;
        }
      }
      if (bestScore >= 3) return bestMatch;
    }

    // 5. Fallback: match by body part or default bench press
    return list[0];
  }

  /**
   * Ensure modal DOM exists in the document
   */
  function ensureModalsDOM() {
    if (document.getElementById('caf-exercise-guide-modal')) return;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <!-- ================= MODAL DE TÉCNICA Y ANIMACIÓN GIF ================= -->
      <div id="caf-exercise-guide-modal" class="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md hidden flex items-center justify-center p-3 sm:p-5">
        <div class="bg-slate-950 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col">
          
          <!-- Header Modal -->
          <div class="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl bg-lime-500/20 text-lime-400 border border-lime-500/30 flex items-center justify-center text-sm font-bold">
                <i class="fa-solid fa-dumbbell"></i>
              </span>
              <div>
                <h3 class="text-white font-black text-sm sm:text-base leading-tight" id="ex-modal-title">Guía de Técnica</h3>
                <span class="text-[10px] text-lime-400 font-bold uppercase tracking-wider" id="ex-modal-category">Músculo Principal</span>
              </div>
            </div>
            <button onclick="window.closeExerciseGuide()" class="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition">
              <i class="fa-solid fa-xmark text-base"></i>
            </button>
          </div>

          <!-- Body Modal -->
          <div class="p-6 space-y-6">
            
            <!-- Video / Animation GIF Showcase -->
            <div class="relative w-full aspect-video sm:h-72 rounded-2xl bg-black border border-slate-800 flex items-center justify-center overflow-hidden group shadow-inner">
              <img id="ex-modal-gif" src="" alt="Demostración técnica" class="max-h-full max-w-full object-contain mx-auto" />
              <div id="ex-modal-gif-spinner" class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center gap-2 text-lime-400 text-xs font-bold">
                <i class="fa-solid fa-spinner fa-spin text-2xl"></i>
                <span>Cargando animación técnica...</span>
              </div>
              <span class="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-400 border border-slate-800">
                <i class="fa-solid fa-repeat text-lime-400 mr-1"></i> Bucle en vivo
              </span>
            </div>

            <!-- Tags Badges: Target Muscle & Equipment -->
            <div class="grid grid-cols-2 gap-3">
              <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span class="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1">
                  <i class="fa-solid fa-bullseye text-lime-400 mr-1"></i> Músculo Objetivo:
                </span>
                <span id="ex-modal-target" class="text-xs sm:text-sm font-bold text-white uppercase">Pectorales</span>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span class="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1">
                  <i class="fa-solid fa-wrench text-amber-400 mr-1"></i> Equipo Requerido:
                </span>
                <span id="ex-modal-equipment" class="text-xs sm:text-sm font-bold text-white uppercase">Barra Libre</span>
              </div>
            </div>

            <!-- Step by Step Instructions in Spanish -->
            <div class="space-y-2">
              <h4 class="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                <i class="fa-solid fa-list-check text-lime-400"></i> Pasos para la Ejecución Correcta:
              </h4>
              <div id="ex-modal-instructions" class="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                <!-- Injected via JS -->
              </div>
            </div>

            <!-- Coach Zamorano Recommendations -->
            <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-lime-500/10 border border-amber-500/30 flex items-start gap-3">
              <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-base font-black">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div class="space-y-1">
                <h5 class="text-xs font-black text-amber-400 uppercase tracking-wider">Consejo de Sala CAF · Víctor Zamorano:</h5>
                <p class="text-xs text-slate-300 leading-normal">
                  Controla la fase excéntrica (bajada de 2 a 3 segundos). Inhala al descender y exhala con potencia al realizar el empuje. Si sientes molestias en la articulación, consulta de inmediato al instructor en sala.
                </p>
              </div>
            </div>

          </div>

          <!-- Footer Actions -->
          <div class="sticky bottom-0 z-20 bg-slate-950/95 backdrop-blur-sm border-t border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
            <button onclick="window.openExerciseLibrary()" class="text-xs font-bold text-slate-300 hover:text-lime-400 flex items-center gap-1.5 transition">
              <i class="fa-solid fa-magnifying-glass"></i> Explorar biblioteca (1,324 ejercicios)
            </button>
            <button onclick="window.closeExerciseGuide()" class="px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-xl shadow-lg transition">
              Entendido / Cerrar
            </button>
          </div>

        </div>
      </div>

      <!-- ================= MODAL EXPLORADOR COMPLETO (1,324 EJERCICIOS) ================= -->
      <div id="caf-exercise-library-modal" class="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md hidden flex items-center justify-center p-3 sm:p-5">
        <div class="bg-slate-950 border border-slate-800 rounded-3xl max-w-4xl w-full h-[90vh] overflow-hidden shadow-2xl relative flex flex-col">
          
          <!-- Library Header & Search -->
          <div class="bg-slate-950 border-b border-slate-800 p-5 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <span class="w-8 h-8 rounded-xl bg-lime-500 flex items-center justify-center text-black font-black text-sm">CAF</span>
                  Biblioteca Oficial de Ejercicios
                </h3>
                <p class="text-xs text-slate-400">1,324 ejercicios con técnica paso a paso y animación en bucle</p>
              </div>
              <button onclick="window.closeExerciseLibrary()" class="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition">
                <i class="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            <!-- Search Input -->
            <div class="relative">
              <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
              <input type="text" id="caf-lib-search-input" oninput="window.filterExerciseLibrary()" placeholder="Buscar por nombre, músculo (pecho, pierna, bíceps) o equipo (mancuerna, barra)..." class="w-full bg-slate-900 border border-slate-800 text-white rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm focus:border-lime-500 focus:outline-none">
            </div>

            <!-- Category Pills Filter -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar" id="caf-lib-filter-pills">
              <button onclick="window.setExerciseCategoryFilter('all')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-lime-500 text-black transition whitespace-nowrap" data-cat="all">Todos (1,324)</button>
              <button onclick="window.setExerciseCategoryFilter('chest')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 transition whitespace-nowrap" data-cat="chest">Pecho</button>
              <button onclick="window.setExerciseCategoryFilter('back')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 transition whitespace-nowrap" data-cat="back">Espalda</button>
              <button onclick="window.setExerciseCategoryFilter('upper legs')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 transition whitespace-nowrap" data-cat="upper legs">Piernas</button>
              <button onclick="window.setExerciseCategoryFilter('upper arms')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 transition whitespace-nowrap" data-cat="upper arms">Brazos</button>
              <button onclick="window.setExerciseCategoryFilter('shoulders')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 transition whitespace-nowrap" data-cat="shoulders">Hombros</button>
              <button onclick="window.setExerciseCategoryFilter('waist')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 transition whitespace-nowrap" data-cat="waist">Abdomen</button>
              <button onclick="window.setExerciseCategoryFilter('cardio')" class="lib-cat-btn px-3 py-1.5 rounded-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 transition whitespace-nowrap" data-cat="cardio">Cardio</button>
            </div>
          </div>

          <!-- Exercises Scrollable Grid -->
          <div class="flex-1 overflow-y-auto p-5" id="caf-lib-results-container">
            <div class="text-center py-12 text-slate-400 text-sm">
              <i class="fa-solid fa-spinner fa-spin text-lime-400 text-2xl mb-2"></i>
              <p>Cargando catálogo completo de ejercicios...</p>
            </div>
          </div>

          <!-- Counter footer -->
          <div class="bg-slate-950 border-t border-slate-800 px-5 py-3 flex items-center justify-between text-xs text-slate-400">
            <span id="caf-lib-counter">Mostrando ejercicios...</span>
            <span class="text-slate-500 font-mono">Dataset oficial LogPress / GymVisual</span>
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(wrapper);
  }

  /**
   * Open the detailed exercise guide with GIF and instructions
   */
  window.openExerciseGuide = async function(queryOrName) {
    ensureModalsDOM();

    const modal = document.getElementById('caf-exercise-guide-modal');
    const titleEl = document.getElementById('ex-modal-title');
    const catEl = document.getElementById('ex-modal-category');
    const targetEl = document.getElementById('ex-modal-target');
    const equipEl = document.getElementById('ex-modal-equipment');
    const instEl = document.getElementById('ex-modal-instructions');
    const gifEl = document.getElementById('ex-modal-gif');
    const spinnerEl = document.getElementById('ex-modal-gif-spinner');

    if (!modal) return;

    modal.classList.remove('hidden');
    spinnerEl.classList.remove('hidden');
    gifEl.src = "";

    titleEl.textContent = queryOrName || "Cargando ejercicio...";
    catEl.textContent = "Buscando en biblioteca...";
    instEl.innerHTML = `<p class="italic text-slate-400">Obteniendo instrucciones técnicas y animación...</p>`;

    const list = await loadExercises();
    const ex = findExercise(queryOrName, list);

    if (!ex) {
      spinnerEl.classList.add('hidden');
      titleEl.textContent = queryOrName || "Ejercicio no encontrado";
      instEl.innerHTML = `
        <p class="text-amber-400 font-bold mb-2">No se encontró una animación exacta para "${queryOrName}".</p>
        <p class="text-xs text-slate-300">Puedes buscar ejercicios similares en la biblioteca completa usando el botón inferior.</p>
      `;
      return;
    }

    // Set Data
    titleEl.textContent = (queryOrName && queryOrName.length > 3) ? queryOrName : ex.name.toUpperCase();
    
    const bodyPartTranslated = BODY_PART_ES[ex.body_part] || ex.body_part;
    const equipTranslated = EQUIPMENT_ES[ex.equipment] || ex.equipment;

    catEl.textContent = `${bodyPartTranslated.toUpperCase()} · ${ex.name.toUpperCase()}`;
    targetEl.textContent = ex.target ? ex.target.toUpperCase() : bodyPartTranslated.toUpperCase();
    equipEl.textContent = equipTranslated.toUpperCase();

    // Format instructions nicely into bulleted steps
    let instructionsHtml = "";
    if (ex.inst && ex.inst.trim()) {
      // Split by sentences or step numbers
      const steps = ex.inst.split(/(?<=\.)\s+/).filter(s => s.trim().length > 5);
      if (steps.length > 1) {
        instructionsHtml = steps.map((step, i) => `
          <div class="flex items-start gap-2.5">
            <span class="w-5 h-5 rounded-full bg-lime-500/20 text-lime-400 border border-lime-500/30 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">${i + 1}</span>
            <p class="text-slate-200 text-xs sm:text-sm leading-relaxed">${step}</p>
          </div>
        `).join('');
      } else {
        instructionsHtml = `<p class="text-slate-200 text-xs sm:text-sm leading-relaxed">${ex.inst}</p>`;
      }
    } else {
      instructionsHtml = `<p class="text-slate-400 italic text-xs">Instrucciones generales: Realiza el movimiento de forma controlada sin arquear la espalda y manteniendo una cadencia de 2 segundos en bajada y 1 segundo en subida.</p>`;
    }
    instEl.innerHTML = instructionsHtml;

    // Load GIF
    const gifSrc = MEDIA_BASE_URL + (ex.gif || `videos/${ex.id}.gif`);
    
    gifEl.onload = () => spinnerEl.classList.add('hidden');
    gifEl.onerror = () => {
      // Try fallback URL
      gifEl.src = FALLBACK_MEDIA_URL + (ex.gif || `videos/${ex.id}.gif`);
      gifEl.onload = () => spinnerEl.classList.add('hidden');
      gifEl.onerror = () => {
        spinnerEl.innerHTML = `<span class="text-rose-400 text-xs"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Imagen no disponible temporalmente</span>`;
      };
    };

    gifEl.src = gifSrc;
  };

  window.closeExerciseGuide = function() {
    const modal = document.getElementById('caf-exercise-guide-modal');
    if (modal) modal.classList.add('hidden');
  };

  /**
   * Full Exercise Library Browser
   */
  let currentCategoryFilter = 'all';

  window.openExerciseLibrary = async function(preselectCategory) {
    ensureModalsDOM();
    const modal = document.getElementById('caf-exercise-library-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    if (preselectCategory) {
      window.setExerciseCategoryFilter(preselectCategory);
    } else {
      window.filterExerciseLibrary();
    }
  };

  window.closeExerciseLibrary = function() {
    const modal = document.getElementById('caf-exercise-library-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.setExerciseCategoryFilter = function(cat) {
    currentCategoryFilter = cat;
    document.querySelectorAll('.lib-cat-btn').forEach(btn => {
      if (btn.dataset.cat === cat) {
        btn.classList.remove('bg-slate-900', 'text-slate-300');
        btn.classList.add('bg-lime-500', 'text-black');
      } else {
        btn.classList.add('bg-slate-900', 'text-slate-300');
        btn.classList.remove('bg-lime-500', 'text-black');
      }
    });
    window.filterExerciseLibrary();
  };

  window.filterExerciseLibrary = async function() {
    const container = document.getElementById('caf-lib-results-container');
    const counter = document.getElementById('caf-lib-counter');
    const searchInput = document.getElementById('caf-lib-search-input');
    if (!container) return;

    const query = (searchInput?.value || "").trim().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const list = await loadExercises();
    if (!list || list.length === 0) {
      container.innerHTML = `<div class="text-center py-10 text-rose-400 text-sm">Error cargando dataset de ejercicios.</div>`;
      return;
    }

    let filtered = list;

    // Filter by Category
    if (currentCategoryFilter && currentCategoryFilter !== 'all') {
      filtered = filtered.filter(x => (x.body_part || "").toLowerCase() === currentCategoryFilter);
    }

    // Filter by Search Query
    if (query) {
      // Check synonym translation first
      const syn = SPANISH_SYNONYMS[query];
      filtered = filtered.filter(x => {
        const nameClean = (x.name || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const targetClean = (x.target || "").toLowerCase();
        const bodyClean = (x.body_part || "").toLowerCase();
        const equipClean = (x.equipment || "").toLowerCase();
        const instClean = (x.inst || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return nameClean.includes(query) ||
               (syn && nameClean.includes(syn)) ||
               targetClean.includes(query) ||
               bodyClean.includes(query) ||
               equipClean.includes(query) ||
               instClean.includes(query);
      });
    }

    if (counter) counter.textContent = `Mostrando ${filtered.length} de ${list.length} ejercicios`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 text-slate-400">
          <i class="fa-solid fa-magnifying-glass text-3xl mb-3 text-slate-600"></i>
          <p class="text-base font-bold text-white">No se encontraron ejercicios</p>
          <p class="text-xs text-slate-400 mt-1">Prueba buscando en inglés o español con términos como "bench", "squat", "press", "curl" o "pecho".</p>
        </div>
      `;
      return;
    }

    // Render first 60 for performance, with infinite scroll or instant click
    const displayList = filtered.slice(0, 60);

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        ${displayList.map(x => {
          const bodyLabel = BODY_PART_ES[x.body_part] || x.body_part;
          const equipLabel = EQUIPMENT_ES[x.equipment] || x.equipment;
          const imgSrc = MEDIA_BASE_URL + (x.img || `images/${x.id}.jpg`);

          return `
            <div onclick="window.openExerciseGuide('${x.id}')" class="bg-slate-900/90 border border-slate-800 hover:border-lime-500/50 rounded-2xl p-3.5 flex items-center gap-3.5 cursor-pointer transition transform hover:-translate-y-0.5 shadow-md group">
              <div class="w-16 h-16 rounded-xl bg-black border border-slate-800 overflow-hidden shrink-0 flex items-center justify-center relative">
                <img src="${imgSrc}" alt="${x.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition" onerror="this.src='assets/images/banner/nuevo-banner-caf.jpg'" />
                <span class="absolute inset-0 bg-lime-500/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-lime-400 text-xs">
                  <i class="fa-solid fa-play"></i>
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-xs font-black text-white uppercase truncate group-hover:text-lime-400 transition">${x.name}</h4>
                <span class="text-[10px] font-bold text-lime-400 uppercase tracking-wider block mt-0.5">${bodyLabel}</span>
                <span class="text-[10px] text-slate-400 truncate block mt-0.5"><i class="fa-solid fa-dumbbell text-[9px] mr-1"></i>${equipLabel}</span>
              </div>
              <button class="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-lime-500 group-hover:text-black text-slate-400 flex items-center justify-center text-xs transition shrink-0">
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          `;
        }).join('')}
      </div>
      ${filtered.length > 60 ? `
        <div class="text-center py-6">
          <p class="text-xs text-slate-400">Mostrando los primeros 60 resultados más relevantes. Escribe en la búsqueda para afinar tu ejercicio.</p>
        </div>
      ` : ''}
    `;
  };

  // Preload dataset quietly in the background after page load
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        loadExercises().catch(() => {});
      }, 1500);
    });
  }

})();
