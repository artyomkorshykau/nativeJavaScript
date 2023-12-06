//1. Publisher - Subscriber

// Для чего он нужен?
// Для того что бы узлы системы были минимально связаны.
// Позволяет увеличить масштабируемость.

//Publisher
class GlobalClock {
    sec = 0
    subscribers = []

    constructor() {
        // setInterval(() => {
        //     this.sec++
        //     console.log(`${this.sec} seconds!`)
        //     this.subscribers.forEach(el =>
        //         el(this.sec))
        // }, 1000)
    }

}

let globalClock = new GlobalClock()

//Subscriber
class UIClock {
    constructor() {
        this.el = document.createElement('div')
        document.body.appendChild(this.el)
    }

    render(sec) {
        this.el.innerHTML = sec
    }
}

let ui = new UIClock()
globalClock.subscribers.push(ui.render.bind(ui))


//2 Singleton
class Api {
    static singleton = null

    constructor() {
        if (Api.singleton != null) {
            return Api.singleton
        }
        Api.singleton = this
    }

    getUser() {
        console.log('Get')
    }

    createUser() {
        console.log('Set')
    }
}

console.log(new Api() === new Api()) // true


//3  Dependency injection
class Map {
    load() {
    }

    setMarker() {
    }

    setCenter() {
    }
}

class MapApp {
    constructor(map) {
        this.map = map
    }

    getShops() {
    }

    findShops() {
    }

    drawMap() {
        this.map.load()
        this.map.setCenter(1, 222, 2.111)
    }
}

class MapAdapter {
    constructor(map) {
        this.map = map
    }

    load() {
        this.map.start()
    }

    setMarker() {
        this.map.marker()
    }

    setCenter() {
        this.map.center()
    }
}

let map = new Map()
let mapAdapter = new MapAdapter(map)
let app = new MapApp(mapAdapter)

//Proxy
const dialog = {
    postMessage(message) {
        console.log(message)
    }
}

const proxyDialog = {
    postMessage(message) {
        if(message === 'fuck') message = 'f***'
        dialog.postMessage(message)
    }
}

proxyDialog.postMessage('fuck')