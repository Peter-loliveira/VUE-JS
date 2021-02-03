new Vue({
	el: '#app',
    data: {
        vidaJ: 100,
        vidaM: 100,
        starter: false,
    },
    computed: {

    },
    methods: {
        alearorio(max, min){
            // Gera um nr aleatório para servir para os calculos de ataque
            return Math.random() * (max - min) + min
        },
        Atacar(){
            let ataqueJ = Math.trunc(this.alearorio(10,5))
            let ataqueM = Math.trunc(this.alearorio(10,5))
            this.vidaJ -= ataqueM
            this.vidaM -= ataqueJ
            alert(`Ataque Monstro: ${ataqueM}. Ataque Jogador: ${ataqueJ}. `)
        },
        especial(){
            
        },
        curar(){
            let cura =  Math.trunc(this.alearorio(10,5))
            let ataque = Math.trunc(this.alearorio(10,5))
            this.vidaJ += cura
            this.vidaJ -= ataque
            alert(`Cura de: ${cura}. Ataque Monstro: ${ataque}. `)

        },
        desistir(){
            this.vidaJ = 100
            this.vidaM = 100
            this.starter = !this.starter
        },

    },
    watch: {

    }
  });