const task1 = new Promise((res, rej) => {
    console.log('task1')
})

console.log(task1)


const task2 = Promise.resolve('Promise Data')
    .then(res => {
        console.log(res)
    })

const task3 = new Promise((res, rej) => {
    rej('Promise Error')
})

task3.then(null, console.log)

const task4 = new Promise((res, rej) => {
    setTimeout(res, 3000, 'Promise Resolve')
})

task4.then(console.log)

const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}

const create = document.getElementById('create')
const resolve = document.getElementById('resolve')
const reject = document.getElementById('reject')

const createPromiseHandler = () => {
    handlePromise.promise = new Promise((res, rej) => {
        handlePromise.resolve = res
        handlePromise.reject = rej
    })
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)
    console.log('Promise created!')
}

const resolvePromiseHandler = () => {
    handlePromise.resolve('Success')
}

const rejectPromiseHandler = () => {
    handlePromise.reject('Error')
}

create.addEventListener('click', createPromiseHandler)
resolve.addEventListener('click', resolvePromiseHandler)
reject.addEventListener('click', rejectPromiseHandler)

const task6 = new Promise((res, rej) => {
    setTimeout(res, 1000, 'My name is')
})

const onSuccess = (value) => {
    return console.log(`${value} Artyom`)
}

const print = (value) => {
    return console.log(value)
}

task6.then(onSuccess)
task6.then(print)

const task7 = new Promise((res, rej) => {
    setTimeout(res, 2000, {name: 'Anna'})
})

const task8 = new Promise((res, rej) => {
    setTimeout(res, 3000, {age: '16'})
})

const task9 = new Promise((res, rej) => {
    setTimeout(res, 4000, {city: 'Minsk'})
})


Promise.all([task7, task8, task9])
    .then(res => console.log({...res[0], ...res[1], ...res[2]}))

