

const input = document.querySelector('.input-text')
const text = document.querySelector('.text')

const onKeyUp = (event) => {
  text.innerText = event.target.value
}

input.addEventListener('keyup', onKeyUp)
