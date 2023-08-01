const students = [
    {name: "Bob", age: 22, isMarried: true, scores: 85},
    {name: "Alex", age: 21, isMarried: true, scores: 90},
    {name: "Nick", age: 20, isMarried: false, scores: 120},
    {name: "John", age: 19, isMarried: false, scores: 100},
    {name: "Helen", age: 20, isMarried: false, scores: 110},
    {name: "Ann", age: 20, isMarried: false, scores: 105}
];

const student = {
    name: "Bob", age: 23, isMarried: false, friends: ["Alex", "Nick", "John"],
};


//1. Поверхностная копия student
let studentCopy = {...student}

//2. Полная (глубокая) копия student
let studentDeepCopy = {...student, friends: [...student.friends]}

//3. Поверхностная копия students
let studentsCopy = [...students]

//4*. Полная (глубокая) копия students
let studentsDeepCopy = students.map(st => {
    return {...st, name: st.name, age: st.age, isMarried: st.isMarried, scores: st.scores}
})

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
let scoreSort = studentsDeepCopy.sort(function (a, b) {
    return b.scores - a.scores
})

//5a. Отсортируйте студентов по алфавиту
let sortName = studentsDeepCopy.sort(function (a, b) {
    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0
})


//6. Сформируйте массив студентов, у которых 100 и более баллов
let filterScores = students.filter(f => f.scores > 100)

//6a.Сформируйте массив из трёх лучших студентов
let bestStudents = studentsDeepCopy.sort(function (a, b) {
    return b.scores - a.scores
})
const res = bestStudents.slice(0, 3)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
const concatStudents = studentsDeepCopy.concat(res).sort(function (a, b) {
    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0
})

//7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter(f => f.isMarried === false)

//8. Сформируйте массив имён студентов
const arrayNamesStudents = students.map(el => [el.name])

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
const connectNames = arrayNamesStudents.join(' ')
// - запятой
const connectNames1 = arrayNamesStudents.join(',')

//9. Добавьте всем студентам свойство "isStudent" со значением true
const updateArrayStudents = students.map(st => {
    return {...st, name: st.name, age: st.age, isMarried: st.isMarried, scores: st.scores, isStudents: true}
})

//10. Nick женился. Выполните преобразование массива students
const nickIndex = updateArrayStudents.findIndex(el => el.name === 'Nick')
if (nickIndex !== -1) {
    updateArrayStudents[nickIndex].isMarried = true
}
//11. Найдите Студентку по имени Ann
const findAnn = updateArrayStudents.find(el => el.name === 'Ann')

//12. Найдите студента с самым высоким баллом
let bestStudent = studentsDeepCopy.sort(function (a, b) {
    return b.scores - a.scores
})
const bestStudentRes = bestStudent[0]

//12a. Найдите 2 студента с самым высоким баллом
let twoBestStudents = studentsDeepCopy.sort(function (a, b) {
    return b.scores - a.scores
})
const twoBestStudentsRes = bestStudent.slice(0, 2)

//13. Найдите сумму баллов всех студентов
let sum = concatStudents.reduce((acc, currentValue) => acc + currentValue.scores, 0)

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив,
// при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных
// студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriend = (students) => {

    return students.map(el => {
        const arrayNamesStudents = students.map(st => st.name);
        const friends = arrayNamesStudents.filter(name => name !== el.name);
        return {
            ...el,
            name: el.name,
            age: el.age,
            isMarried: el.isMarried,
            scores: el.scores,
            friends: friends
        }
    })
}
