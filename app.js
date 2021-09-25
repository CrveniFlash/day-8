const addTodoBtn = document.querySelector('.add-btn')
const delTodoBtn = document.querySelector('.del-btn')
const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')

addTodoBtn.addEventListener('click', event => {
    event.preventDefault()
    //create elements
    let newDiv = document.createElement('div')
    let newLi = document.createElement('li')
    let newP = document.createElement('p')
    let newDelBtn = document.createElement('button')
    


    //appending elements
    let textNode = document.createTextNode(todoInput.value)
    newP.appendChild(textNode)
    newLi.appendChild(newP)
    newLi.appendChild(newDelBtn)
    newDiv.appendChild(newLi)
    


    //prevent entering emoty todo
    if (todoInput.value === '') {
        alert('Write something bruh..')
        return false;
    } else {
        todoList.appendChild(newDiv)
    }
    

    //del input upon submiting
    todoInput.value = ''
    //adding classes to created elements

    newDelBtn.className = 'del-btn bg-indigo-500 px-2 py-1 rounded-r'
    newP.className = 'todo-text pl-2 py-1 w-full rounded-l bg-white'
    newLi.className = 'add-transition flex items-center mb-2'
    newDiv.className = ''
    newDelBtn.innerText = 'DEL'


    //delete todo

    newDelBtn.addEventListener('click', event => {
        const item = event.target
        if (item.classList.contains('del-btn')) {
            const itemParent = item.parentElement
            itemParent.classList.add('add-anim')
            itemParent.addEventListener('transitionend', event => {
                newDiv.remove()
            })
        }

    })
})