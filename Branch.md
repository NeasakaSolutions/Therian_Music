# Flujo de ramas del proyecto

Este proyecto utiliza un flujo de trabajo basado en ramas para organizar el desarrollo del backend y frontend.

## Ramas principales

- **main**
  - Rama estable.
  - Solo se fusiona código probado y funcional.

- **feature/backend**
  - Contiene todo el desarrollo del backend.
  - Sirve como rama de integración del equipo de backend.

- **feature/frontend**
  - Contiene todo el desarrollo del frontend.
  - Sirve como rama de integración del equipo de frontend.

## Ramas por desarrollador

Cada integrante trabaja en su propia rama personal, creada a partir de la rama de su área.

### Backend
- **backend/nea**
- (otra rama del segundo miembro de backend)

### Frontend
- (rama del primer miembro de frontend)
- (rama del segundo miembro de frontend)

## Flujo de trabajo

1. Cada desarrollador trabaja en su rama personal.
2. Cuando termina una funcionalidad, se fusiona a:
   - `feature/backend` o `feature/frontend` según corresponda.
3. Una vez que la rama de área funciona correctamente y está estable:
   - Se fusiona a `main`.

Este flujo ayuda a mantener el código organizado y reduce conflictos.