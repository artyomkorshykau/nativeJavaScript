// ----------FULL COPY OBJECT(DEEP COPY)--------------------------------------

let state = {
    name: 'inc.com',
    age: 1,
    school: {
        students: [{}, {}, {}],
        address: ' Minsk',
        director: {
            name: 'Andrey'
        }
    }
}
let copyState = {
    ...state, school: {
        ...state.school, students: state.school.students.map(el => ({...el})), director: {...state.school.director}
    }
}

let array = [{name: 'Artyom', age: {title: 26}}, {name: 'Masha'}]
let copyArray = array.map(el => {
    return {...el, age: {...el.age}}
})

