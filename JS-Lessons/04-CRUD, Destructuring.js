// Ассоциативный массив, CRUD операции

const todoListId1 = crypto.randomUUID()
const todoListId2 = crypto.randomUUID()

const todolists = [
    {
        id: todoListId1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListId2,
        title: 'What to buy',
        filter: 'all',
    }
]

const tasks = {
    [todoListId1]: [
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'TS', isDone: true},
        {id: 3, title: 'React', isDone: true}
    ],
    [todoListId2]: [
        {id: 1, title: 'Beer', isDone: true},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Meat', isDone: true}
    ]
}

const addTodoList = (title) => {
    const todoListId3 = crypto.randomUUID()
    const newTodos = {id: 1, title: title, filter: 'all'}

    // setState
    const newStateTodo = [...todolists, newTodos]
    const newTaskState = {...tasks, [todoListId3]: []}
}
const deleteTodoList = (todoId) => {
    // setState
    const updateTodoState = todolists.filter(el => el.id !== todoId)
    const copyState = {...tasks}
    delete copyState[todoId]
}

const addTask = (todoId, taskTitle) => {
    const newTask = {id: 1, title: taskTitle, isDone: false}
    // setState
    const newTaskState = {...tasks, [todoId]: [...tasks[todoId], newTask]}
}

const changeTaskTitle = (todoId, taskId, title) => {
    const updateTask = tasks[todoId].map(el => el.id === taskId ? {
        ...tasks, title: title
    } : el)
    const updateTaskState = {...tasks, [todoId]: updateTask}
}

const newObj = todolists.reduce((acc, el) => {
    acc[el.id] = el
    delete acc[el.id].id
    return acc
}, {})

console.log(newObj)

// let [, , , , , , , , nine, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// console.log(nine)
// console.log(rest)

const foo = (...args) => {
    console.log(args)
}

let arr = [1, 2, 3]
foo(...arr)


let someArr = [1, 2, 3, 4, 5, 6, 7]
let [first, , third] = someArr
let [, , , ...rest] = someArr
someArr = [0, ...someArr]
someArr = [...someArr, 8]
someArr = [-1, ...someArr, 9]

console.log(someArr)

const sum = (...args) => args.reduce((acc, el) => acc + el)

sum(...someArr)

let man = {
    name: 'Artyom',
    age: 26,
    hasHighEducation: true,
    isHealthy: true,
    accountBalance: 0
}

const {name, age, ...remain} = man
man.isGreedy = true
const personAge = man.age
console.log(personAge)

const myName = ({name}) => console.log(`My name is ${name}`)

myName(man)

let classes = [
    [
        {name: 'Peter', age: 10, grade: 5, isExcellent: false},
        {name: 'Kate', age: 11, grade: 5, isExcellent: true},
        {name: 'Olga', age: 9, grade: 5, isExcellent: false},
        {name: 'Greg', age: 5, grade: 5, isExcellent: false}
    ],
    [
        {name: 'Kevin', age: 15, grade: 9, isExcellent: false},
        {name: 'Patrick', age: 14, grade: 9, isExcellent: false},
        {name: 'Ann', age: 15, grade: 9, isExcellent: true},
        {name: 'Julia', age: 14, grade: 9, isExcellent: true}
    ],
    [
        {name: 'John', age: 13, grade: 7, isExcellent: true},
        {name: 'Sofia', age: 12, grade: 5, isExcellent: false},
        {name: 'Maria', age: 14, grade: 5, isExcellent: true},
        {name: 'Joseph', age: 13, grade: 5, isExcellent: false}
    ]
]

classes.forEach(el => {
    el.forEach(item => {
        return item.grade === 5 ? item.grade = 6 : item
    })
})


const bestStudents = []

classes.forEach(el => {
    el.forEach(item => {
        item.isExcellent ? bestStudents.push(item) : null
    })
})

console.log(bestStudents)

const newClasses = []

classes.forEach(el => {
    el.forEach(item => {
        item.age >= 10 && item.age <= 15 ? newClasses.push(item) : null
    })
})


const newClasses2 = classes.map(el => el.filter(item => item.isExcellent)).flat()

console.log(newClasses2)