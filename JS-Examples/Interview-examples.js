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