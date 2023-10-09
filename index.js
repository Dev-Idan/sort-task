// # Top to bottom left to right

// # Sample input:
/*
Hello,
My name is Idan.
this is a sample task.
*/

const { binaryInsert } = require('binary-insert');

const input = [
	{ value: 'this', coords: { x1: 0, y1: 10, x2: 4, y2: 12 } },
	{ value: 'name', coords: { x1: 4, y1: 5, x2: 7, y2: 7 } },
	{ value: 'Hello', coords: { x1: 0, y1: 0, x2: 5, y2: 2 } },
	{ value: 'Idan', coords: { x1: 11, y1: 5, x2: 15, y2: 7 } },
];

// compares y1's for both inputs, if equal compares x1's
const comparator = (inputA, inputB) => inputA.coords.y1 - inputB.coords.y1 || inputA.coords.x1 - inputB.coords.x1;

function orderInput(inputArray) {
	return inputArray.reduce((result, currentInput) => binaryInsert(result, currentInput, comparator), []);

	// alternitive: JS uses Quicksort by default
	// return inputArray.sort(comparator);
}

console.log(orderInput(input));
