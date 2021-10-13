const colors = [
  {
    id: 1,
    name: 'Vermelho',
    hexColor: '#f00'
  },
  {
    id: 2,
    name: 'Verde 0',
    hexColor: '#003322'
  },
  {
    id: 3,
    name: 'Verde 1',
    hexColor: '#00ff33'
  },
  {
    id: 5,
    name: 'Verde 2',
    hexColor: '#00dba6'
  },
  {
    id: 6,
    name: 'Verde 3',
    hexColor: '#aadba1'
  },
  {
    id: 7,
    name: 'Verde 4',
    hexColor: '#99dbaa'
  }
]

const input = document.querySelector('.input-color')
const list  = document.querySelector('.list-colors')

const onKeyUp = (event) => {
  const minimumChars = 1
  const limitResult = 3
  let results = 0
  let selectedColors = ''


  if (event.target.value.length >= minimumChars) {

    colors.map((color) => {
      results += 1

      if (color.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()) && results <= limitResult) {
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
