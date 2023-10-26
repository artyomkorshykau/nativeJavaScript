//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const yo = (a, b, c) => {
    return (a + c).repeat(b).slice(0, -1)
}
console.log(yo('yo', 3, ','))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true,
// если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
const inc = (a, b) => {
    return a.toLowerCase().slice(0, b.length) === b
}
console.log(inc('Incubator', 'inc'))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (a, b) => {
    return a.slice(0, b) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в
// предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord = (a) => {
    const array =  a.split(' ')
    const one =  array.map(el => el.length)
    const res = Math.min(...one)
    return a.length === 0 ? null : array.find(el => el.length === res)
}
console.log(getMinLengthWord(""))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase =(str) => {
    return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке
function isIncludes(str, substr) {
    str = str.toLowerCase();
    substr = substr.toLowerCase().split('');
    return substr.every(char => str.includes(char));
}

console.log(isIncludes("Incubator", "Cut"))
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true




