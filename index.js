const column1 = document.querySelector('.column-1')
const column2 = document.querySelector('.column-2')
const addButton = document.querySelector('#add')
let inputs = document.querySelectorAll('input')


let addButtonFunction = () => {
  let placementBox = document.createElement('div')
  placementBox.classList.add('placement-box')
  column1.appendChild(placementBox)

  let creationBox = document.createElement('div')
  let input = document.createElement('input')
  input.setAttribute('placeholder', 'Enter item...')
  creationBox.classList.add('creation-box')
  creationBox.appendChild(input)
  column2.insertBefore(creationBox, addButton)
  inputs = document.querySelectorAll('input')

  activateInputs(inputs)
}

let activateInputs = (inputs) => {
  inputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      parentNode = input.parentNode
      if (e.keyCode == 13) {
        parentNode.innerText = input.value
        parentNode.className += ' padding'
      }
      input.parentNode.classList.add('active')
    })
  })
}

let allowDrop = (e) => {
  e.preventDefault()
}

let drag = (e) => {
  e.dataTransfer.setData('text', e.target.id)
}

let drop = (e) => {
  e.preventDefault()
  let data = e.dataTransfer.getData('text')
  e.target.appendChild(doccument.getElementById(data))
}

$('#add').on('click', addButtonFunction)

activateInputs(inputs)
