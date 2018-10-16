<template>
  <div id="app">
    <navbar></navbar>
    <img alt="Vue logo" src="./assets/logo.png">
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/navbar";

export default {
  name: 'app',
  components: {
      Navbar,
  }
}
</script>

<style>
  body { margin: 0 }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  /**
 * Styles pour un bouton
 */

  .btn {
    display: inline-block;
    padding: 0.5em 1.4em;
    color: #fff;
    text-decoration: none;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    background: linear-gradient(to bottom, #42b983, #128953);
  }
  .btn:hover {
    color: #fff;
    background: linear-gradient(to bottom, #42b983 50%, #128953);
  }
  .btn:active {
    background: linear-gradient(to bottom, #128953, #42b983 50%);
  }
  .btn:disabled {
    background: linear-gradient(to bottom, #eeeeee, #d3d3d3);
    cursor: not-allowed;
  }
  .btn.btn-small {
    padding: 0.15em 0.5em;
    font-size: 0.9em;
  }

  /**
   * Style pour les formulaires
   */

  form input[type='text'],
  form input[type='search'],
  form input[type='password'],
  form input[type='date'],
  form input[type='url'],
  form select {
    padding: 0.5em 0.9em;
    border-radius: 2px;
    border: thin solid #c0c0c0;
    background: linear-gradient(to bottom, #e6e6e6 0%, transparent 20%);
  }
</style>
