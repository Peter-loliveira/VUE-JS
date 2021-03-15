<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>O nome original é <strong> {{ nomeLocal }} </strong> </p>
    <button @click="alterarDados">Alterar Dados</button>
    <hr />
    <div class="componentes">
      <!-- Ambas as formas são equivalentes: -->
      <!-- <AppUsuarioInfo v-bind:nomeInfo = 'nomeLocal' v-bind:idadeInfo = 'idadeLocal * 2'/> -->
      <AppUsuarioInfo 
          :nomeInfo = 'nomeLocal' 
          :idadeInfo = 'idadeLocal' 
          @nomeMudou = 'nomeLocal = $event.nome, idadeLocal = $event.idadeInfo'
          :reiniciaFn = 'reiniciarNome'
          />
      <AppUsuarioEditar />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nomeLocal: "Peter",
      idadeLocal: 45,
    };
  },
  methods: {
    alterarDados() {
      this.nomeLocal += "!";
      this.idadeLocal++;
    },
    reiniciarNome(){
      this.nomeLocal = 'Peter'
      this.idadeLocal = 45
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}

button {
  background-color: #ec485f;
  color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid yellow;
  outline: none;
}
</style>
