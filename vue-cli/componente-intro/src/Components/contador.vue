<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contador: 0,
        limite: 10,
      };
    },
    methods: {
      adicionar() {
        if (this.contador <= this.limite - 1) this.contador++;
      },
      subtrair() {
        if (this.contador != 0) {
          this.contador--;
        }
      },
    },
  };
</script>

<style scoped>
  .contador {
    margin-bottom: 5px;
  }
  span {
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
  }

  button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
  }
</style>