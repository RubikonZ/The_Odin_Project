
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => createNewGrid())

function createNewGrid() {
    clearGrid(document.querySelector('.container'));
    let grid_size = prompt('Input size of the square grid (Should be <= 100)')
    for (i = 1; i <= grid_size**2; i++) {
        const new_div = document.createElement('div');
        new_div.classList.add('child');
        new_div.style.width = `${(window.innerWidth - 20)/grid_size}px`;
        new_div.style.height = `${window.innerHeight/grid_size}px`;
        //new_div.textContent = `#${i}`;
        container.appendChild(new_div)
    }

    let pixels = document.querySelectorAll('.child')

    pixels.forEach((pixel) => pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = 'black') )
}

function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

for (i = 1; i <= 256; i++) {
    const new_div = document.createElement('div');
    //new_div.textContent = `#${i}`;
    new_div.style.width = `${(window.innerWidth - 20)/16}px`;
    new_div.style.height = `${window.innerHeight/16}px`;
    new_div.style.fontSize = '10px';
    new_div.classList.add('child');
    container.appendChild(new_div);
}
let pixels = document.querySelectorAll('.child')

pixels.forEach((pixel) => pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = 'black') )