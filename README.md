# MoveTogether2 Backend

API REST para la aplicación de viajes compartidos MoveTogether. Proporciona endpoints para autenticación, gestión de usuarios, vehículos, viajes y notificaciones.

## Estado del Proyecto

**Versión:** 1.0.0  
**Estado:** En producción  
**Despliegue:** [https://back-zeta-cyan.vercel.app](https://back-zeta-cyan.vercel.app)

## Requisitos / Dependencias

### Lenguaje y Versión
- **Node.js:** 20.x o superior
- **TypeScript:** 5.4.0 o superior

### Librerías y Frameworks
- **@vercel/node:** ^4.0.0 - Runtime para Vercel Serverless Functions
- **firebase-admin:** ^12.5.0 - SDK de Firebase para operaciones del servidor
- **@whiskeysockets/baileys:** ^6.7.21 - Cliente de WhatsApp Web
- **qrcode-terminal:** ^0.12.0 - Generación de códigos QR en terminal
- **dotenv:** ^17.2.3 - Gestión de variables de entorno

### Servicios Externos
- **Firebase (Firestore):** Base de datos NoSQL
- **Firebase Authentication:** Autenticación de usuarios
- **Vercel:** Plataforma de despliegue serverless

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Esteban9167/MoveTogether2-back.git
cd MoveTogether2-back
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Compilar TypeScript

```bash
npm run build
```

## Uso Básico

### Desarrollo Local

```bash
# Compilar y ejecutar servidor de desarrollo
npm run dev

# O ejecutar solo el servidor (después de compilar)
npm run serve
```

El servidor estará disponible en `http://localhost:3001`

### Despliegue en Vercel

```bash
# Desarrollo con Vercel CLI
npm run serve:vercel

# Despliegue a producción
vercel --prod
```

### Ejemplo de Uso

**Health Check:**
```bash
curl http://localhost:3001/api/health
```

**Respuesta:**
```json
{
  "ok": true,
  "timestamp": "2025-11-17T22:00:46.905Z"
}
```

**Obtener información del usuario autenticado:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:3001/api/me
```

## Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Firebase
FIREBASE_PROJECT_ID=tu-proyecto-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@tu-proyecto.iam.gserviceaccount.com

# CORS
CORS_ORIGIN=https://front-rouge-two.vercel.app,http://localhost:3000

# Puerto (opcional, por defecto 3001)
PORT=3001

# WhatsApp (opcional, para funcionalidad de mensajería)
WHATSAPP_ENABLED=true
```

### Archivo de Configuración Vercel

El proyecto incluye `vercel.json` para configuración de despliegue:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/**/*.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ]
}
```

## Estructura del Proyecto

```
back/
├── api/                    # Endpoints de la API
│   ├── auth/              # Autenticación (login, register, verify)
│   ├── users/             # Gestión de usuarios
│   │   └── phone.ts       # Obtener número de teléfono
│   ├── trips.ts           # Gestión de viajes
│   ├── vehicles.ts        # Gestión de vehículos
│   ├── notifications.ts  # Sistema de notificaciones
│   ├── whatsapp.ts        # Integración con WhatsApp
│   ├── me.ts              # Información del usuario actual
│   └── health.ts          # Health check
├── src/                   # Código fuente TypeScript
│   ├── auth/              # Lógica de autenticación
│   ├── services/          # Servicios externos (WhatsApp)
│   ├── utils/             # Utilidades (CORS, etc.)
│   ├── firebase.ts        # Configuración de Firebase
│   └── email.ts           # Servicio de correo electrónico
├── dist/                  # Código compilado (generado)
├── types/                 # Definiciones de tipos TypeScript
├── server.js              # Servidor de desarrollo local
├── tsconfig.json          # Configuración de TypeScript
├── package.json           # Dependencias y scripts
└── vercel.json            # Configuración de Vercel
```

### Descripción de Carpetas Principales

- **`api/`**: Contiene todos los endpoints de la API. Cada archivo exporta un handler que procesa las peticiones HTTP.
- **`src/`**: Código fuente compartido entre endpoints (autenticación, servicios, utilidades).
- **`dist/`**: Código JavaScript compilado desde TypeScript (no se debe editar directamente).
- **`types/`**: Definiciones de tipos TypeScript para librerías sin tipos.

## Endpoints Disponibles

### Autenticación
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/verify` - Verificar token
- `POST /api/auth/google` - Autenticación con Google
- `POST /api/auth/reset-password` - Restablecer contraseña

### Usuarios
- `GET /api/me` - Obtener información del usuario actual
- `GET /api/users/phone?firebase_uid=...` - Obtener número de teléfono

### Viajes
- `GET /api/trips` - Listar viajes (con filtros opcionales)
- `POST /api/trips` - Crear nuevo viaje
- `PATCH /api/trips` - Aplicar a viaje, aceptar pasajero, cancelar, etc.

### Vehículos
- `GET /api/vehicles` - Listar vehículos del usuario
- `POST /api/vehicles` - Registrar nuevo vehículo
- `DELETE /api/vehicles/:id` - Eliminar vehículo

### Notificaciones
- `GET /api/notifications` - Obtener notificaciones del usuario

### WhatsApp
- `GET /api/whatsapp` - Inicializar sesión de WhatsApp
- `POST /api/whatsapp` - Enviar mensaje por WhatsApp

### Utilidades
- `GET /api/health` - Health check del servidor

## Tests

Actualmente no hay tests automatizados implementados. Para agregar tests:

```bash
# Instalar dependencias de testing
npm install --save-dev jest @types/jest ts-jest

# Ejecutar tests (cuando estén implementados)
npm test
```

## Contribución

### Reglas para Contribuir

1. **Ramas:** Crear una rama desde `main` para cada feature o fix
   ```bash
   git checkout -b feature/nombre-del-feature
   ```

2. **Estilo de Código:**
   - Usar TypeScript estricto
   - Seguir las convenciones de nombres de archivos (kebab-case para archivos)
   - Documentar funciones complejas con comentarios JSDoc

3. **Commits:**
   - Mensajes descriptivos en español
   - Formato: `tipo: descripción breve`
   - Ejemplo: `feat: agregar endpoint para obtener teléfono de usuario`

4. **Pull Requests:**
   - Describir claramente los cambios realizados
   - Incluir ejemplos de uso si aplica
   - Asegurar que el código compila sin errores (`npm run build`)

5. **Issues:**
   - Usar etiquetas apropiadas (bug, feature, enhancement)
   - Incluir pasos para reproducir en caso de bugs

## Licencia

Este proyecto es de uso académico. Todos los derechos reservados.

## Contacto / Autoría

### Desarrolladores

**Esteban Sequeda Henao**  
- Código: 0000328378  
- Email: estebansehe@unisabana.edu.co

**Sofy Alejandra Prada Murillo**  
- Código: 0000336152  
- Email: sofyprmu@unisabana.edu.co

### Soporte

- **Frontend desplegado:** [https://front-rouge-two.vercel.app/pages/login/landing](https://front-rouge-two.vercel.app/pages/login/landing)
- **Backend desplegado:** [https://back-zeta-cyan.vercel.app](https://back-zeta-cyan.vercel.app)
- **Issues:** Crear un issue en el repositorio de GitHub para reportar problemas o sugerencias

---

**Universidad de La Sabana** - Proyecto académico

