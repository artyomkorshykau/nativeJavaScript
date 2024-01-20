// ----------------------BINARY SEARCH----------------------

// const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let count = 0
// function binarySearch(arr, el) {
//
//     let start = 0
//     let end = arr.length
//     let middle
//     let isFound = false
//     let position = -1
//
//     while (isFound === false && start <= end) {
//         count += 1
//         middle = Math.floor((start + end) / 2)
//         if (arr[middle] === el) {
//             isFound = true
//             position = middle
//             return position
//         }
//         if (el < arr[middle]) {
//             end = middle - 1
//         }
//         if (el > arr[middle]) {
//             start = middle + 1
//         }
//     }
//     return position
// }
//
// console.log(binarySearch(arrayNums, 10), 'index of search element')
// console.log(count, 'quantity iteration')


// ----------------------SELECTION SORT----------------------
// let arrayNums = [9, 8, 7, 6, 5, 4, 3, -2, -5, -7, -9, 1, 2, 10, -1, -2, -3, -4, -6, -8, -10]
// let count = 0
//
// function selectionSort(arr) {
//
//     for (let i = 0; i < arr.length; i++) {
//         let indexMin = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[indexMin]) {
//                 indexMin = j
//             }
//             count += 1
//         }
//
//         let temp = arr[i]
//         arr[i] = arr[indexMin]
//         arr[indexMin] = temp
//     }
//     return arr
// }
//
// console.log(selectionSort(arrayNums))
// console.log(count, 'quantity iteration')


// ----------------------BUBBLE SORT----------------------
// let arrayNums = [9, 8, 7, 6, 5, 4, 3, -2, -5, -7, -9, 1, 2, 10, -1, -2, -3, -4, -6, -8, -10]
// let count = 0
//
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j + 1] < arr[j]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//         count += 1
//     }
//     return arr
// }
//
// console.log(bubbleSort(arrayNums))
// console.log(count, 'quantity iteration')


// ----------------------QUICK SORT----------------------
// let arrayNums = [9, 8, 7, 6, 5, 4, 3, -2, -5, -7, -9, 1, 2, 10, -1, -2, -3, -4, -6, -8, -10]
// let count = 0
//
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//
//     let pivotIndex = Math.floor(arr.length / 2)
//     let pivotEl = arr[pivotIndex]
//     let less = []
//     let greater = []
//
//     for (let i = 0; i < arr.length; i++) {
//         count += 1
//         if (arr[i] === pivotEl) continue
//         if (arr[i] < pivotEl) less.push(arr[i])
//         if (arr[i] > pivotEl) greater.push(arr[i])
//     }
//     return [...quickSort(less), pivotEl, ...quickSort(greater)]
// }
//
// console.log(quickSort(arrayNums))
// console.log(count, 'quantity iteration')


// ----------------------TREE ALGS----------------------

// const tree = [
//     {
//         value: 1,
//         child: [
//             {
//                 value: 2,
//                 child: [
//                     {
//                         value: 7,
//                         child: [
//                             {
//                                 value: 9,
//                                 child: [
//                                     {
//                                         value: 10,
//                                         child: []
//                                     },
//                                 ]
//                             },
//                         ]
//                     },
//                     {
//                         value: 3,
//                         child: [
//                             {
//                                 value: 1,
//                                 child: []
//                             },
//                         ]
//                     },
//                     {
//                         value: 2,
//                         child: []
//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         value: 5,
//         child: [
//             {
//                 value: 4,
//                 child: [
//                     {
//                         value: 6,
//                         child: []
//                     },
//                     {
//                         value: 1,
//                         child: []
//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         value: 10,
//         child: []
//     },
// ]
//
// function sumValue(tree) {
//     let sum = 0
//     tree.forEach(el => {
//         sum += el.value
//         if (!el.child) {
//             return el.value
//         }
//
//         sum += sumValue(el.child)
//     })
//     return sum
// }
//
// console.log(sumValue(tree))
