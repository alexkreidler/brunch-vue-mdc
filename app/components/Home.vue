<template>
  <div class="hello">
    <Header title="Vue.js + Material Web Components + Brunch"></Header>
    <h1>{{ msg }}</h1>
    <p>Based off of <a href="https://github.com/tomquirk/brunch-vue-barebones">tomquirk/brunch-vue-barebones</a></p>
    <mdc-button raised>Get Started</mdc-button>
  </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: 'hello',
    components: {
      Header
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App, bundled with Brunch!'
      }
    }
  }

</script>

<style lang="scss">
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #fff;

// TODO: Use SCSS for variables and theming
// QUESTION: Npm issues causing bug
// @import "vue-mdc-adapter/components/styles.css";

@import "vue-mdc-adapter/dist/vue-mdc-adapter.css"
</style>
