//Drill #1 - Counting Sheep

const sheepCount = function(sheep) {
    //base case
    if (sheep === 0) {
        return 'All sheep jumped over the fence';
    //general case
    } else {
        sheepCount(sheep - 1) 
        return `${sheep}: Another sheep jumped over the fence`  
    }
}
sheepCount(3);

//Drill #2 - Power Calculator

const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return 'Exponent should be >= 0';
    } else if (exponent == 0) {
        return 1;
    }

    return (base * powerCalculator(base, exponent - 1))
}

powerCalculator(10, 3)

//Drill #3 - Reverse String
function reverseString(string) {
  //base case
  if (string.length === 0) {
    return '';
  }
  let lastChar = string.length - 1;
  return string.charAt(lastChar) + reverseString(string.substring(lastChar, 0));
}
reverseString('this is a string');

//Drill #4 - nth Triangular Number
function triangularNum(n) {
    //base case
    if (n == 1) {
        return 1;
    }
    //input is the 'n'
    //output is the number of dots composing a triangle with the 'n' of dots on a side
    return triangularNum(n - 1) + n
    // 3 + triangularNum(2) = 3 + 3 = 6
    // 2 + triangularNum(1) = 2 + 1 = 3
    // 1
}
triangularNum(10);