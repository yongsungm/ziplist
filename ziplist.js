function zipList(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  return arr3;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));
