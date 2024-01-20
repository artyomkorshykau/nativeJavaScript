"use strict";

// function sumary(a) {
//     console.log(a)
//     return function (b) {
//         return sumary(a + b)
//     }
// }
//
// sumary(5)(10)(5)

// function mergeKeys(obj1, obj2) {
//     // let objKeys1 = Object.keys(ob1)
//     // let objKeys2 = Object.keys(ob2)
//     //
//     // for (let i = 0; i < objKeys1.length; i++) {
//     //     let key1 = objKeys1[i]
//     //     for (let j = 0; j < objKeys2.length; j++) {
//     //         let key2 = objKeys2[j]
//     //         if (key1 === key2) {
//     //             ob1[key1] = ob2[key2]
//     //         }
//     //     }
//     // }
//
//     for (let keys in obj1) {
//         if (obj2.hasOwnProperty(keys)) {
//             obj1[keys] = obj2[keys]
//         }
//     }
//     return obj1
// }
//
// let foo = {
//     foo: 'foo',
//     bar: 'bar'
// }
//
// let bar = {
//     foo: 'popka',
//     some: 'some'
// }
//
// console.log(mergeKeys(foo, bar))

// function floor(arr, callback) {
//     let res = {}
//     // for (let i = 0; i < arr.length; i++) {
//     //     res[callback(arr[i])] = arr[i]
//     // }
//     arr.forEach(el => res[callback(el)] = [el])
//     return res
// }
//
// console.log(floor([3.3, 4.3, 6.5], Math.ceil))

// const START = Date.now()
//
// function someFn() {
//     console.log('time', Date.now() - START)
//     console.log('args', arguments)
// }
//
// Function.prototype.delay = function (ms) {
//     return (...args) => {
//         setTimeout(() => {
//             this.call(this, ...args)
//         }, ms)
//     }
// }
//
// const f = someFn.delay(1500)
//
// f('arg1', 'arg2', 'arg3', 'arg4')

// const tree = [
//     {
//         v: 5,
//         c: [
//             {
//                 v: 10,
//                 c: [
//                     {
//                         v: 11
//                     }
//                 ]
//             },
//             {
//                 v: 7,
//                 c: [
//                     {
//                         v: 5,
//                         c: [
//                             {
//                                 v: 1
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         v: 5,
//         c: [
//             {
//                 v: 10,
//             },
//             {
//                 v: 15
//             }
//         ]
//     }
// ]
//
// const recursion = (tree) => {
//     debugger
//     let res = 0
//     tree.forEach(el => {
//         res += el.v
//         if (!el.c) {
//             return el.v
//         }
//         res += recursion(el.c)
//     })
//     return res
// }
//
// console.log(recursion(tree))
// console.log(tree)

// -----------------------------CUSTOM MAP METHOD-----------------------------
// let arr = ['apple', 'banana', 'orange']
//
// Array.prototype.myMap = function (callback) {
//     const res = []
//     for (let i = 0; i < this.length; i++) {
//         res[i] = callback(this[i], i, this)
//     }
//     return res
// }
//
// const res = arr.myMap((el) => el.toUpperCase())
//
// console.log(res)

// function palindrome(word) {
//     word = word.toLowerCase()
//     return word === word.split('').reverse().join('')
// }
//
// console.log(palindrome('APPPA'))
//

// function someFn(str) {
//     let leftBrackets = 0
//     let rightBrackets = 0
//
// }
//
// console.log(someFn('()[{dg(((f}'))


// const originArr = (arr) => {
//     const obj = {}
//     const res = []
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr[i] in obj)) {
//             obj[arr[i]] = 1
//         } else {
//             obj[arr[i]] += 1
//         }
//     }
//
//     Object.keys(obj).forEach(el => {
//             if (obj[el] === 1) {
//                 res.push(el)
//             }
//         }
//     )
//
//     return res
// }
//
// console.log(originArr([1, 1, 2, 3, 3, 4, 5, 1, 3]))

// function User(name, age) {
//     this.name = name
//     this.age = age
//
//     return this
// }
//
// console.log(new User('Artyom', 26))


// const fetchURL = function (url) {
//     console.log(`fetching ${url}... ${this.name}`)
// }
//
// const user = {
//     name: 'Artyom'
// }
//
// function debounce(callback, delay) {
//     let timer
//     return (...args) => {
//         clearTimeout(timer)
//         timer = setTimeout(() => callback(...args), delay)
//     }
// }
//
// const fetching = debounce(fetchURL.bind(user), 3000)
//
// fetching(1)
// fetching(2)
// fetching(3)




