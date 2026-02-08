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
- **Infrastructure**
  - Controllers
  - DTOs
  - NestJS-specific code
- **Application**
  - Use Cases
  - Orchestration logic
- **Domain**
  - Entities
  - Value Objects
  - Business rules
  - Repository interfaces

Rules:
- Domain **must not** depend on NestJS, DTOs, or infrastructure.
- Application layer **must not** contain HTTP or framework concerns.
- Controllers **must not** contain business logic.
- Use cases inside `application/` **must not** include `use-case` or `UseCase` in file/class names.

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

- `src/` contains the NestJS application code.
- `src/main.ts` is the entry point.
- `src/app.module.ts` is the root composition module (no logic).
- Feature modules live under `src/<feature>/`.

Recommended internal structure for features:

```text
src/orders/
  application/
  domain/
  infrastructure/
  orders.module.ts
```

---

## Testing Guidelines (HIGH PRIORITY)

- Focus on unit tests for application use cases.
- Use mocks/fakes for repositories.
- Avoid HTTP or NestJS in unit tests.
- Coverage is less important than testing meaningful behavior.

---

## Build, Test, and Development Commands

- `npm run start:dev` – local development
- `npm run test` – unit tests
- `npm run test:cov` – coverage
- `npm run lint` – linting
- `npm run format` – formatting

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
