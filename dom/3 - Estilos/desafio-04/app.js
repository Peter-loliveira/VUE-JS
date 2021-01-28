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
			evento.target.value == 'true' ? this.classeBoleana = 'bordas' : this.classeBoleana = ''
		},

		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor++
				this.tamanho = valor + '%'
				if (valor == 100) clearInterval(temporizador)
			}, 50); 
		}
	}
})
