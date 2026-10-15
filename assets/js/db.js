// CAF - High Capacity IndexedDB Storage Engine
// Solves browser 5MB localStorage quota limit by providing unlimited storage for photos and data.

(function(window) {
  'use strict';

  const DB_NAME = 'CAF_STORAGE_DB';
  const DB_VERSION = 1;
  const STORE_NAME = 'caf_store';

  let dbInstance = null;
  let dbReadyPromise = null;

  function initDB() {
    if (dbReadyPromise) return dbReadyPromise;

    dbReadyPromise = new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB no soportado en este navegador. Usando localStorage.');
        resolve(null);
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = function(e) {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };

      request.onsuccess = function(e) {
        dbInstance = e.target.result;
        resolve(dbInstance);
      };

      request.onerror = function(e) {
        console.warn('Error al abrir IndexedDB:', e);
        resolve(null);
      };
    });

    return dbReadyPromise;
  }

  window.CafDB = {
    // Get item from IndexedDB
    get: async function(key) {
      try {
        const db = await initDB();
        if (!db) return null;
        return new Promise((resolve) => {
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const req = store.get(key);
          req.onsuccess = () => resolve(req.result || null);
          req.onerror = () => resolve(null);
        });
      } catch (e) {
        return null;
      }
    },

    // Set item in IndexedDB
    set: async function(key, val) {
      try {
        const db = await initDB();
        if (!db) return false;
        return new Promise((resolve) => {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          const req = store.put(val, key);
          req.onsuccess = () => resolve(true);
          req.onerror = () => resolve(false);
        });
      } catch (e) {
        return false;
      }
    },

    // Delete item from IndexedDB
    delete: async function(key) {
      try {
        const db = await initDB();
        if (!db) return false;
        return new Promise((resolve) => {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          const req = store.delete(key);
          req.onsuccess = () => resolve(true);
          req.onerror = () => resolve(false);
        });
      } catch (e) {
        return false;
      }
    },

    // Clean legacy bloated localStorage data from earlier uncompressed tests
    purgeBloatedLocalStorage: function() {
      let cleaned = 0;
      const keys = ['caf_banners', 'caf_products', 'caf_gallery'];
      keys.forEach(k => {
        try {
          const raw = localStorage.getItem(k);
          if (raw && raw.length > 250000) { // Greater than 250KB means old uncompressed Base64
            cleaned++;
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
              // Save full copy to IndexedDB first
              window.CafDB.set(k, parsed);

              // Lighten localStorage version by replacing huge base64 with default assets
              const light = parsed.map(item => {
                const clone = Object.assign({}, item);
                if (clone.image && clone.image.startsWith('data:image') && clone.image.length > 80000) {
                  if (k === 'caf_banners') {
                    clone.image = clone.id === 1 ? 'assets/images/banner/banner-final-01.png' : 'assets/images/banner/banner-final-02.png';
                  } else if (k === 'caf_products') {
                    clone.image = 'assets/images/tienda/proteina-whey-100.jpg';
                  } else if (k === 'caf_gallery') {
                    clone.image = `assets/images/galeria/galeria-${clone.id || 1}.jpg`;
                  }
                }
                return clone;
              });
              localStorage.setItem(k, JSON.stringify(light));
            }
          }
        } catch(err) {}
      });
      return cleaned;
    }
  };

  // Auto initialize and perform initial migration / cleanup
  initDB().then(async () => {
    // 1. Purge legacy bloated strings in localStorage to free up browser quota
    window.CafDB.purgeBloatedLocalStorage();

    // 2. Synchronize current localStorage data into IndexedDB
    ['caf_banners', 'caf_products', 'caf_gallery', 'caf_members', 'caf_finances'].forEach(async (key) => {
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const existingInDB = await window.CafDB.get(key);
          if (!existingInDB) {
            await window.CafDB.set(key, parsed);
          }
        } catch(e) {}
      }
    });
  });

})(window);
