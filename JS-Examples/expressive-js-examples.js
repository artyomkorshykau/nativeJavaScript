//Closure

function one(factor) {
    return function two(num) {
        return factor * num
    }
}

const oneRes = one(2)
// console.log(oneRes(5))

//Recursion
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// console.log(power(2, 2));

function zeroPad(quantity, width) {
    let quantityString = String(quantity)
    while (quantityString.length < width) {
        quantityString = `0${quantityString}`
    }
    return quantityString
}

function printFarmInventory(cows, chickens, pigs, monkeys) {
    console.log(zeroPad(cows, 3) + ' Cows!')
    console.log(zeroPad(chickens, 3) + ' Chickens!')
    console.log(zeroPad(pigs, 3) + ' Pigs!')
    console.log(zeroPad(monkeys, 3) + ' Monkeys!')
}

// printFarmInventory(5, 5, 5, 5)

function isEven(num) {
    if (num % 2 === 0) console.log('true')
    if (num % 2 !== 0) console.log('false')
}

// isEven(-4)

function countBs(str, char) {
    console.log(str.split('').filter(el => el === char).length)
}

// countBs('Быть или не быть вот в чём вопрос.', 'о')

function range(start, end, step = 1) {
    let res = []
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            res.push(i)
        }
    }
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            res.push(i)
        }
    }
    return res
}

// console.log(range(5, 2, -1))

function sum(arr) {
    console.log(arr.reduce((acc, el) => acc + el))
}

// sum(range(1, 10, 2))


