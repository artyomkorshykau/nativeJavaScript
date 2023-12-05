function Foo(name) {
    this.name = name
    return this
}

Foo.prototype.sayName = function () {
    console.log(this.name)
}

// console.dir(Foo)


class Animal {
    constructor(name = 'Animal') {
        this.name = name
    }

    walk() {
        console.log(`${this.name} walking`)
    }

    eat() {
        console.log(`${this.name} eating`)
    }

    sleep() {
        console.log(`${this.name} sleeping`)

    }
}

const animal = new Animal('Masha')

// animal.walk()

class Monkey extends Animal {
    constructor(name = 'Monkey') {
        super(name);
        this.name = name
    }

    roar() {
        console.log(`${this.name} roar!`)
    }

    climb() {
        console.log(`${this.name} climb!`)
    }
}

const monkey = new Monkey('Artyom')

// monkey.climb()

class Human extends Monkey {
    constructor(name = 'Human') {
        super(name);
        this.name = name
    }

    speak() {
        console.log(`${this.name} speak!`)
    }

    think() {
        console.log(`${this.name} think!`)
    }
}

const human = new Human()

human.eat()

let test = {
    name: 'Mash',
    sayName: function () {
        console.log(this.name)
    }
}

let context = {
    name: 'Artyom'
}

Function.prototype.customBind = function (context, ...args) {
    context.this = this
    return function (...rest) {
        context.this(context, [...args, ...rest])
    }
}

const res = test.sayName.customBind(context)
res()
console.log(context)

