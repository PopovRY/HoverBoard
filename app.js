const board = document.querySelector('#board')
const colors = ['#f70a0a', '#0e0af7', '#0af712', '#f3f70a', '#e40af7', '#f77d0a', '#0ae8f7', '#810af7']
const SQUARES_NUMBER = 500

for (let i=0; i<SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
    setColor(square))

    square.addEventListener('mouseleave', () =>
    removeColor(square))

    board.append(square)
}

function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
