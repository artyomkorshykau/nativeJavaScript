let arr = Array.of('Artyom')
console.log(arr)
console.log(Array.isArray(arr))

const arr1 = [
    'Artyom',
    'Masha',
    'Sonya'
]
console.log(arr1[arr1.length - 1])

console.log(arr1.push('Alex'))
console.log([...arr1, 'Alex'])
console.log(arr1[arr1.length] = 'Bob')
console.log(arr1)

arr1[3] = 'Alexandr'
// console.log(arr1)

// arr1.splice(3, 0, 'Alex')
const newArr = arr1.slice(0)
newArr.splice(3, 0, 'Nick')

console.log(newArr)

const log = arr1.forEach(el => console.log(el))

for (let el of arr1) {
    console.log(el)
}

let arr2 = []
for (let i = 0; i <= 100; i++) {
    arr2.push(i)
}

const res = arr2.reduce((acc, el) => {
    if (el >= 50) {
        return acc + el
    }
})

const arr3 = Array.from(Array(101).keys())

let value = null

arr3.forEach(el => {
    // if( el >= 50) {
    //     value += el
    // }
    value = value >= 50 ? value + el : el
})

console.log(value)

const arr4 = [
    1, 2, 3, 4, 5
]

const arr6 = ['Nick', 'Alex', 'Bob', 'John'];
for (let i = arr6.length - 1; i >= 0; i--) {
    console.log(arr6[i])
}

console.log(arr6.join(' '))

const arr7 = []

for (let i = 0; i < 20; i++) {
    arr7.push(Math.floor(Math.random() * 20) + 1)
}

console.log(arr7.sort((a, b) => a - b))
console.log(arr7.sort((a, b) => b - a))

let arr8 = [-3, -1, 1, 4, 8, -4, -8, 5, 0, 4, 10, -9, 34, 0]

let negative = []
let zero = []
let positive = []

for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] > 0) {
        positive.push(arr8[i])
    } else if (arr8[i] < 0) {
        negative.push(arr8[i])
    } else {
        zero.push(arr8[i])
    }
}

console.log(negative.concat(zero, positive))

console.log(arr8.filter((el) => el >= -1 && el <= 5).sort((a, b) => a - b))

console.log(arr8.map(el => el.toString()))
console.log(arr8.filter(el => el % 2 === 0))
console.log(arr8.find(el => el === 4))

// let pr = +prompt('Value?')
const findNumber = (num) => {
    let find = arr8.find(el => el === num)
    if (find) {
        console.log(num * 3)
    } else {
        console.log('Warning')
    }
}

// findNumber(pr)

const styles = ['Jazz', 'Blues']
styles.push('Rock`n`Roll')
styles[styles.length - 2] = 'Classics'
console.log(styles[0])
styles.shift()
styles.unshift('Rap', 'Reggae')


console.log(styles)

const str = 'rktkafmgtrkalfvkbtrkrt'
let r = 0
let k = 0
let t = 0

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'r') {
        r++
    } else if (str[i] === 'k') {
        k++
    } else if (str[i] === 't') {
        t++
    }
}

console.log(r, k, t)

const str1 = 'a big brown for jump over lazy dog'
const arr9 = str1
    .split(' ')
    .filter(el => el.length <= 3)

console.log(arr9)
