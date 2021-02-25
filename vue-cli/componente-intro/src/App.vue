<template>
  <div id="app">
    <h1>Contadores</h1>
    <h3>
      
      <app-contador/>
      <br>
      <app-counter />

    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
};
</script>

<style>
</style>