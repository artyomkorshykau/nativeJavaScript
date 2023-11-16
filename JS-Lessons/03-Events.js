// Всплытие, погружение, делегирование

const small = document.getElementById('small')
const medium = document.getElementById('medium')
const large = document.getElementById('large')

const smallHandler = (event) => {
    // Убираем всплытие
    event.stopPropagation()
    if (event.target.tagName === 'BUTTON') {
        alert(`${event.target.id} button was pressed`)
    } else {
        alert('small div was pressed')
    }

}
const mediumHandler = (event) => {
    event.stopPropagation()
    alert('medium div was pressed')
}
const largeHandler = () => {
    alert('large div was pressed')
}

const event = (event) => {
    console.log(event.currentTarget)
}

small.addEventListener('click', smallHandler)
medium.addEventListener('click', mediumHandler)
large.addEventListener('click', largeHandler)

const a = document.getElementById('src')

a.addEventListener('click', (event) => {
    // Убираем дефолтное поведение у ссылки
    event.preventDefault()
    alert('Link was pressed')
})

// Этапы события при нажатии на элемент

// Погружение
// Захват, Capturing
// Всплытие

