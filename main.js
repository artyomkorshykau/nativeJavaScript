// const arr = [34, -345, -1, 100]
// console.log(Math.min(...arr))
//
// const sum = (num) => {
//   let res = 0;
//   for (let i = 1; i <= num; i++) {
//     res += i
//   }
//   return res
// }
// console.log(sum(8))

// const sum = (a, b) => {
//   return a + b
// }
//
// const res = sum(sum(2, 4), sum(3, 6))
// console.log(res)

const students = [
  {
    name: "Bob",   // "Hi, Bob!"
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  }
];

const getNames = (array) => {
  const res = []
  const getValueForRes = (el) => el.name
  for (let i = 0; i < array.length; i++) {
    res[i] = getValueForRes(array[i])
  }
  return res
}

console.log(getNames(students))

const getUpdateStudents = (array) => {
  const res = []
  const getValueForRes = (el) => ({...el, isStudents: true})

  for (let i = 0; i < array.length; i++) {
    res[i] = getValueForRes(array[i])
  }
  return res
}

console.log(getUpdateStudents(students))

const getMappedArray = (array, func) => {
  const res = []
  for (let i = 0; i < array.length; i++) {
    res[i] = func(array[i])
  }
}

console.log(students.map((el) => el.name))


const getFilterArray = (array, func) => {
  const res = []
  for (let i = 0; i < array.length; i++) {
    if (func(array[i]) === true) {
      res.push(array[i])
    }
  }
  return res
}

console.log(getFilterArray(students, st => st.age >= 21))
console.log(students.filter(st => st.age >= 21))