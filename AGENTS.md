# Repository Guidelines (NestJS Technical Sandbox)

## Project Goal
This repository is a **NestJS backend technical sandbox**.
The main objective is to build and iterate on backend patterns with clear architecture and practical implementation quality.

Code changes should prioritize:
- separation of concerns
- explicit boundaries
- testability
- clear technical reasoning

---

## Architectural Principles (STRICT)

### Layering (must be respected)
- **Framework Layer (`src/app`)**
  - Controllers
  - DTOs
  - NestJS modules/services and framework wiring
- **Application Layer (`src/context/*/application`)**
  - Use Cases
  - Orchestration logic
- **Domain Layer (`src/context/*/domain`)**
  - Entities
  - Value Objects
  - Business rules
  - Repository interfaces
- **Infrastructure Adapters (`src/context/*/infrastructure`)**
  - Repository implementations
  - Persistence/integration adapters

Rules:
- `src/app` **must not** contain business rules.
- Domain **must not** depend on NestJS, DTOs, or `src/app`.
- Application layer **must not** contain HTTP or framework concerns.
- Controllers **must not** contain business logic.
- Use cases inside `application/` **must not** include `use-case` or `UseCase` in file/class names.
- File and folder names **must** use `kebab-case`.
- Class names **must** use `PascalCase`.

If a change violates these rules, it must be rejected.

---

## Allowed Agent Actions

Agent **may**:
- Create or modify:
  - DTOs
  - Use Cases
  - Domain entities and value objects
  - Repository interfaces and implementations
- Refactor code to improve separation of layers
- Add or improve unit tests for use cases
- Improve naming, readability, and consistency
- Update README to explain architecture and technical decisions

---

## Forbidden Agent Actions

Agent **must NOT**:
- Move business logic into controllers
- Add logic directly into services beyond orchestration
- Couple DTOs with domain entities
- Introduce new frameworks or libraries without explicit instruction
- Add Redis, queues, or async jobs unless explicitly requested
- Optimize prematurely or add abstractions without justification

---

## Project Structure & Module Organization

- `src/` contains application and domain code.
- `src/main.ts` is the entry point.
- `src/app/app.module.ts` is the root Nest composition module (no logic).
- Nest-specific modules live under `src/app/`.
- Bounded contexts live under `src/context/<bounded-context>/`.

Recommended internal structure for features:

```text
src/app/
  orders/
    dto/
    orders.controller.ts
    orders.service.ts
    orders.module.ts

src/context/orders/
  application/
  domain/
  infrastructure/
```

---

## Testing Guidelines (HIGH PRIORITY)

- Focus on unit tests for application use cases.
- Use mocks/fakes for repositories.
- Avoid HTTP or NestJS in unit tests.
- Coverage is less important than testing meaningful behavior.
- Tests must run with `NODE_ENV=test` and `ORDER_REPOSITORY_DRIVER=in-memory`.

---

## Environment Strategy

- `development`:
  - Local dockerized environment using `docker-compose.yml` (`api` + `db`).
  - Uses `.env.development`.
  - Prefer `ORDER_REPOSITORY_DRIVER=prisma` for real persistence flow.
- `test`:
  - Must not depend on PostgreSQL.
  - Uses `in-memory` repository driver.
  - Uses `.env.test` only as reference/defaults; tests should be deterministic without DB.
- `production`:
  - Must be managed outside this repository (separate infra/deployment project).
  - Do not add production-specific deployment orchestration here.

---

## Build, Test, and Development Commands

- `npm run start:dev` – local development
- `npm run start:dev:docker` – dockerized local development (`api` + `db`)
- `npm run test` – unit tests
- `npm run test:cov` – coverage
- `npm run lint` – linting
- `npm run format` – formatting
- `npm run prisma:generate` – generate Prisma client
- `npm run prisma:migrate:dev` – run local migrations

---

## Commit & Pull Request Guidelines

- Commits should be small and focused.
- Prefer refactors and tests over broad feature additions.
- Every PR should state:
  - what architectural decision was made
  - why it was made
  - what trade-offs exist

---

## Configuration & Secrets

- Do not commit secrets.
- Document environment variables explicitly if introduced.
