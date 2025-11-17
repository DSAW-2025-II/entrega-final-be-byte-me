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

---

**Universidad de La Sabana** - Proyecto académico

