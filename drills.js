'use strict';

//URLify a string
function urlify(string) {
  const stringArray = [];
  for(let i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
  }
  for(let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === ' ') {
      stringArray[i] = '%20';
    }
  }
  let word = '';
  for (let i = 0; i < stringArray.length; i++) {
    word += stringArray[i];
  }
  return word;
}

const word = 'www.thinkful.com /tauh ida parv een';
console.log(urlify(word));

//Filtering an array
function filterArray(arr) {
  let newArray = [];
  for(let i = 0; i < sampleArr.length; i++) {
    if(sampleArr[i] < 5) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArray(sampleArr));

//Max sum in the array
function maxSum(arr) {
  let highNum = 0;
  let nextNum = 0;

  for(let i = 0; i < arr.length; i++) {
    nextNum = 0;
    for(let j= 0; j < arr.length; j++) {
      nextNum += arr[j];
      if(nextNum > highNum) {
        highNum = nextNum;
      }
    }
  }
  return highNum;
}

const arr = [4,6,-3,5,-2,1];
console.log(maxSum(arr));

//Merge Arrays
function mergeArr(arr1, arr2) {
  let mergedArr = [...arr1, ...arr2];
  mergedArr.sort(function(a, b) {
    return a-b;
  });
  console.log(mergedArr);
}

const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];
mergeArr(arr1, arr2);

//Remove Characters
function removeVowels(string) {
  let removedVowels = '';
  for (let i = 0; i < string.length; i++) {
    if (!isVowel(string[i])) {
      removedVowels += string[i];
    }
  }
  return removedVowels;
}
function isVowel(vowels) {
  return 'aeiou'.includes(vowels);
}

const input = 'Battle of the Vowels: Hawaii vs. Grozny';
console.log(removeVowels(input));

//Products

function products(arr) {
  const rearrange = [];
  for (let i = 0; i < arr.length; i++) {
    let num = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        num = num * arr[j];
      }
    }
    rearrange.push(num);
  }
  return rearrange;
}
console.log(products([1, 3, 9 ,4]));

//2D array
function twoD(arr) {
  let oneArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        oneArr.push([i, j]);
      }
    }
  }
  for (let i = 0; i < oneArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[j].length; k++) {
        arr[oneArr[i][0]][k] = 0;
        arr[j][oneArr[i][1]] = 0;
      }
    }
  }
  return arr;
}
console.log(twoD([
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]));

//String rotation
function stringRotate(str1, str2) {
  return (str1 + str1).includes(str2);
}

console.log(stringRotate('amazon', 'azonma'));
console.log(stringRotate('amazon', 'azonam'));