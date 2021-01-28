new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classesExtras1: '',
		aplicarClass: 'false',
		classeBoleana: '',
		classesExtras2: '',
		cor5: '',
		tamanho: '0%',
		estilo: {
			width: '100px',
			height: '100px',
		},
		barra: {
			// width: '50%',
			backgroundColor: 'blue',
			height: '20px',
		}

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 500);
		},
		aplicaEstilo(evento) {
			console.log('TESTES');
			// if(evento.target.value == 'true'){
			// 	this.classeBoleana = 'bordas'
			// } else {
			// 	this.classeBoleana = ''
			// }
			evento.target.value == 'true' ? this.classeBoleana = 'bordas' : this.classeBoleana = ''
		},
		iniciarProgresso() {
			let progress = 0
			setTimeout(() => {
				progress++
				console.log(progress);
				// this.tamanho = `${progress}%`
				// if (progress == 100) {
				// 	clearInterval(progress)
				// }
			}, 200);
		}
	}
})
