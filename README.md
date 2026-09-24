# Interview UI Angular

A beginner-friendly Angular frontend for an Interview Management application. This project is being developed independently before integration with the Java 21 Spring Boot `interview-service` backend.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

## Technology

- Angular CLI 21.2.24
- Node.js 24.13.1
- npm 11.8.0
- TypeScript
- SCSS

## Prerequisites

Install the following on Windows:

- Node.js
- npm
- Angular CLI

Verify the installation:

```powershell
node --version
npm --version
ng version
```

## Development server

Start the local development server:

```bash
ng serve
```

Open [http://localhost:4200/](http://localhost:4200/) in a browser. The application reloads automatically when source files change.

## Current progress

The following frontend work is complete:

- Created a reusable application layout with a header, sidebar, main content area, and footer.
- Created the Dashboard page with interview summary information and upcoming interview data.
- Created the Interview List page.
- Created the Schedule Interview page.
- Configured Angular routing between Dashboard, Interviews, and Schedule Interview.
- Added working sidebar navigation.
- Added a working **Schedule Interview** button that opens the schedule-interview route.
- Used mock interview data while the backend integration is still in progress.

## Application screenshots

Add your screenshots in a `screenshots` folder at the project root.

### Dashboard

The dashboard shows interview summary information, upcoming interviews, and an option to schedule a new interview.

![Dashboard screen](./screenshots/dashboard.png)

### Interview navigation

The sidebar lets users navigate between the Dashboard, Interviews, and Schedule Interview pages.

![Interview navigation](./screenshots/interviews.png)

## Current limitations

- Interview data currently uses mock data.
- The Schedule Interview form is not yet connected to the backend.
- Search, filtering, form validation, and API integration are planned next.

## Learning roadmap

The UI is being built in small, practical steps:

1. Components and HTML templates
2. Data binding and button events
3. Signals and UI state
4. Routing between pages
5. Services and mock interview data
6. Reactive forms and validation
7. HTTP integration with the Spring Boot backend

## Planned features

- Dashboard with interview summary cards
- Interview list with search and status filtering
- Schedule-interview form
- Interview-details page
- Backend health-status card
- REST API integration with `interview-service`

## Backend integration

The UI will initially use mock data. After the Angular components, routing, forms, and services are stable, it will integrate with the Spring Boot backend.

Planned health-check endpoint:

```text
GET http://localhost:8080/api/health
```

## Code scaffolding

Generate a new component:

```bash
ng generate component component-name
```

For all available schematics, run:

```bash
ng generate --help
```

## Building

Build the project:

```bash
ng build
```

Build artifacts are stored in the `dist/` directory. The production build is optimized for performance and speed.

## Running unit tests

Run unit tests with [Vitest](https://vitest.dev/):

```bash
ng test
```

## Running end-to-end tests

Run end-to-end tests:

```bash
ng e2e
```

Angular CLI does not include an end-to-end testing framework by default. Choose and configure one when e2e testing is introduced.

## Security

Do not commit passwords, API keys, tokens, or internal URLs to this repository.

## Additional resources

For Angular CLI documentation, see the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
