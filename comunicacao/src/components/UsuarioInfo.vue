<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuário: <strong> {{ inverterNome() }} </strong> tem
      <strong> {{ idadeInfo }} </strong> anos.
    </p>
    <button @click="reiniciaDados">Reinicar Dados</button>
    <button @click="reiniciaFn">Reinicar Por Função (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
  // props: ['nomeInfo', 'idadeInfo'], Notação Normal e simples

  // NOtação com checagem de tipo e obrigatoriedade de preencimento
  props: {
    nomeInfo: {
      type: String, //Checagem de tipos
      require: true, // Obrigatoriedade de preenchimento
      default: "EMON MES", //Caso não seja enviado, assume esse valor como padrão
      // Também é possivel usar uma função como valor default :
      // default: function() {
      //     return Array(10).fill(0).join(',')
      // }
    },
    idadeInfo: Number,
    reiniciaFn: Function,
  },
  methods: {
    inverterNome() {
      return this.nomeInfo.split("").reverse().join("");
    },
    reiniciaDados() {
      this.$emit("eventoInfo", {
        nome: "peter",
        idade: 45,
      });
    },
  },
  created() {
    barramento.quandoIdadeMudar(idadeEdit => {
      this.idadeInfo = idadeEdit
    //   this.nomeInfo = nomeEdit
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
button {
  background-color: aqua;
  border: 0px;
  outline: none;
}
</style>
