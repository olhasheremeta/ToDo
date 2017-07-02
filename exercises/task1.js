const numbers = [1, 5, 1, 8, 9, 11, 12, 6, 4, 6, 0, 14, 13, 7, 8, 8, 5];

function max(array) {
  let num = array[0];
  for (var i = 1; i <= array.length; i++) {
    if (array[i] >= num) {
      num = array[i];
    }
  }
  return num;
};

const maxN = max(numbers);
console.log(maxN);

// max(array) => 14

const myColors = ['Red', 'Green', 'White', 'Black'];

function join(array, separator) {
  // let result = '';
  // for (var i = 0; i < array.length; i++) {
  //   const sep = i < array.length - 1 ? separator : ''
  //   result = result + array[i] + sep;
  // }
  // return result;

  return array.join('+')
}

const joinedColors = join(myColors, '+');
console.log(joinedColors)

// join(myColors, ',') => Red,Green,White,Black
// join(myColors, '-') => Red-Green-White-Black