function sum(numbers) {
  let res = numbers.reduce((acc, curr) => acc + curr, 0);
  return res;
}

console.log(sum([]));

function areYouPlayingBanjo(name) {
  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("adam"));

function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((a, b) => a + b, 0) / array.length;
}
console.log(findAverage([]));

function grow(x) {
  return x.reduce((a, b) => a * b);
}

console.log(grow([1, 2, 3, 4]));

function bmi(weight, height) {
  const res = weight / height ** 2;
  return res <= 18.5
    ? "Underweight"
    : res <= 25.0
    ? "Normal"
    : res <= 30.0
    ? "Overweight"
    : "Obese";
}

console.log(bmi(80, 1.8));

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints >
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length
    ? true
    : false;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

console.log(max([-52, 56, 30, 29, -54, 0, -110]));
