new Vue({

    el: '#desafio',
    data: {
        nome: 'Peter Lange',
        idade: 45,
        srcImg: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/TARDIS13THDOCTOR.jpg'
    },
    methods:{
        multipliaIdade(){
           return this.idade * 3
        },
        numeroAleatorio(){
            return Math.random()
        },
        retornaNome(){
            return this.nome
        }
    }

})