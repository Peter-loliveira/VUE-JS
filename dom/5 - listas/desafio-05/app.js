new Vue({
	el: '#desafio',
	data: {
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			Titulo: 'O Senhor dos Anéis',
			Autor: 'J.R.R. Tolkiens',
			Volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		// dados extras'
		exibir: false,
		listaHerois: [
			'Batman', 
			'Super-Homem', 
			'Mulher-Maravilha',
			'Flahs',
			'Capitão America',
			'Homem de Ferro',
			'Visão',
			'Feiticeira Escarlate'
		]
	}
});
