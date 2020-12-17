function start() {
	//event listener dos meus inputs
	const inputA = document.querySelector('#inputA');
	const inputB = document.querySelector('#inputB');

	inputA.addEventListener('keyup', calculations);
	inputB.addEventListener('keyup', calculations);
}

function calculations(event) {
	const inputA = parseInt(document.querySelector('#inputA').value, 10);
	const inputB = parseInt(document.querySelector('#inputB').value, 10);

	//apelidando os elementos da página HTML:
	const pageElement = {
		sum: document.querySelector('#sum'),
		difAB: document.querySelector('#difAB'),
		difBA: document.querySelector('#difBA'),
		AxB: document.querySelector('#AxB'),
		AbyB: document.querySelector('#AbyB'),
		BbyA: document.querySelector('#BbyA'),
		AxA: document.querySelector('#AxA'),
		BxB: document.querySelector('#BxB'),
		divIntA: document.querySelector('#divIntA'),
		divIntB: document.querySelector('#divIntB'),
		Afactorial: document.querySelector('#Afactorial'),
		Bfactorial: document.querySelector('#Bfactorial'),
	};

	//Calculos
	function divInt(num) {
		let divList = [];
		for (let i = 0; i < num; i++) {
			if (num % i === 0) divList.push(i);
		}
		return divList;
	}
	function factorial(num) {
		if (num > 21) {
			return 'Número muito grande!';
		} else {
			if (num < 0) return -1;
			else if (num == 0) return 1;
			else {
				return num * factorial(num - 1);
			}
		}
	}

	//Atribuição dos valores
	pageElement.sum.value = inputA + inputB; //A+B
	pageElement.difAB.value = inputA - inputB; //A-B
	pageElement.difBA.value = inputB - inputA; //B-A
	pageElement.AxB.value = inputA * inputB; //A x B
	if (inputB === 0) {pageElement.AbyB.value = 'Divisão por 0';} else {pageElement.AbyB.value = inputA / inputB;} //A / B
	if (inputA === 0) {pageElement.BbyA.value = 'Divisão por 0';} else {pageElement.BbyA.value = inputB / inputA;} //B / A
	pageElement.AxA.value = inputA ** 2; //A**2
	pageElement.BxB.value = inputB ** 2; //B**2
	pageElement.divIntA.value = divInt(inputA) + ' (' + divInt(inputA).length + ')'; //divisores inteiros de A
	pageElement.divIntB.value = divInt(inputB) + ' (' + divInt(inputB).length + ')'; //divisores inteiros de B
	pageElement.Afactorial.value = factorial(inputA); //A!
	pageElement.Bfactorial.value = factorial(inputB); //A!
}

start();
