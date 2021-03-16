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
export default {
  props: {
    nomeEdit: String,
    idadeEdit: Number,
  },
  methods: {
    alterarDadosEdit() {
      this.$emit("eventoEdit", {
        nome: "Peter",
        idade: 45,
      });
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
