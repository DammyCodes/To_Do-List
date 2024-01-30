const inputBtn = document.querySelector('.input-btn')

const inputField = document.querySelector('.input-field')

const displayList = document.querySelector('.display-list')

let listItem = []
inputBtn.addEventListener('click', function() {
   
    if (inputField.value) {
        listItem.push(inputField.value)
        render()
    }
    inputField.value = ''
})

function render() {
    let list = ``
    for (let item of listItem) {
        list += `
            <li>${item}</li>
        `
    }
    displayList.innerHTML = list
}