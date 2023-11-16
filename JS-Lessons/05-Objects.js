console.log(Object.create(null, {name: {value: 10}}))
console.log(Object.fromEntries([['name', 'Artyom']]))

const obj = {name: 'Artyom', 'some long key': 10}

console.log(obj.name)
console.log(obj["some long key"])

let someName = 'Artyom'
let someAge = 26
let obj1 = {
    someName,
    someAge
}
console.log(obj1.some)
console.log('some' in obj1)
console.log(Object.assign({}, obj, obj1))
console.log(Object.entries(obj1))

const bird = {
    size: 'small'
}

const mouse = {
    name: "Mickey",
    small: true
}

// console.log(mouse.bird)
// console.log(mouse.bird.size)
// console.log(mouse[bird['size']])

let c = {greeting: ' Hey!'}
let d = c
let someArray = [c, d]
c = null
d = null
console.log(someArray)

const isEmpty = (obj) => !Object.keys(obj).length

// console.log(isEmpty({name: 'Artyom'}))

const obj2 = {
    John: 5,
    Bob: 5,
    Nick: 10,
    name: 'Artyom'
}
const salarySum = (obj) => {
    if (Array.isArray(obj) || !Object.keys(obj).length) {
        console.log('Error')
    } else {
        return Object.values(obj).reduce((acc, el) => acc + el)
    }
}

// console.log(salarySum({}))

const multiplyNumericObjectFields = (obj, factor) => {

    const values = Object.entries(obj)
    values.forEach(el => {
        if (typeof el[1] === 'number') {
            obj[el[0]] = el[1] * factor
        }
    })
    return obj
}

console.log(multiplyNumericObjectFields(obj2, 2))
console.log(obj2)

