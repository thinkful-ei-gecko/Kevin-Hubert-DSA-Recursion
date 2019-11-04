//Drill #1 - Counting Sheep

const sheepCount = function(sheep) {
  //base case
  if (sheep === 0) {
    return 'All sheep jumped over the fence';
    //general case
  } else {
    sheepCount(sheep - 1);
    return `${sheep}: Another sheep jumped over the fence`;
  }
};
sheepCount(3);

//Drill #2 - Power Calculator

const powerCalculator = function(base, exponent) {
  if (exponent < 0) {
    return 'Exponent should be >= 0';
  } else if (exponent == 0) {
    return 1;
  }

  return base * powerCalculator(base, exponent - 1);
};

powerCalculator(10, 3);

//Drill #3 - Reverse String
function reverseString(string) {
  //base case
  if (string.length === 0) {
    return '';
  }
  let lastChar = string.length - 1;
  return string.charAt(lastChar) + reverseString(string.substring(lastChar, 0));
}
reverseString('cat');
// forward phase
// 't' + reverseString('ca')
// 'a' + reverseString('c')
// 'c' + reverseString('')
// '' <- base case
// backward phase
// 'c' + ''
// 'a' + 'c'
// 't' + 'ac'
// return 'tac'

//Drill #4 - nth Triangular Number
function triangularNum(n) {
  //base case
  if (n === 1) {
    return 1;
  }
  //input is the 'n'
  //output is the number of dots composing a triangle with the 'n' of dots on a side
  return triangularNum(n - 1) + n;
  // forward phase
  // 3 + triangularNum(2)
  // 2 + triangularNum(1)
  // 1 <- base case
  // backward phase
  // 2 + 1 = 3
  // 3 + 3 = 6
  // return 6
}
triangularNum(10);

//Drill #5 String Splitter
function stringSplitter(string, separator) {
  /* 
  Rule 1: An empty string results in an array containing an empty string
  Rule 2: A string with a separator at the start results in an array with an empty string as the first element.
          The remaining elements is equal to the rest of the input array.
          ['', ...arr]
  Rule 3: A string with a non-separator at the start results in an array with the first element as all preceding characters before the separator.
          The remaining elements is equal to the rest of the input array at index 1.
          [string.charAt[0] + arr[0], ...arr[1..]]

          baqfo => ['ba', 'fo]
          aqaqaqfo => [a + recur(aqaqaqfo), ...recur(qaqaqfo)]
  */

  if (string.length === 0) {
    return [''];
  }

  const arr = stringSplitter(string.substring(1), separator);
  // if we hit a separator
  if (string.charAt(0) === separator) {
    return ['', ...arr];
  }
  // if we don't hit a separator
  else {
    return [string.charAt(0) + arr[0], ...arr.slice(1)];
  }
}
stringSplitter('02/20/2020', '/');

//Drill #6 - Fibonacci
function fib(n) {
  //base case
  if (n <= 2) {
    return 1;
  }

  //general case
  return fib(n - 1) + fib(n - 2);
}
fib(7);

//Drill #7 - Factorial
function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}
factorial(5);

//Drill #8 - Maze
let mySmallMaze = [
	[' ', ' ', ' '],
	[' ', '*', ' '],
	[' ', ' ', 'e']
];

let maze = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeSolver(arr, x, y) {
	/*
	Rule #1: If there's a boundary([]) on your left or right, you cannot go to that direction.
	Rule #2: If there's a blocked passage(*) in any direction, we cannot go to that blocked direction
	Rule #3: If we reach the last element of the array, we return 
	*/

	if(arr[0].length === 0) {
		return '';
	}

	if(arr[1][0] === '*') {
		return 'R';
	} else if () {
			
	}
}