# CAF (Centro de Acondicionamiento Físico) - Centro de Entrenamiento Víctor Zamorano 🏋️‍♂️

Sitio web moderno, responsivo y dinámico para el **CAF Anserma Caldas (Centro de Entrenamiento Víctor Zamorano)**, ubicado en el Piso 2 de la Carrera 5 # 22 - 32 (Avenida Libertador), Anserma, Caldas.

Diseñado y optimizado para **GitHub Pages** (100% estático, sin requerir servidor backend ni configuración de compilación).

---

## 🔑 Credenciales de Acceso

### 🛡️ 1. Panel de Administración
- **Acceso:** [admin.html](admin.html) o mediante el botón *"Admin"* en la barra de navegación de [index.html](index.html).
- Requiere credenciales de administrador autorizadas.

#### Funcionalidades del Administrador:
1. **Control de Finanzas e Inscritos:**
   - Visualización de ingresos mensuales desglosados: **Mensualidades Gym**, **Compras Tienda (Ropa/Suplementos)**, **Otros Conceptos (Inscripciones/Pases día)** y **Total Mensual Recaudado**.
   - Tabla completa de socios inscritos con cálculo dinámico de:
     - Fecha en que se le vence el plan.
     - Días vencidos del plan (*ej. "Vencido hace 5 días"* en rojo con ícono de alerta).
     - Días restantes (*ej. "Al día (15 días restantes)"* o *"Por vencer (2 días)"*).
   - Botón directo de **WhatsApp con mensaje pre-redactado** para cobranza y recordatorio de pago a socios vencidos o por vencer.
   - Botón para **Renovar 30 días** la membresía con un solo clic.
   - Formulario para **Inscribir nuevos socios**.
2. **Editor de Banners (Personalización y Opacidad):**
   - Subida de imágenes personalizadas (soporta carga directa desde el computador con vista previa inmediata).
   - Habilitar y deshabilitar banners individuales.
   - **Control deslizante de opacidad del banner (slider de 0% a 100%):** permite ajustar la transparencia del sombreado oscuro desde transparente total hasta oscuro intenso, con vista previa en tiempo real.
   - Edición de textos (Título, Subtítulo, Badge) y botones de acción (Texto y Enlaces).
3. **Editor de Tienda (Ropa Deportiva y Suplementos):**
   - Agregar nuevos productos con precio en COP, categoría, badge promocional y descripción.
   - Editar precios, descripciones y nombres de productos existentes.
   - Modificar estado de stock (Disponible / Agotado) con un clic.
   - Eliminar productos del catálogo.

---

### 👤 2. Usuario Socio (Portal de Alumno)
- **Usuario:** `carlos.ramirez@caf.com` (o botón de 1 clic *"Entrar como Socio Demo"* en el modal de login).
- **Acceso:** [dashboard.html](dashboard.html).
- **Funcionalidades:**
  - Control de peso inicial (85 kg) vs actual (78.4 kg) y cálculo de -6.6 kg bajados.
  - Gráfica interactiva de evolución de peso semanal (**Chart.js**) con registro de nuevas pesadas.
  - Ver cuánto debe (saldo al día $0 COP) y próximo corte.
  - Su rutina asignada (checklist interactivo por días con notas de Víctor Zamorano).
  - Su plan de dieta y nutrición con calculadora de hidratación diaria.
  - Actualizar datos personales y cambiar de plan (Confa A, B, C, Pareja, Particular).
  - Consultar historial de pagos y ver recibo oficial imprimible.

---

## 🚀 Características del Sitio Público (`index.html`)

1. **Banners de Alto Impacto (Hero Slider Dinámico):**
   - Sincronizado en tiempo real con el panel administrador (refleja cambios de imagen, textos y nivel de opacidad).
   - Incluye los banners oficiales de la sede Anserma.
2. **Galería Fotográfica:**
   - 8 imágenes en alta resolución con filtros por disciplina y visor **Lightbox**.
3. **Tu Rutina Personalizada:**
   - Generador inteligente con plan detallado de ejercicios, series, repeticiones y descansos.
4. **Horarios y Clases Grupales:**
   - Insignia en tiempo real con horario local (*¡Abierto ahora!* / *Cerrado*).
   - Programación de Rumbaterapia, Krav Maga (Defensa personal) y CrossFit WODs.
5. **Tienda Oficial:**
   - Venta de ropa deportiva y suplementos con carrito de compras deslizante y checkout a WhatsApp.
6. **Planes y Tarifas Completas:**
   - Convenio Confa (Cat A: $55.000, Cat B: $80.000, Cat C: $119.000, Particular: $131.000, Fin de semana desde $15.000).
   - Plan Pareja Dúo ($220.000) y Tiquetera 12 Días ($75.000).
   - Calculadora de ahorro Confa.
7. **Convenio Confa:**
   - Explicación del subsidio y proceso de verificación con cédula.
8. **Contáctenos y Ubicación:**
   - Cra 5 # 22-32 Piso 2 (Avenida Libertador), Anserma, Caldas.
   - Formulario de contacto directo a WhatsApp.
9. **Botón Flotante de WhatsApp y Flechita para Subir:**
   - Botón de WhatsApp en la esquina inferior derecha.
   - **Flechita flotante encima del icono de WhatsApp:** al hacer clic, sube suavemente hasta la parte inicial de la web.

---

## 📂 Estructura de Archivos

```
d:\antigrativy\CAF\
│
├── index.html                   # Página principal (Landing, Banners, Galería, Tienda, Planes, Confa, Contacto)
├── admin.html                   # Panel Administrador de Control y Gestión
├── dashboard.html               # Panel Socio (Progreso, Gráfica, Pagos, Dieta, Rutina)
├── README.md                    # Documentación y guía de despliegue
│
├── assets/
│   ├── css/
│   │   └── styles.css           # Estilos personalizados, botón subir, modo oscuro y animaciones
│   ├── js/
│   │   ├── app.js               # Lógica de la web principal, slider, carrito y flechita de scroll
│   │   ├── admin.js             # Lógica del panel administrador (Finanzas, días vencidos, editor banners y tienda)
│   │   └── dashboard.js         # Lógica del dashboard de socio (Chart.js, pagos y checklist)
│   └── images/
│       ├── banner/              # Banners oficiales
│       └── galeria/             # 8 Fotografías de la sede
│
└── imágenes/                    # Carpeta original provista por el usuario
```

---

## 🌐 Cómo Subir a GitHub y Activar GitHub Pages

1. Abre tu terminal en la carpeta del proyecto:
   ```bash
   git add .
   git commit -m "Agregar panel de administrador, editor de banners, tienda y botón subir"
   ```

2. Si aún no has enlazado tu repositorio remoto de GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/caf-anserma.git
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - En tu repositorio de GitHub ve a **Settings** > **Pages**.
   - En **Build and deployment > Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**. En 1 a 2 minutos estará disponible en `https://TU-USUARIO.github.io/caf-anserma/`.

---

*CAF Anserma Caldas - Centro de Entrenamiento Víctor Zamorano.*
