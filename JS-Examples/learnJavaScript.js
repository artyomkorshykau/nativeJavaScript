// // import _ from "lodash";
//
// console.log("" + 1 + 0) // 10
// console.log("" - 1 + 0) // -1
// console.log(true + false) // 1
// console.log(6 / "3") // 2
// console.log("2" * "3") // 6
// console.log(4 + 5 + "px") //9px
// console.log("$" + 4 + 5) // $45
// console.log("4" - 2) // 2
// console.log("4px" - 2) // NaN
// console.log("  -9  " + 5) // -9 5
// console.log("  -9  " - 5) // -14
// console.log(null + 1) // 1
// console.log(undefined + 1) // NaN
// console.log(" \t \n" - 2) // -2
//
// console.log(5 > 4) // true
// console.log("ананас" > "яблоко") // true
// console.log('я'.charCodeAt())
// console.log("2" > "12") // false
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log(null == "\n0\n") // false
// console.log(null === +"\n0\n") // false
//
//
// let fruits = ['apple', 'banana', 'orange', 'apple', "banana"]
//
// let res = {}
//
// for (let i = 0; i < fruits.length; i++) {
//     if (res.hasOwnProperty(fruits[i])) {
//         res[fruits[i]] += 1
//     } else {
//         res[fruits[i]] = 1
//     }
// }
//
// const res1 = fruits.reduce((acc, el) => {
//     if (acc.hasOwnProperty(el)) {
//         acc[el] += 1
//     } else {
//         acc[el] = 1
//     }
//     return acc
// }, {})
//
// let numbers = [1, 4, 8, 0, 2, 4, 9, -1, 5, -9]
//
// let min = numbers[0]
// let max = numbers[0]
//
// for (let i = 0; i < numbers.length; i++) {
//     if (min > numbers[i]) min = numbers[i]
//     if (max < numbers[i]) max = numbers[i]
// }
//
// console.log(min, max)
//
// let user = {
//     name: "John",
//     sureName: 'Smith',
// };
//
// user.name = 'Pete'
// delete user.name
//
// console.log(user)
//
// function isEmpty(obj) {
//     for (let key in obj) return false
//     return true
// }
//
// console.log(isEmpty({}))
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// function sum(obj) {
//     let sum = 0
//     for (let key in obj) {
//         sum += obj[key]
//     }
//     return sum
// }
//
// console.log(sum(salaries))
//
//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }
//     }
// }
//
// console.log(multiplyNumeric(menu), menu)
//
// let obj1 = {name: 'Artyom'}
// let obj2 = {age: '26'}
// let obj3 = {sex: 'male'}
//
// console.log(Object.assign({}, obj1, obj2, obj3))
//
// let obj4 = {
//     name: 'Artyom',
//     address: {
//         country: 'Belarus',
//         city: 'Rechitsa'
//     }
// }
//
// // const clone = _.cloneDeep(obj4)
// // console.log(clone, 'clone')
//
// let calculator = {
//     a: null,
//     b: null,
//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }
//
// // alert(calculator.read())
// // alert(calculator.sum())
// // alert(calculator.mul())
//
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () {
//         alert(this.step);
//     }
// };
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// function Accumulator(startValue) {
//     this.value = startValue
//     this.read = function () {
//         let newValue = +prompt('Value?', '0')
//         this.value += newValue
//     }
// }
//
// const acc = new Accumulator(1)
// console.log(acc.value)
// console.log(acc.read())
// console.log(acc.value)


// console.log(255..toString(16))

// function readNumber() {
//     let a = +prompt('a?', '0')
//     let b = +prompt('b?', '0')
//
//     return a + b
// }
//
// console.log(readNumber())

// console.log(+6.35.toFixed(1) === 6.3)

// function readNumber() {
//     let value = prompt('value?')
//     if (value === '' || value === null) return null
//     if (isNaN(+value)) return readNumber()
//     return +value
//
// }
//
// console.log(readNumber())


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }
//
// console.log(random(5, 10))

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }
//
// console.log(ucFirst('вася'))
//
// function checkSpam(str) {
//     let toLowerCase = str.toLowerCase()
//     return toLowerCase.includes('viagra') || toLowerCase.includes('xxx');
//
// }
//
// console.log(checkSpam('byu'))
//
// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength) + '...'
//     }
//     return str
// }
//
// console.log(truncate("Всем привет!", 20))
//
// function extractCurrencyValue(str) {
//     return +str.slice(1)
// }
//
// console.log(extractCurrencyValue('$120'))
//
// let arr = [1, 2, 3]
// arr[10] = 10
// console.log(arr.length)

