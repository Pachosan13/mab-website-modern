# Estructura Uniforme para Perfiles de Abogados

Para que cada abogado tenga un perfil uniforme y profesional, necesitamos la siguiente información estructurada:

## 📋 Información Requerida por Abogado

### 1. **Información Básica** (Ya existe)
- ✅ Nombre completo
- ✅ Cargo/Puesto
- ✅ Foto profesional (formato: JPG/PNG, alta resolución)
- ✅ Email
- ✅ Teléfono
- ✅ LinkedIn (opcional)

### 2. **Estudios/Educación** (Ya existe como `educacion_lista`)
Formato sugerido:
```
- Universidad, Año – Título obtenido
- Universidad, Año – Especialización/Maestría/Doctorado
- Universidad, Año – Certificación/Diplomado
```

**Ejemplo:**
- Universidad de Panamá, 1976 – Licenciado en Derecho y Ciencias Políticas
- Universidad de Georgetown, 2004 – Estrategia y Acciones para promover la Transparencia

### 3. **Experiencia Profesional** (NUEVO - Necesario agregar)
Formato sugerido:
```
años_experiencia: número (ej: 45)
experiencia_destacada: [
  "Descripción breve de logro o experiencia relevante",
  "Otro logro o experiencia relevante"
]
```

**Ejemplo:**
```javascript
años_experiencia: 45,
experiencia_destacada: [
  "Fundador de MAB en 1979, consolidando la firma como referencia en derecho comercial",
  "Notario Público Duodécimo de Circuito Notarial de Panamá (2004–2009)",
  "Director de Asesoría Legal del Instituto de Recursos Hidráulicos (1990)"
]
```

### 4. **Idiomas** (NUEVO - Necesario agregar)
Formato sugerido:
```
idiomas: [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Fluido" },
  { idioma: "Italiano", nivel: "Intermedio" }
]
```

**Ejemplo:**
```javascript
idiomas: [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Fluido" }
]
```

### 5. **Áreas de Práctica** (Ya existe como `areas_practica_lista`)
Formato sugerido: Lista de 3-5 áreas principales
```
areas_practica_lista: [
  "Derecho Corporativo y Empresarial",
  "Derecho Tributario y Fiscal",
  "Planificación Patrimonial"
]
```

### 6. **Biografía** (Ya existe)
- `bio_corta`: 1-2 párrafos (para tarjetas)
- `bio_extendida`: Biografía completa (para página de perfil)

---

## 📝 Template de Datos Completo

```typescript
{
  id: "nombre-id",
  slug: "nombre-completo-slug",
  foto_abogado: "/nombre-foto.jpg",
  nombre_completo: "Nombre Completo",
  cargo: "Cargo en MAB",
  email: "email@mab.com.pa",
  linkedin_url: "https://linkedin.com/in/...",
  telefono: "+507 297-5566",
  
  // Biografías
  bio_corta: "Breve descripción profesional (1-2 párrafos)",
  bio_extendida: "Biografía completa y detallada...",
  
  // Estudios
  educacion_lista: [
    "Universidad, Año – Título",
    "Universidad, Año – Especialización"
  ],
  
  // NUEVO: Experiencia
  años_experiencia: 25,
  experiencia_destacada: [
    "Logro o experiencia relevante 1",
    "Logro o experiencia relevante 2"
  ],
  
  // NUEVO: Idiomas
  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "Fluido" }
  ],
  
  // Áreas de práctica
  areas_practica_lista: [
    "Área 1",
    "Área 2",
    "Área 3"
  ]
}
```

---

## 🎯 Campos que Necesitas Recopilar

Para cada abogado, necesitas:

1. ✅ **Estudios** - Lista completa de títulos, especializaciones, maestrías
2. ⚠️ **Años de Experiencia** - Número total de años ejerciendo
3. ⚠️ **Experiencia Destacada** - 2-4 logros o experiencias más relevantes
4. ⚠️ **Idiomas** - Lista de idiomas que habla y nivel (Nativo/Fluido/Intermedio/Básico)
5. ✅ **Áreas de Práctica** - Lista de especialidades (3-5 áreas principales)

---

## 📌 Notas Importantes

- **Fotos**: Todas deben tener el mismo formato y calidad profesional
- **Consistencia**: Todos los campos deben seguir el mismo formato
- **Idiomas**: Usar niveles estándar: "Nativo", "Fluido", "Intermedio", "Básico"
- **Experiencia**: Enfocarse en logros concretos y medibles

