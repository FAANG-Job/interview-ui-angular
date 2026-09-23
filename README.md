# Interview UI Angular

A beginner-friendly Angular frontend for the Interview Management application. This project is being developed independently before integration with the Java 21 Spring Boot `interview-service` backend.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

## Technology

* Angular CLI 21.2.24
* Node.js 24.13.1
* npm 11.8.0
* TypeScript
* SCSS

## Prerequisites

Install the following on Windows:

* Node.js
* npm
* Angular CLI

Verify the installation:

```powershell
node --version
npm --version
ng version
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to http://localhost:4200/. The application automatically reloads whenever you modify source files.

## Project learning roadmap

The UI is being built in small, practical steps:

1. Components and HTML templates
2. Data binding and button events
3. Signals and UI state
4. Routing between pages
5. Services and mock interview data
6. Reactive forms and validation
7. HTTP integration with the Spring Boot backend

## Planned features

* Dashboard with interview summary cards
* Interview list with search and status filtering
* Schedule-interview form
* Interview-details page
* Backend health-status card
* REST API integration with `interview-service`

## Backend integration

The UI will initially use mock data. After the Angular components, routing, forms, and services are stable, it will integrate with the Spring Boot backend.

Planned health-check endpoint:

```text
GET http://localhost:8080/api/health
```

## Code scaffolding

Angular CLI includes powerful code-scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics, such as components, directives, or pipes, run:

```bash
ng generate --help
```

## Building

To build the project, run:

```bash
ng build
```

This compiles the project and stores the build artifacts in the `dist/` directory. By default, the production build optimizes the application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, run:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not include an end-to-end testing framework by default. Choose and configure a framework that suits the project when e2e testing is introduced.

## Security

Do not commit passwords, API keys, tokens, or internal URLs to this repository.

## Additional resources

For more information about Angular CLI commands, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).


## Angular learning roadmap

Learn these Angular basics in this order:

1. **Components and templates**
   Create pages such as Dashboard and Interview List.

2. **Data binding and events**
   Display values and respond to button clicks.

3. **Signals and state**
   Store and update UI data, such as interview status.

4. **Routing**
   Navigate between Dashboard, Interview List, and Schedule Interview pages.

5. **Services**
   Keep mock interview data outside components.

6. **Reactive forms**
   Build a schedule-interview form with validation.

7. **HTTP calls**
   Use `HttpClient` to call the Spring Boot `GET /api/health` endpoint.