// function camelize(str) {
//     return str
//         .split('-')
//         .map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1))
//         .join('')
// }
//
// console.log(camelize("list-style-image"))
//
// let arr = [5, 2, 1, -10, 8]
//
// function filterRange(arr, a, b) {
//     return arr.filter(el => el >= a && el <= b)
// }
//
// console.log(filterRange(arr, 1, 4))
//
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1)
//             i--
//         }
//     }
// }

// filterRangeInPlace(arr, 1, 4)
// console.log(arr)

// console.log(arr.sort((a, b) => b - a))

// let arr = ["HTML", "JavaScript", "CSS"];
//
// function copySorted(arr) {
//     return [...arr].sort()
// }
//
// console.log(copySorted(arr))
// console.log(arr)

// function Calculator() {
//
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }
//     this.calculate = function (str) {
//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]
//         return this.methods[op](a, b)
//     }
//     this.addMethod = function (name, func) {
//         this.methods[name] = func
//     }
// }
//
//
// const calc = new Calculator()
// console.log(calc.addMethod('*', (a, b) => a * b))
// console.log(calc.addMethod('/', (a, b) => a / b))
// console.log(calc.calculate('2 / 2'))
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// users = users.map(el => el.name)
// console.log(users)

// let vasya = {name: "Вася", surname: "Пупкин", id: 1};
// let petya = {name: "Петя", surname: "Иванов", id: 2};
// let masha = {name: "Маша", surname: "Петрова", id: 3};
//
// let users = [vasya, petya, masha];
//
// newUsers = users.map(el => ({fullName: `${el.name} ${el.surname}`, id: el.id}))
// console.log(newUsers)

// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 28};
//
// let arr = [vasya, petya, masha];
//
// function sortByAge(arr) {
//     return arr.sort((a, b) => a.age - b.age)
// }
//
// sortByAge(arr)
//
// console.log(arr[0].name)
// console.log(arr[1].name)
// console.log(arr[2].name)

// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 29};
//
// let arr = [vasya, petya, masha];
//
// function getAverageAge(users) {
//     return users.reduce((acc, el) => {
//         return acc + el.age
//     }, 0) / users.length
// }
//
// console.log(getAverageAge(arr))
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// function unique(arr) {
//     // return arr.reduce((acc, el, index) => {
//     //     acc[el] = el
//     //     return acc
//     // }, [])
//     return [...new Set(arr)]
// }
//
// console.log(unique(strings))
//
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
//
// function groupById(arr) {
//     return arr.reduce((acc, el) => {
//         acc[el.id] = el
//         return acc
//     }, {})
// }
//
// console.log(groupById(users))

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };
//
// console.log(Array.from(arrayLike))


// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// function unique(arr) {
//     return [...new Set(arr)]
// }
//
// console.log(unique(values))
//
// let map = new Map();
//
// map.set("name", "John");
//
// let keys = map.keys();
//
// console.log(Array.from(keys))

// let obj = {name: 'Artyom'}
//
// let copyObj = obj
// obj = null
//
// console.log(copyObj)

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// function sumSalaries(salaries) {
//     return Object.entries(salaries). reduce((acc, el) => acc + el[1], 0)
// }
//
// console.log(sumSalaries(salaries))
//
// function count(obj) {
//     return Object.keys(obj).length
// }
//
// console.log(count(salaries))
//
// let guest = "Jane";
// let admin = "Pete";
//
// [guest, admin] = [admin, guest]
//
// console.log(guest, admin)
//
// let user = {
//     name: "John",
//     years: 30
// };
//
// let {name, age = user.years, isAdmin = false} = user
//
// console.log(name, age, isAdmin)

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
// };
//
// function topSalary(salaries) {
//     let max = 0
//     let nameMax = null
//     for(let [name, value] of Object.entries(salaries)) {
//         max < value ? max = value : max
//         nameMax = name
//     }
//     return nameMax
//
// }
//
// console.log(topSalary(salaries))