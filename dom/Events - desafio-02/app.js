new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Botão Exibir Alerta clicado!')
        },
        teclaEnterPressionada(event){
            this.valor = event.target.value
        }
    }
})