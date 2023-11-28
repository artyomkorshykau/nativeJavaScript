function sum(value) {
    return function (value2) {
        return function (value3) {
            return value + value2 + value3
        }
    }
}

// console.log(sum(3)(6)(3))

function makeCounter(arg) {
    let num = arg
    return {
        increase: () => ++num,
        decrease: () => --num,
        reset: () => num = 0,
        set: (value) => num = value,
        superReset: () => num = arg

    }
}

// const newCounter = makeCounter(12)
// console.log(newCounter.increase())
// console.log(newCounter.decrease())
// console.log(newCounter.reset())
// console.log(newCounter.set(5))
// console.log(newCounter.increase())
// console.log(newCounter.superReset())

class Counter {
    constructor(count) {
        this.count = count
    }

    increase = () => {
        return ++this.count
    }
    decrease = () => {
        return --this.count
    }
    reset = () => {
        return this.count
    }
    set = (value) => {
        return this.count = value
    }
    superReset = () => {
        return this.count = 0
    }

}

const counter = new Counter(5)

// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.decrease())
// console.log(counter.decrease())
// console.log(counter.superReset())
// console.log(counter.set(5))

function superSum(arg) {
    if (arg === 0) return arg
    if (arg === 1) return (a1) => a1

    let args = []

    function helper(...nums) {
        args = [...args, ...nums]
        if (args.length >= arg) {
            args.length = arg
            return args.reduce((acc, el) => {
                return acc + el
            })
        } else {
            return helper
        }
    }

    return helper
}

// console.log(superSum(3)(2)(5)(3))
// console.log(superSum(3)(2)(5, 3))
// console.log(superSum(4)(2)(5)(3, 6)(1))

function sumTo(value) {
    if (value === 1) return 1
    return value + sumTo(value - 1)
}

// console.log(sumTo(3))
// console.log(sumTo(4))
// console.log(sumTo(5))
