[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/8V_b4q_9)

# Entrega final DSAW:

## URL Frontend: https://front-rouge-two.vercel.app/pages/login/landing

## URL Backend: https://back-zeta-cyan.vercel.app

## Nombre estudiante 1: Esteban Sequeda Henao (0000328378)

## Nombre estudiante 2: Sofy Alejandra Prada Murillo (0000336152)

# MODIFIQUE ESTE README AGREGANDO LA INFORMACIÓN QUE CONSIDERE PERTINENTE

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

## Contacto

**Esteban Sequeda Henao**  
- Código: 0000328378  
- Email: estebansehe@unisabana.edu.co

**Sofy Alejandra Prada Murillo**  
- Código: 0000336152  
- Email: sofyprmu@unisabana.edu.co

---

# Reglas

- Recuerde subir su código antes del 17 de noviembre de 2025, 11:59PM

- No se adminten entregas tardías

- Si la entrega final no está desplegada, no se califica

- Si hay modificaciones luego de la fecha establecida, no se calificará la parte técnica

---

**Universidad de La Sabana** - Proyecto académico
