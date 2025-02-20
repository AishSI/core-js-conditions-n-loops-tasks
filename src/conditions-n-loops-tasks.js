/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return !(number < 0);
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const max1 = a > b ? a : b;
  return max1 > c ? max1 : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    !(queen.x - king.x) ||
    !(queen.y - king.y) ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  return (
    (a === b && a + b > c) || (a === c && a + c > b) || (b === c && b + c > a)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const arrRoman = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];

  let romNum = '';
  const units = num % 10;
  const dec = (num - units) / 10;
  for (let i = 0; i < dec; i += 1) {
    romNum += arrRoman[10];
  }
  romNum += arrRoman[units];

  return romNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0) {
      res += ' ';
    }
    switch (numberStr[i]) {
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '.':
      case ',':
        res += 'point';
        break;
      case '-':
        res += 'minus';
        break;
      default:
        res += '';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let strReverse = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    strReverse += str[i];
  }
  return str === strReverse;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      res = i;
      return res;
    }
  }
  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = `${num}`;
  for (let i = 0; i < strNum.length; i += 1) {
    if (strNum[i] === `${digit}`) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let summLeft = arr[0];
  let summRight = 0;

  for (let i = arr.length - 1; i > 1; i -= 1) {
    summRight += arr[i];
  }

  for (let i = 2; i < arr.length - 1; i += 1) {
    summLeft += arr[i - 1];
    summRight -= arr[i];
    if (summLeft === summRight) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  let numMatrix = 1;

  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = Array(size);
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }

  while (numMatrix <= size * size) {
    for (let rightStep = colStart; rightStep <= colEnd; rightStep += 1) {
      arr[rowStart][rightStep] = numMatrix;
      numMatrix += 1;
    }
    rowStart += 1;

    for (let bottomStep = rowStart; bottomStep <= rowEnd; bottomStep += 1) {
      arr[bottomStep][colEnd] = numMatrix;
      numMatrix += 1;
    }
    colEnd -= 1;

    for (let leftStep = colEnd; leftStep >= colStart; leftStep -= 1) {
      arr[rowEnd][leftStep] = numMatrix;
      numMatrix += 1;
    }
    rowEnd -= 1;

    for (let topStep = rowEnd; topStep >= rowStart; topStep -= 1) {
      arr[topStep][colStart] = numMatrix;
      numMatrix += 1;
    }
    colStart += 1;
  }

  return arr;
}

getSpiralMatrix(3);

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const res = matrix;

  for (let row = 0; row < size / 2; row += 1) {
    for (let col = row; col < size - row - 1; col += 1) {
      [
        res[row][col],
        res[col][size - 1 - row],
        res[size - 1 - row][size - 1 - col],
        res[size - 1 - col][row],
      ] = [
        res[size - 1 - col][row],
        res[row][col],
        res[col][size - 1 - row],
        res[size - 1 - row][size - 1 - col],
      ];
    }
  }
  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function quickSort(arr, left, right) {
  if (arr.length < 2) {
    return arr;
  }
  let currLeft = left;
  let currRight = right;
  const arrSort = arr;

  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = arrSort[pivotIndex];

  while (currLeft <= currRight) {
    while (arrSort[currLeft] < pivot) {
      currLeft += 1;
    }

    while (arrSort[currRight] > pivot) {
      currRight -= 1;
    }

    if (currLeft <= currRight) {
      [arrSort[currLeft], arrSort[currRight]] = [
        arrSort[currRight],
        arrSort[currLeft],
      ];
      currLeft += 1;
      currRight -= 1;
    }
  }

  if (left < currLeft - 1) {
    quickSort(arrSort, left, currLeft - 1);
  }
  if (currLeft < right) {
    quickSort(arrSort, currLeft, right);
  }

  return arrSort;
}

function sortByAsc(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let strOdd = '';
  let strEven = '';
  const answer = [];
  answer[0] = str;

  if (iterations < 1) {
    return answer[0];
  }

  for (let iter = 1; iter <= iterations; iter += 1) {
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2) {
        strOdd += answer[iter - 1][i];
      } else {
        strEven += answer[iter - 1][i];
      }
    }

    answer[iter] = strEven + strOdd;
    strEven = '';
    strOdd = '';

    if (answer[iter] === str) {
      return answer[iterations % iter];
    }
  }
  return answer[answer.length - 1];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numArr = [...`${number}`];

  if (numArr.length < 2) {
    return number;
  }
  if (numArr.length === 2) {
    return Number(numArr.sort((a, b) => b - a).join(''));
  }

  for (let i = numArr.length - 1; i > 0; i -= 1) {
    if (numArr[i - 1] < numArr[i]) {
      numArr.splice(
        numArr.length,
        0,
        ...numArr.splice(i, numArr.length - i).sort((a, b) => b - a)
      );

      for (let j = numArr.length - 1; j > i - 1; j -= 1) {
        if (numArr[i - 1] < numArr[j]) {
          [numArr[i - 1], numArr[j]] = [numArr[j], numArr[i - 1]];

          const res = numArr.splice(i, numArr.length - i).sort((a, b) => a - b);

          return Number([...numArr, ...res].join(''));
        }
      }
    }
  }

  return Number(numArr.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
