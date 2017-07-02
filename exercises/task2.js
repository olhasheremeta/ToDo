const array = [16, 3, 111, 5, 28, 122, 1, 50, 68, 79, 100];

function min(arr) {
  let num = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] <= num) {
      num = arr[i];
    }
  }
  return num;
};

function minSort(arr) {
  let sortedArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let minElement = min(array);
    let index = arr.indexOf(minElement);
    sortedArr.push(minElement);
    arr.splice(index, 1);
  }
  return sortedArr;
}

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let num = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = num;
      }
    }
  }
  return arr;
}

console.time('bubble')
const sortedArray = bubbleSort(array);
console.timeEnd('bubble')

console.time('min')
const sortedArray2 = minSort(array);
console.timeEnd('min')

//console.log(sortedArray) // => [1, 3, 5, 16, 28, 50, 68, 79, 100, 111, 122]