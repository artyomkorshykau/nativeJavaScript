interface IPersonClass {
    name: string
    age: number
    city: string
}

interface ISpeakPerson extends IPersonClass {
    greeting: () => void
}

class Person implements IPersonClass {
    name: string
    age: number
    city: string

    constructor(name, age, city) {
        this.name = name
        this.age = age
        this.city = city
    }
}

class AngryPerson extends Person implements ISpeakPerson {
    constructor(name, age, city) {
        super(name, age, city);
    }

    greeting() {
        console.log('Hi')
    }
}

class SuperTest {
    private _name: string

    constructor() {
        this._name = ''
    }

    get() {
        console.log(this._name)
    }

    set(name: string) {
        this._name = name
    }
}

interface IStatic {
    name: string
    sureName: string
}

class Static implements IStatic {
    static greet = 'I`am'
    name: string
    sureName: string

    constructor(name: string, sureName: string) {
        this.name = name
        this.sureName = sureName
    }

    static getFullName(obj: IStatic) {
        return `${this.greet} ${obj.name} ${obj.sureName}`
    }
}

const testStatic = new Static('Artyom', 'Korshykau')
Static.getFullName(testStatic)

// Task 1

interface IVehicle {
    isStartEngine: boolean
    isMoving: boolean
    speed: number
    startEngine: () => void
    stopEngine: () => void
    startMoving: (maxSpeed?: number) => void
    stopMoving: () => void
}

class Vehicle implements IVehicle {
    isStartEngine: boolean
    isMoving: boolean
    speed: number

    constructor() {
        this.isStartEngine = false
        this.isMoving = false
        this.speed = 0
    }

    startEngine() {
        if (this.isStartEngine) {
            console.log('Engine is already launched!')
        } else {
            this.isStartEngine = true
            console.log('Engine is launched!')
        }
    }

    stopEngine() {
        if (!this.isStartEngine) {
            console.log('Engine is already stopped!')
        } else if (this.isMoving) {
            console.log('Need to stop the car')
        } else {
            this.isStartEngine = false
            console.log('Engine is stopped!')
        }
    }

    startMoving(maxSpeed: number = 150) {
        if (!this.isStartEngine) {
            console.log('Need to start engine!')
        } else if (this.isMoving) {
            console.log('You already moving!')
        } else {
            this.isMoving = true
            console.log('Lets move!')
        }
    }

    stopMoving() {
        if (this.speed === 0) {
            console.log('You already stopped!')
        } else if (this.isMoving) {
            this.isMoving = false
            console.log('You stopped!')
        }
    }
}

class Motorbike extends Vehicle {
    maxSpeed: number

    constructor(

    ) {
        super();
        this.maxSpeed = 200
    }

    burnout() {
        console.log('RATATATATATA')
    }
}

class Car extends Vehicle {
    maxSpeed: number

    constructor() {
        super();
        this.maxSpeed = 180
    }

    beep() {
        console.log('Beeeeeeep!')
    }
}

const motorbike = new Motorbike()
const car = new Car()

motorbike.startMoving()
car.startMoving()


