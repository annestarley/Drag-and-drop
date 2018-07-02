const column1 = document.querySelector('.column-1')
const column2 = document.querySelector('.column-2')
const addButton = document.querySelector('#add')
const inputs = document.querySelectorAll('inputs')

addButton.addEventListener('click', () => {
  let placementBox = document.createElement('div')
  placementBox.classList.add('placement-box')
  column1.appendChild(placementBox)

  let creationBox = document.createElement('div')
  let input = document.createElement('input')
  input.setAttribute('placeholder', 'Enter item...')
  creationBox.classList.add('creation-box')
  creationBox.appendChild(input)
  column2.appendChild(creationBox)
})

// inputs.addEventListener('keypress', e => {
//   let key = e.which || e.keyCode;
//   if (key === 13) console.log('enter');
// })
