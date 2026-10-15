# CAF (Centro de Acondicionamiento Físico) - Centro de Entrenamiento Víctor Zamorano 🏋️‍♂️

Sitio web moderno, responsivo y dinámico para el **CAF Anserma Caldas (Centro de Entrenamiento Víctor Zamorano)**, ubicado en el Piso 2 de la Carrera 5 # 22 - 32 (Avenida Libertador), Anserma, Caldas.

Diseñado y optimizado para **GitHub Pages** (100% estático, sin requerir servidor backend ni configuración de compilación).

---

## 🚀 Características Implementadas

1. **Banners de Alto Impacto (Hero Slider)**:
   - Slider interactivo con autoplay y transiciones suaves con los dos banners oficiales:
     - `assets/images/banner/banner-anserma-cambio.png` (*"En Anserma, tu cambio comienza hoy"*)
     - `assets/images/banner/banner-cambia-cuerpo.png` (*"Cambia tu cuerpo, cambia tu mente"*)
   - Botones CTA directos hacia WhatsApp, planes y generador de rutinas.

2. **Galería Fotográfica Interactiva**:
   - 8 fotografías de alta definición categorizadas: Musculación & Pesas, CrossFit & Calistenia, Rumbaterapia & Clases, Cardio & Reducción, y Plan Pareja.
   - Filtros dinámicos por disciplina.
   - Modal Lightbox para visualización en pantalla completa con navegación por teclado y flechas.

3. **Tu Rutina Personalizada (Generador Inteligente)**:
   - Creador interactivo según:
     - Objetivo (Reducción de peso, Hipertrofia/Masa muscular, CrossFit & Funcional)
     - Nivel actual (Principiante, Intermedio, Avanzado)
     - Días semanales disponibles (3, 4, 5 o 6 días)
   - Generación instantánea de series, repeticiones, descansos y tips nutricionales del entrenador Víctor Zamorano.
   - Posibilidad de guardar la rutina directamente en el Dashboard de socio y consultarla vía WhatsApp.

4. **Horario General y Horario de Clases Grupales**:
   - **Horario General**:
     - Lunes a Viernes: 5:00 AM – 12:00 PM y 2:00 PM – 9:30 PM
     - Sábados: 6:00 AM – 4:00 PM
     - Domingos y Festivos: 7:00 AM – 1:00 PM
   - Indicador en vivo (`¡ABIERTO AHORA!` / `Cerrado en este momento`) calculado en tiempo real según el reloj del dispositivo.
   - Programación de clases por días: Rumbaterapia, Krav Maga (Defensa personal), CrossFit WODs y Musculación guiada.
   - Botón directo de reserva de cupo por WhatsApp.

5. **Tienda Oficial: Ropa Deportiva y Suplementos**:
   - Catálogo de productos: Proteínas Whey, Creatina Monohidratada Creapure, Pre-Entrenos, BCAA, Camisetas Oversize oficiales, Licras de compresión, Tops y Shakers.
   - Filtros por categoría y buscador instantáneo en vivo.
   - Carrito de compras deslizante con cálculo de subtotales en Pesos Colombianos (COP).
   - Botón de checkout que redacta automáticamente el pedido y lo envía formateado a WhatsApp.

6. **Planes y Tarifas Completas (Investigación Confa y Particulares)**:
   - **Convenio Confa**:
     - Categoría A: **$55.000 COP** / mes
     - Categoría B: **$80.000 COP** / mes
     - Categoría C: **$119.000 COP** / mes
     - Particular (No afiliado): **$131.000 COP** / mes
     - Planes Fin de Semana Confa: desde $15.000 a $44.000 COP.
   - **Plan Pareja Dúo CAF**: $220.000 COP ($110.000 COP por persona, ahorro de $42.000 COP).
   - **Tiquetera 12 Días**: $75.000 COP (vigencia flexible de 60 días).
   - **Pase por Día**: $10.000 COP.
   - Calculadora rápida de ahorro Confa interactiva.

