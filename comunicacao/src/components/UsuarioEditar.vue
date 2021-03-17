<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Nome: <strong> {{ nomeEdit }} </strong>
    </p>
    <p>
      Idade: <strong> {{ idadeEdit }} </strong>
    </p>
    <button @click="alterarDadosEdit">Ficando Mais Velho</button>
  </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
  props: {
    nomeEdit: String,
    idadeEdit: Number,
  },
  methods: {
    alterarDadosEdit() {
      this.idadeEdit = 95;
      this.nomeEdit = 'Pina'
      barramento.alterarIdade(this.idadeEdit);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
