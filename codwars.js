function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
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
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

console.log(max([-52, 56, 30, 29, -54, 0, -110]));

function DNAStrand(dna) {
  return dna
    .split("")
    .map((el) =>
      el === "A"
        ? "T"
        : el === "T"
        ? "A"
        : el === "G"
        ? "C"
        : el === "C"
        ? "G"
        : ""
    )
    .join("");
}

console.log(DNAStrand("ATTGC"));

function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}

console.log(solution("abcde", "cde"));

function friend(friends) {
  return friends.filter((el) => el.length <= 4);
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));

function moveZeros(arr) {
  return arr.filter((el) => el != 0).concat(arr.filter((el) => el == 0));
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

function pigIt(str) {
  const toArray = str.split(" ");
  let res = [];
  const regEx = /[,.!?;:()]/;

  for (i = 0; i < toArray.length; i++) {
    if (toArray[i].match(regEx)) {
      res.push(toArray[i]);
    } else {
      res.push(toArray[i].slice(1, toArray[i].length) + toArray[i][0] + "ay");
    }
  }

  return res.join(" ");
}

console.log(pigIt("Hello world !"));
