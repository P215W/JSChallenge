// 7. The prototype one

const someArray = [1, 3, 4, 5, 6, 10];
Array.prototype.firstValue = function() {
  return this[0];
};
console.log(someArray.firstValue());
