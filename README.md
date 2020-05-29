# TodoMVC built with Vue 3 Composition Api and Vuex

[![Build Status](https://travis-ci.com/blacksonic/todomvc-vue-composition-api.svg?branch=master)](https://travis-ci.com/blacksonic/todomvc-vue-composition-api)
[![Dependencies Status](https://david-dm.org/blacksonic/todomvc-vue-composition-api/status.svg)](https://david-dm.org/blacksonic/todomvc-vue-composition-api)

The well-known TodoMVC built with Vue 3 Composition Api and Vuex in a structured and testable way.

![TodoMVC Vue](./images/screenshot.png "TodoMVC Vue")

[Edit and try it out online](https://codesandbox.io/s/github/blacksonic/todomvc-vue-composition-api)

## Concepts and tools covered

- [Vue CLI](https://cli.vuejs.org/)
- [Composition Api](https://composition-api.vuejs.org/#summary)
- [Vuex](https://vuex.vuejs.org/)
- [Unit Testing](https://vue-test-utils.vuejs.org/)
- [E2E Testing](https://www.cypress.io/)

## Usage

After installing the dependencies the following NPM scripts become available:

- `start`: starts the application in development mode on [http://localhost:9000](http://localhost:9000)
- `build`: bundles the application for production into the `dist` folder
- `test`: runs unit and E2E tests
- `test:unit`: runs unit tests with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) in the `src` folder suffixed with `*.spec.js`
- `test:e2e`: runs E2E tests with [Cypress](https://www.cypress.io/) in the `tests/e2e` folder suffixed with `*.spec.js`
- `format`: formats the code with [Prettier](https://prettier.io/) within the `src` folder
- `lint`: lint files with [ESLint](https://eslint.org/) based on [Airbnb's styleguide](https://github.com/airbnb/javascript) and the Prettier config

## Component architecture

![Architecture](./images/architecture.png)

Application is compatible with [Vue devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

## Series

This implementation is part of a series where the same application was implemented with the same architecture.

- [Vue](https://github.com/blacksonic/todomvc-vue)
- [Vue Composition API](https://github.com/blacksonic/todomvc-vue-composition-api)
- [Angular](https://github.com/blacksonic/todomvc-angular)
- [React](https://github.com/blacksonic/todomvc-react)
- [React Hooks](https://github.com/blacksonic/todomvc-react-hooks)
- [Svelte](https://github.com/blacksonic/todomvc-svelte)
