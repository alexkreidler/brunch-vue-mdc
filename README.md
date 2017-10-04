# brunch-vue-mdc

A Material Web Components Vue Skeleton for Brunch

Follows vue [best practices](https://vuejs.org/v2/guide/single-file-components.html), and is uses a simple example from the [vue-cli generator](https://github.com/vuejs/vue-cli).

Uses [vue-mdc-adapter](https://github.com/stasson/vue-mdc-adapter), the most full-featured Vue.js MDC wrapper.

![screenshot-2017-10-3 brunch vue material web components](https://user-images.githubusercontent.com/11166947/31198947-f56d677a-a923-11e7-8cf9-db0094f06e22.png)

Based off of: [tomquirk/brunch-vue-barebones](https://github.com/tomquirk/brunch-vue-barebones)

## Installation

1. Install Brunch globally

```bash
npm install -g brunch
```

2. Create a new Brunch project using _this_ skeleton

```bash
brunch new -s material-vue
```

## Getting Started

> Taken from the official Brunch docs

* Install (if you don't have them):
  * [Node.js](http://nodejs.org): `brew install node` on OS X
  * [Brunch](http://brunch.io): `npm install -g brunch`
  * Brunch plugins and app dependencies: `npm install`
* Run:
  * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
  * `npm run build` — builds minified project for production
* Learn:
  * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
  * Place static files you want to be copied from `app/assets/` to `public/`.
  * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
