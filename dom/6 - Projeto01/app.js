new Vue({
	el: '#app',
    data: {
        vidaJ: 100,
        vidaM: 100,
    },
    methods: {
        Atacar(){
            this.vidaJ -= 9
            this.vidaM -= 10
        },
        especial(){

        },
        curar(){
            this.vidaJ += 3
            this.vidaM -= 5

        },
        desistir(){
            this.vidaJ = 100
            this.vidaM = 100
        },

    }
  });