7. **Convenio Confa (Sección Exclusiva)**:
   - Explicación detallada del convenio entre Confa Caldas y el CAF Anserma.
   - Requisitos para acceder a la tarifa subsidiada y beneficios para la familia.

8. **Contáctenos & Botón Flotante de WhatsApp**:
   - Formulario de contacto que genera automáticamente un mensaje personalizado hacia WhatsApp.
   - Ubicación exacta: Piso 2 de la Carrera 5 # 22 - 32 (Avenida Libertador), Anserma, Caldas.
   - Botón flotante de WhatsApp siempre visible.

9. **Inicio de Sesión y Dashboard de Socio (`dashboard.html`)**:
   - Persistencia de datos mediante `localStorage`.
   - Incluye cuenta de demostración precargada:
     - **Socio**: Carlos Andrés Ramírez
     - **Cédula**: 1.053.840.123 (Confa Categoría A)
   - Funcionalidades del Dashboard:
     - **Control de peso**: Peso inicial (85.0 kg), actual (78.4 kg) y cálculo de -6.6 kg bajados.
     - **Gráfica de evolución semanal**: Gráfico interactivo con **Chart.js** con meta objetivo y registro de nuevas pesadas en tiempo real.
     - **Ver cuánto debe**: Estado de cuenta al día ($0 COP) o cuota pendiente con simulación de pago.
     - **Su rutina asignada**: Checklist interactivo por días para tachar ejercicios completados.
     - **Su plan de dieta y nutrición**: Desglose calórico, comidas diarias y cálculo de hidratación diaria.
     - **Actualizar datos personales**: Nombre, correo, teléfono, cédula, categoría Confa, peso inicial, actual y meta.
     - **Consultar historial de pagos**: Comprobantes con recibo digital oficial imprimible.
     - **Modificar forma de pago**: Nequi, Daviplata, Tarjeta o Taquilla Confa.
     - **Cambiar plan**: Modal interactivo para cambiar de tarifa inmediatamente.

10. **Listo para Subir a GitHub Pages**:
    - Rutas relativas para todos los recursos (`assets/...`).
    - Nombres de archivos limpios y compatibles con servidores Linux de GitHub.

---

## 📂 Estructura de Archivos

```
d:\antigrativy\CAF\
│
├── index.html                   # Página principal (Landing, Banners, Galería, Tienda, Planes, Confa, Contacto)
├── dashboard.html               # Panel de socio (Progreso, Gráfica, Pagos, Dieta, Rutina, Datos personales)
├── README.md                    # Documentación y guía de despliegue
│
├── assets/
│   ├── css/
│   │   └── styles.css           # Estilos personalizados, modo oscuro, fuentes Teko y Plus Jakarta
│   ├── js/
│   │   ├── app.js               # Lógica de la página principal (Slider, Carrito, Galería, Rutinas)
│   │   └── dashboard.js         # Lógica del dashboard de usuario (Chart.js, LocalStorage, Pagos)
│   └── images/
│       ├── banner/              # Banners web optimizados
│       └── galeria/             # 8 Fotografías de las instalaciones
│
└── imágenes/                    # Carpeta original provista por el usuario
```

---

## 🌐 Cómo Subir a GitHub y Activar GitHub Pages

1. Abre tu terminal en la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Sitio web oficial CAF Anserma Caldas"
   ```

2. Crea un repositorio en tu cuenta de GitHub (ejemplo: `caf-anserma`) y enlázalo:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/caf-anserma.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**:
   - En tu repositorio de GitHub, haz clic en **Settings** (Configuración).
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - En **Source** (Origen), selecciona:
     - Branch: `main`
     - Folder: `/ (root)`
   - Haz clic en **Save** (Guardar).
   - ¡En 1 a 2 minutos tu sitio estará en vivo en: `https://TU-USUARIO.github.io/caf-anserma/`!

---

*Desarrollado con dedicación para el CAF Anserma Caldas - Centro de Entrenamiento Víctor Zamorano.*
