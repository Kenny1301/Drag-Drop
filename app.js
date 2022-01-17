//получение элемента из DOM-дерева.
const item = document.querySelector('.item')
//создаем события при начале перетягивания(start-начало, end-конец)
const placeholders = document.querySelectorAll('.placeholder')
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)
//добавление событий для перетаскивая.
for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)//элемент над холлдером
    placeholder.addEventListener('dragenter', dragenter)//элемент на територии
    placeholder.addEventListener('dragleave', dragleave)//перетащили, но вышли
    placeholder.addEventListener('drop', dragdrop)// отпустили
}

function dragstart(e) {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragend(e) {
    e.target.classList.remove('hold', 'hide')
}
//создание функций для обработки событий.
function dragover(e) {
    e.preventDefault()
}

function dragenter(e) {
    e.target.classList.add('hovered')
}

function dragleave(e) {
    e.target.classList.remove('hovered')
}

function dragdrop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
}
