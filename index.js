ElEMENT_FROM_LIST = '.element'
BUTTON_DELETE = 'btnDelete'
const todoList = document.querySelector('#todoList')
const inputMessage = document.querySelector('#inputMessage')
const button = document.querySelector('#btnSend')

button.addEventListener('click', onButtonSendClick)
todoList.addEventListener('click', onTodoListClick)

function onButtonSendClick() {
    const message = getMessage()

    if (isMessageValid(message)){
        renderList(message)
        clear()
    } else {
        showError()
    }
}

function onTodoListClick(e) {
    const target = e.target
    const elementFromList = findElement(target)

    if (isButtonDelete(target)){
        elementFromList.remove()
    } else {
        if (elementFromList.style.backgroundColor === 'lightgreen'){
            elementFromList.style.backgroundColor = 'white'
        } else {
            elementFromList.style.backgroundColor = 'lightgreen'
        }
    }
}

function findElement(area) {
    return area.closest(ElEMENT_FROM_LIST)
}

function isButtonDelete(area) {
    return area.classList.contains(BUTTON_DELETE)
}

function getMessage() {
    return {
        text: inputMessage.value
    }
}

function isMessageValid(message) {
    return (message.text !== '')
}

function renderList(message) {
    const htmlElement = `<li class="element">
<span class="element__text">${message.text}</span>
<button class="btnDelete">Delete</button></li>`

    todoList.insertAdjacentHTML('beforeend', htmlElement)
}

function clear() {
    inputMessage.value = ''
}

function showError() {
    alert('Введите сообщение!')
}