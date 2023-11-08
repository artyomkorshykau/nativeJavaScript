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


