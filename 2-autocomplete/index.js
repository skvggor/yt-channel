const colors = [
  {
    id: 1,
    name: 'Vermelho',
    hexColor: '#f00'
  },
  {
    id: 2,
    name: 'Vermelho claro',
    hexColor: '#a83632'
  },
  {
    id: 3,
    name: 'Azul',
    hexColor: '#00f'
  },
  {
    id: 4,
    name: 'Verde',
    hexColor: '#14dba6'
  }
]

const input = document.querySelector('.input-color')
const list  = document.querySelector('.list-colors')

const onKeyUp = (event) => {
  const minimumChars = 1
  let selectedColors = ''

  if (event.target.value.length >= minimumChars) {

    colors.map((color) => {
      if (color.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
        selectedColors += `<li data-color="${color.hexColor}" data-id="${color.id}">${color.name}</li>`
      }
    })

  } else {
    list.innerHTML = ''
  }

  list.innerHTML = selectedColors

  const dataColors = document.querySelectorAll('[data-color]')

  const onClick = (event) => {
    const body = document.querySelector('body')

    body.style.backgroundColor = event.target.dataset.color
  }

  Array.from(dataColors).map((li) => {
    li.addEventListener('click', onClick)
  })
}

input.addEventListener('keyup', onKeyUp)
