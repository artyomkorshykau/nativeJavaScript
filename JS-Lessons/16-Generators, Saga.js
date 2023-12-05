async function sleep(ms) {
    return new Promise(async (res) => {
        await setTimeout(() => {
            console.log(ms)
            res()
        }, ms * 100)
    })
}

async function show() {
    await sleep(1)
    await sleep(2)
    await sleep(3)
    await sleep(4)
    await sleep(5)
}

// show()

Number.prototype[Symbol.iterator] = function () {
    let temp = this
    return {
        next() {
            if (temp >= 0) {
                return {
                    done: false,
                    value: temp--
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const res = [...3]

// console.log(res)

function* gnExample() {
    yield 10
    yield 20
    yield 30
    yield 40
    yield 50
}

const gnExampleRes = gnExample()
console.log(gnExampleRes.next().value)
console.log(gnExampleRes.next().value)
console.log(gnExampleRes.next().value)
console.log(gnExampleRes.next().value)
console.log(gnExampleRes.next().value)

function* gnExample1() {
    let answer = yield '2 + 2 = ?'
    if (answer === '4') {
        console.log('true')
    } else {
        console.log('false')
    }
}

const gnExample1Res = gnExample1()
const question = gnExample1Res.next().value

// gnExample1Res.next(prompt(question))

function* gnExample2(start, end) {
    let current = start
    while (current < end) {
        yield current++
    }
}

const gnExample2Res = gnExample2(0, 5)
console.log(gnExample2Res.next().value)
console.log(gnExample2Res.next().value)

const arr = Array.from((10), (value, i) => i)
console.log(arr)

function*  gnExample3() {
    yield
}
