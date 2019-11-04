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
  if (string.length === 0) {
    return [];
  }

  // if we hit a separator
  if (string.charAt(0) === separator) {
    return [string.charAt(1) + stringSplitter(string.substring(2), separator)];
  }
  // if we don't hit a separator
  else {
    return [string.charAt(0) + stringSplitter(string.substring(1), separator)];
  }
}
stringSplitter('02/20/2020', '/');
// forward phase
// ['0' + stringSplitter('2/20/2020', '/')]
// ['2' + stringSplitter('/20/2020', '/')]
// ['2' + stringSplitter('0/2020', '/')]
// ['0' + stringSplitter('/2020', '/')]
// ['2' + stringSplitter('020', '/')]
// ['0' + stringSplitter('20', '/')]
// ['2' + stringSplitter('0', '/')]
// ['0' + stringSplitter('', '/')]
// [] <- base case
// backward phase
// ['0' + []] = ['0']
// ['2' + ['0']] = ['20']
// ['0' + ['20']] = ['020']
// ...
// ['02202020']

//Drill #6 - Fibonacci
function fib(n) {
    //base case
    if(n == 0) {
        return 0;
    }
    if(n == 1 || n == 2) {
        return 1;
    }

    //general case
    return fib(n - 1) + fib(n - 2)
}

fib(5)