class User {
    constructor(name, city, job) {
        this.name = name
        this.city = city
        this.job = job
    }

    hello() {
        console.log(`iam ${this.name} from ${this.city} iam worked in ${this.job}`)
    }
}

const hello = new User('Artyom', 'Belarus', 'Google')
console.log(hello.hello())

console.log(({}).prototype === ({}).__proto__)  // 01 true

function ITKamasutra() {
}

console.log(ITKamasutra.prototype === ITKamasutra.__proto__) // 02 false

function ITIncubator() {
}

function ITKamasutra() {
}

console.log(ITKamasutra.prototype)
console.log(ITKamasutra.__proto__ )

let Component = (props) => {
    return 'Prototype'
}
console.log(Component.prototype === Object.prototype)

let age = 18
console.log(age.prototype === Number.prototype)
console.log(age.__proto__ === Number.prototype)

let artyom = {name: "Artyom"}

console.log(artyom.toString())
