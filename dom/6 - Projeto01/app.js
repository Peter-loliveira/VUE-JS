new Vue({
	el: '#app',
    data: {
        vidaJ: 100,
        vidaM: 100,
        starter: false,
        porcentagemJ: '',
        porcentagemM: '',
        barraJ: {
            width: '100%',
            height: '100%',
        },
        barraM: {
            width: '100%',
            height: '100%',
        },
        logs: []

    },
    computed: {

    },
    methods: {
        aleartorio(max, min){
            // Gera um nr aleatório para servir para os calculos de ataque
            return Math.random() * (max - min) + min
        },

        verificaVida(){
            if(this.vidaJ < 0) {
                this.vidaJ = 0
            }
            if(this.vidaM < 0) {
                this.vidaM = 0
            }
        },
        verificaTermino(){
            if(this.vidaJ == 0 || this.vidaM == 0) {
                return true
            }
        },
        Atacar(){
            let ataqueJ = Math.trunc(this.aleartorio(10,1))
            let ataqueM = Math.trunc(this.aleartorio(10,1))
            this.vidaJ -= ataqueM
            this.vidaM -= ataqueJ
            this.registraLog(`O JOGADOR atingio o mostro com ${ataqueJ} pontos`, 'logJ')
            if(this.vidaM > 0){
                this.registraLog(`O MONSTRO atingio o JOGADOR com ${ataqueM} pontos`, 'logM')
            }
            this.verificaVida()
        },
        especial(){
            let ataqueJ = Math.trunc(this.aleartorio(20,1))
            let ataqueM = Math.trunc(this.aleartorio(10,1))
            this.vidaJ -= ataqueM
            this.vidaM -= ataqueJ
            this.registraLog(`O JOGADOR atingio o mostro com um ATAQUE ESPECIAL e retirou ${ataqueJ} pontos`, 'logJ')
            if(this.vidaM > 0){
                this.registraLog(`O MONSTRO atingio o JOGADOR com ${ataqueM} pontos`, 'logM')
            }
            this.verificaVida()
            
        },
        curar(){
            let cura =  Math.trunc(this.aleartorio(10,1))
            let ataque = Math.trunc(this.aleartorio(10,1))
            this.vidaJ += cura
            this.vidaJ -= ataque
            this.registraLog(`O Jogador se curou um total de ${cura} pontos`, 'logJ')
            this.verificaVida()
        },
        iniciarJogo(){
            this.vidaJ = 100
            this.vidaM = 100
            this.starter = !this.starter
            this.logs = []
        },
        registraLog(text, css){
            this.logs.unshift({text, css})
        }

    },
    watch: {
 
    }
  });