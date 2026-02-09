# Order Service (Practice Project)

Proyecto simple de practica con **Node.js** y **NestJS**.

## Objetivo

- Practicar estructura basica de una API con NestJS.
- Probar flujo de desarrollo asistido por agentes (programacion con agentes).

## Aviso de uso

Este repositorio es de **uso exclusivo para pruebas y practica**.
No esta pensado para produccion ni para manejar datos reales.

## Requisitos

- Node.js 20+
- npm
- Docker + Docker Compose (opcional)

## Entornos

- `development`:
  - Dockerizado localmente con `docker-compose.yml`.
  - Usa `src/app` + `src/context` y repositorio `prisma`.
  - Variables en `.env.development`.
- `test`:
  - Fuerza `ORDER_REPOSITORY_DRIVER=in-memory`.
  - No depende de PostgreSQL.
  - Variables de referencia en `.env.test`.
- `production`:
  - Fuera de este repositorio (infra separada).

## Comandos utiles

```bash
# instalar dependencias
npm install

# ejecutar en desarrollo
npm run start:dev

# tests unitarios
npm run test

# tests e2e
npm run test:e2e

# lint
npm run lint
```

## Persistencia real (PostgreSQL + Prisma)

1. Levantar base local:

```bash
docker compose up -d db
```

2. Configurar entorno de desarrollo:

```bash
cp .env.example .env.development
```

3. Ejecutar migración y generar cliente:

```bash
npm run prisma:migrate:dev
npm run prisma:generate
```

4. Ejecutar API en local:

```bash
npm run start:dev
```

## Docker Compose (API + DB)

```bash
npm run start:dev:docker
```

## Nota

Si agregas configuraciones o variables de entorno, no subas secretos al repositorio.
